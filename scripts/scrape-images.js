/**
 * Scraper DEFINITIVO de imágenes - La Clase Digital
 * URLs reales verificadas del sitio WordPress
 */
const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const BASE_URL = "https://www.laclasedigital.com.ar";
const ASSETS_DIR = path.join(__dirname, "..", "public", "assets");

// URLs VERIFICADAS del sitio real (WordPress con slugs)
const PAGES = [
  { url: "/", folder: "home" },
  { url: "/productos/", folder: "productos" },
  { url: "/pizarras-digitales-portatiles/", folder: "pizarras" },
  { url: "/servicios/", folder: "servicios" },
  { url: "/descargas/", folder: "descargas" },
  { url: "/blog/", folder: "blog" },
  { url: "/juegos/", folder: "juegos" },
  { url: "/contacto-pizarras-interactivas/", folder: "contacto" },
  // Intentar slugs alternativos de categorías
  { url: "/pantallas-interactivas/", folder: "pantallas" },
  { url: "/pantallas/", folder: "pantallas" },
  { url: "/proyectores-interactivos/", folder: "proyectores" },
  { url: "/proyectores/", folder: "proyectores" },
  { url: "/tomi-7/", folder: "tomi" },
  { url: "/tomi/", folder: "tomi" },
  { url: "/hdmi-inalambrico/", folder: "hdmi" },
  { url: "/robotica/", folder: "robotica" },
  { url: "/laboratorios-digitales/", folder: "laboratorios" },
  { url: "/laboratorios/", folder: "laboratorios" },
  { url: "/ciencias-de-la-salud/", folder: "medicina" },
  { url: "/salud/", folder: "medicina" },
  { url: "/rcp/", folder: "medicina" },
  { url: "/mobiliario/", folder: "mobiliario" },
  { url: "/mobiliario-educativo/", folder: "mobiliario" },
  { url: "/impresoras-3d/", folder: "impresoras3d" },
  // El sitio tiene muchos posts del blog, también scrapeamos
  { url: "/listadeprecios/", folder: "precios" },
  // Recursos externos del ecosistema con imágenes útiles
];

// Imágenes directamente conocidas del sitio (del manifest anterior)
const KNOWN_IMAGES = [
  "https://www.laclasedigital.com.ar/wp-content/uploads/",
];

function ensureDir(d) {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
}

function fetchPage(pageUrl, retries = 2) {
  return new Promise((resolve) => {
    const fullUrl = pageUrl.startsWith("http") ? pageUrl : BASE_URL + pageUrl;
    const options = {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,*/*;q=0.9",
        "Accept-Language": "es-AR,es;q=0.9",
        "Connection": "keep-alive",
      },
      timeout: 20000,
    };
    const lib = fullUrl.startsWith("https") ? https : http;
    const req = lib.get(fullUrl, options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fetchPage(res.headers.location, retries).then(resolve);
        return;
      }
      if (res.statusCode === 404 || res.statusCode === 403) { resolve(""); return; }
      let data = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data));
    });
    req.on("error", () => {
      if (retries > 0) fetchPage(pageUrl, retries - 1).then(resolve);
      else resolve("");
    });
    req.on("timeout", () => {
      req.destroy();
      if (retries > 0) fetchPage(pageUrl, retries - 1).then(resolve);
      else resolve("");
    });
  });
}

function extractImageUrls(html, pageBaseUrl) {
  const imgs = new Set();
  const patterns = [
    /<img[^>]+src=["']([^"']+)["']/gi,
    /url\(['"]?([^'")]+\.(?:jpg|jpeg|png|gif|svg|webp))['"]?\)/gi,
    /srcset=["']([^"']+)["']/gi,
    /data-src=["']([^"']+)["']/gi,
    /data-lazy-src=["']([^"']+)["']/gi,
    /content=["']([^"']*\.(?:jpg|jpeg|png|webp))["']/gi,
  ];

  for (const pattern of patterns) {
    let m;
    while ((m = pattern.exec(html)) !== null) {
      const raw = m[1].trim();
      if (raw.startsWith("data:")) continue;
      // Handle srcset
      if (raw.includes(",") && raw.includes(" ")) {
        for (const part of raw.split(",")) {
          const src = part.trim().split(/\s+/)[0];
          if (src) imgs.add(resolveUrl(src, pageBaseUrl));
        }
      } else {
        imgs.add(resolveUrl(raw, pageBaseUrl));
      }
    }
  }

  return [...imgs].filter(u => {
    if (!u || !u.startsWith("http")) return false;
    try {
      const p = new URL(u).pathname.toLowerCase().split("?")[0];
      return /\.(jpg|jpeg|png|gif|svg|webp|avif)$/.test(p);
    } catch { return false; }
  });
}

function resolveUrl(imgUrl, base) {
  if (!imgUrl || imgUrl.startsWith("data:")) return "";
  imgUrl = imgUrl.trim().split(" ")[0]; // handle srcset
  if (imgUrl.startsWith("http")) return imgUrl;
  if (imgUrl.startsWith("//")) return "https:" + imgUrl;
  if (imgUrl.startsWith("/")) return BASE_URL + imgUrl;
  try { return new URL(imgUrl, base).href; } catch { return ""; }
}

function downloadFile(fileUrl, destPath, retries = 2) {
  return new Promise((resolve) => {
    if (fs.existsSync(destPath)) { resolve("skip"); return; }
    const lib = fileUrl.startsWith("https") ? https : http;
    const options = {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Referer": BASE_URL + "/",
        "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
      },
      timeout: 25000,
    };
    ensureDir(path.dirname(destPath));
    const file = fs.createWriteStream(destPath);
    const req = lib.get(fileUrl, options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close(); fs.unlink(destPath, () => {});
        downloadFile(res.headers.location, destPath, retries).then(resolve);
        return;
      }
      if (res.statusCode !== 200) {
        file.close(); fs.unlink(destPath, () => {}); resolve("fail"); return;
      }
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve("ok"); });
      file.on("error", () => { file.close(); fs.unlink(destPath, () => {}); resolve("fail"); });
    });
    req.on("error", () => {
      file.close(); fs.unlink(destPath, () => {});
      if (retries > 0) downloadFile(fileUrl, destPath, retries - 1).then(resolve);
      else resolve("fail");
    });
    req.on("timeout", () => {
      req.destroy(); file.close(); fs.unlink(destPath, () => {}); resolve("fail");
    });
  });
}

function safeFilename(imgUrl) {
  try {
    const p = new URL(imgUrl).pathname;
    const base = path.basename(p.split("?")[0]);
    return base.replace(/[^a-zA-Z0-9._-]/g, "_").substring(0, 120) || "image.jpg";
  } catch { return "image.jpg"; }
}

async function main() {
  console.log("🚀 Scraper DEFINITIVO - La Clase Digital\n");
  ensureDir(ASSETS_DIR);

  // Cargar manifest previo
  const manifestPath = path.join(ASSETS_DIR, "manifest.json");
  let manifest = [];
  if (fs.existsSync(manifestPath)) {
    try { manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")); } catch {}
  }
  const done = new Set(manifest.map(m => m.src));

  const queue = new Map(); // imgUrl -> folder

  // FASE 1: Scrape todas las páginas
  console.log("📡 FASE 1: Descubriendo imágenes en todas las páginas...\n");
  for (const page of PAGES) {
    const fullUrl = (page.url.startsWith("http") ? "" : BASE_URL) + page.url;
    process.stdout.write(`  ${page.url.padEnd(45)} `);
    const html = await fetchPage(fullUrl);
    if (!html) { console.log("→ sin contenido"); continue; }
    const imgs = extractImageUrls(html, fullUrl);
    const newOnes = imgs.filter(i => !done.has(i) && !queue.has(i));
    console.log(`→ ${newOnes.length} nuevas (${imgs.length} total)`);
    for (const img of newOnes) queue.set(img, page.folder);
    await new Promise(r => setTimeout(r, 300));
  }

  console.log(`\n📦 Imágenes nuevas para descargar: ${queue.size}`);
  if (queue.size === 0) {
    console.log("✅ No hay nuevas imágenes. Todo al día!");
    listSummary(manifest);
    return;
  }

  // FASE 2: Descargar
  console.log("\n⬇️  FASE 2: Descargando imágenes...\n");
  let ok = 0, skip = 0, fail = 0;
  let i = 0;

  for (const [imgUrl, folder] of queue) {
    i++;
    const filename = safeFilename(imgUrl);
    const folderPath = path.join(ASSETS_DIR, folder);
    const destPath = path.join(folderPath, filename);
    const label = (imgUrl.replace(BASE_URL, "").substring(0, 65)).padEnd(65);
    process.stdout.write(`  [${String(i).padStart(3)}/${queue.size}] ${label} `);

    const result = await downloadFile(imgUrl, destPath);
    if (result === "ok") {
      ok++;
      console.log("✅");
      manifest.push({ src: imgUrl, local: `/assets/${folder}/${filename}`, folder });
    } else if (result === "skip") {
      skip++;
      console.log("⏭");
    } else {
      fail++;
      console.log("❌");
    }
    await new Promise(r => setTimeout(r, 80));
  }

  // Guardar manifest actualizado
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log("\n═══════════════════════════════════════════");
  console.log(`✅ Descargadas nuevas: ${ok}`);
  console.log(`⏭  Ya existían:       ${skip}`);
  console.log(`❌ Fallidas:           ${fail}`);
  console.log(`📦 Total en manifest:  ${manifest.length}`);
  console.log("═══════════════════════════════════════════");
  listSummary(manifest);
}

function listSummary(manifest) {
  const byFolder = {};
  for (const m of manifest) {
    byFolder[m.folder] = (byFolder[m.folder] || 0) + 1;
  }
  console.log("\n📂 Imagen por carpeta:");
  for (const [f, c] of Object.entries(byFolder).sort()) {
    console.log(`   ${String(c).padStart(3)} → public/assets/${f}/`);
  }
  console.log("\n🎉 Imágenes disponibles en public/assets/");
}

main().catch(console.error);

const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://laclasedigital.com.ar/Cursos/laclase/IT/oferta-academica-dokuma/index.html';
const baseUrl = 'https://laclasedigital.com.ar/Cursos/laclase/IT/oferta-academica-dokuma/';
const destDir = path.join('d:\\proyectos\\LCD\\public\\assets\\cursos');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const images = [];
    while ((match = imgRegex.exec(data)) !== null) {
      images.push(match[1]);
    }
    
    console.log('Found images:', images);

    images.forEach(imgUrl => {
      if (imgUrl.startsWith('data:')) return;
      
      let fullUrl = imgUrl;
      if (!imgUrl.startsWith('http')) {
        fullUrl = new URL(imgUrl, baseUrl).href;
      }
      
      const filename = path.basename(new URL(fullUrl).pathname);
      const destPath = path.join(destDir, filename);
      
      https.get(fullUrl, (imgRes) => {
        const fileStream = fs.createWriteStream(destPath);
        imgRes.pipe(fileStream);
        fileStream.on('finish', () => {
          console.log(`Downloaded ${filename}`);
        });
      }).on('error', (err) => {
        console.error(`Error downloading ${filename}: ${err.message}`);
      });
    });
  });
}).on('error', (err) => {
  console.error(`Error fetching page: ${err.message}`);
});

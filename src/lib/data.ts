import { LucideIcon, DollarSign, Download, Video, BookOpen, Monitor, Wrench, ShieldCheck, Users, Cpu, Star } from "lucide-react";

/* ── Category / Product ── */
export interface Category {
  id: string;
  title: string;
  desc: string;
  longDesc: string;
  href: string;
  img: string;
  tag: CategoryTag;
  products: string[];
  isNew?: boolean;
}

export type CategoryTag = "Todos" | "Aulas" | "STEM" | "Salud" | "Conectividad" | "Software" | "Videoconferencia" | "Sonido" | "Mobiliario" | "Dispositivos";

export const FILTER_TAGS: CategoryTag[] = ["Todos", "Aulas", "STEM", "Salud", "Conectividad", "Software", "Videoconferencia", "Sonido", "Mobiliario", "Dispositivos"];

export const categories: Category[] = [
  /* ── AULAS ── */
  {
    id: "pizarras-portatiles",
    tag: "Aulas",
    title: "Pizarras Digitales Portátiles",
    desc: "Mimio, eBeam, Describo — Convierte cualquier superficie en interactiva.",
    longDesc: "Transforma cualquier pared o pizarrón tradicional en una superficie interactiva. Compatible con proyectores existentes, sin necesidad de hardware adicional costoso.",
    href: "https://www.laclasedigital.com.ar/pizarras-digitales-portatiles/",
    img: "/assets/productos/PIZARRAi.png",
    products: ["Mimio Teach", "eBeam Classic", "Describo", "Kit de instalación rápida"],
    isNew: false,
  },
  {
    id: "pizarron-digital",
    tag: "Aulas",
    title: "Pizarrón Digital THScreen",
    desc: "Superficies interactivas de alta durabilidad sin proyector.",
    longDesc: "El pizarrón del siglo XXI. Sin proyector, sin cables complicados. Alta durabilidad para uso intensivo en aulas. Compatible con cualquier software educativo.",
    href: "https://www.laclasedigital.com.ar/productos/",
    img: "/assets/productos/LCD-Interactivo-TH-SCREENi.png",
    products: ["THScreen 60\"", "Mesa Interactiva THScreen", "Tótem THScreen", "Software de anotación"],
  },
  {
    id: "rotafolios",
    tag: "Aulas",
    title: "Rotafolios y Tableros Digitales",
    desc: "Pizarrones, rotafolios y tableros de mesa digitales interactivos.",
    longDesc: "Soluciones versátiles para reuniones, talleres y espacios colaborativos. Superficies de escritura digital que capturan y comparten contenido al instante.",
    href: "https://www.laclasedigital.com.ar/productos/",
    img: "/assets/productos/ROTAFOLLLIO.jpg",
    products: ["Rotafolios digitales", "Tableros de mesa", "Panel doble cara", "Base con ruedas"],
  },
  {
    id: "pantallas",
    tag: "Aulas",
    title: "Pantallas Interactivas",
    desc: "ViewSonic, Tótems y mesas táctiles de última generación.",
    longDesc: "Pantallas táctiles 4K con tecnología infrarroja multi-touch. Ideal para presentaciones, colaboración y gamificación con TOMi.",
    href: "https://www.laclasedigital.com.ar/productos/",
    img: "/assets/productos/Pantalla-interactiva.png",
    products: ["ViewBoard 65\" 4K", "Totem Táctil THScreen", "Mesa iMO", "Android integrado v11"],
    isNew: true,
  },
  {
    id: "proyectores",
    tag: "Aulas",
    title: "Proyectores Interactivos",
    desc: "BenQ, Epson, ViewSonic — Ultra-corto alcance y alta resolución.",
    longDesc: "Proyectores de ultra-corto alcance que eliminan las sombras del docente. Alta luminosidad para aulas con luz natural. Instalación sencilla y rápida.",
    href: "https://www.laclasedigital.com.ar/productos/",
    img: "/assets/productos/proyector1.png",
    products: ["Epson BrightLink", "ViewSonic PS501X", "ViewSonic PA503S", "Soporte anti-vibración"],
  },
  {
    id: "tomi",
    tag: "Aulas",
    title: "TOMI 7 – PC Docente",
    desc: "La computadora personal del docente. Todo en uno, sin cables.",
    longDesc: "Diseñada exclusivamente para el docente argentino. Incluye suite de gamificación TOMi preinstalada, conectividad inalámbrica y batería de larga duración.",
    href: "https://www.laclasedigital.com.ar/productos/",
    img: "/assets/productos/Tomi-7-Maestro.png",
    products: ["TOMI 7 Base", "TOMI 7 Plus", "TOMi Digital Platform", "Cargador rápida"],
    isNew: true,
  },
  /* ── STEM ── */
  {
    id: "robotica",
    tag: "STEM",
    title: "Robótica y Programación",
    desc: "Arduino, Rasti, SIMA — Aprender haciendo desde los primeros años.",
    longDesc: "Kits completos para introducir pensamiento computacional desde los primeros años. Desde programación visual hasta robótica avanzada con Arduino.",
    href: "https://tienda.garaged.com.ar/robotica-y-laboratorios-digitales/",
    img: "/assets/productos/Chicos-y-Arduino.png",
    products: ["Kit Arduino Starter", "Rasti Ingeniería", "SIMA Robot Social", "Robot educativo"],
    isNew: true,
  },
  {
    id: "laboratorios",
    tag: "STEM",
    title: "Laboratorios Digitales",
    desc: "Labdisc, Lab Idiomas — Ciencias y lenguas en el aula del siglo XXI.",
    longDesc: "Laboratorios portátiles con sensores para física, química, biología y medio ambiente. Un solo dispositivo reemplaza decenas de instrumentos tradicionales.",
    href: "https://tienda.garaged.com.ar/robotica-y-laboratorios-digitales/",
    img: "/assets/productos/Labdisc.png",
    products: ["Labdisc Enviro", "Labdisc Gensci", "Lab Idioma Sanako", "Software de análisis"],
  },
  /* ── SALUD ── */
  {
    id: "salud",
    tag: "Salud",
    title: "Ciencias de la Salud / RCP",
    desc: "Practi-Man, torsos y esqueletos — Simuladores de primer nivel.",
    longDesc: "Simuladores de alta fidelidad certificados para protocolos AHA/ILCOR. Feedback electrónico inalámbrico en tiempo real para instructor y alumno.",
    href: "https://www.laclasedigital.com.ar/productos/",
    img: "/assets/productos/Practimani.png",
    products: ["Practi-Man Adult", "Torso XC-208", "Esqueleto a Escala", "Modelo de Esqueleto"],
  },
  /* ── CONECTIVIDAD ── */
  {
    id: "hdmi",
    tag: "Conectividad",
    title: "HDMI Inalámbrico",
    desc: "ActionTec, ScreenBeam — Proyectá sin cables desde cualquier dispositivo.",
    longDesc: "Elimina los cables HDMI del aula. Transmisión de video Full HD en tiempo real. Múltiples dispositivos, una sola pantalla. Sin latencia perceptible.",
    href: "https://www.screenbeam.com/es/",
    img: "/assets/productos/HDMI-Interactivo-BEAM.png",
    products: ["ScreenBeam 960", "ActionTec MyWirelessTV5", "ScreenBeam 750", "Dongle USB-C"],
  },
  /* ── SOFTWARE ── */
  {
    id: "software",
    tag: "Software",
    title: "Software Educativo",
    desc: "TOMi Digital, MimioStudio, Earling — Plataformas y apps para el aula.",
    longDesc: "Conocé las plataformas, APP y software para mejorar la interacción con los alumnos, facilitar la actividad del docente y gestionar el aula.",
    href: "https://www.laclasedigital.com.ar/productos/",
    img: "/assets/productos/Plataforma-TOMI.png",
    products: ["TOMi Digital Platform", "MimioStudio", "Earling", "Gestión de Aula"],
  },
  /* ── VIDEOCONFERENCIA ── */
  {
    id: "videoconferencia",
    tag: "Videoconferencia",
    title: "Equipos de Videoconferencia",
    desc: "Logitech — Videocolaboración simple y flexible para aulas y empresas.",
    longDesc: "Productos de videoconferencia simples y flexibles que se adaptan a todas las plataformas de trabajo colaborativo con precios convenientes.",
    href: "https://tienda.garaged.com.ar/equipos-de-videoconferencia/",
    img: "/assets/productos/conferencecam-connect.png",
    products: ["ConferenceCam Connect", "PTZ Pro 2", "Logitech MeetUp", "Cámara documento MimioView"],
  },
  /* ── SONIDO ── */
  {
    id: "sonido",
    tag: "Sonido",
    title: "Equipos de Sonido para el Aula",
    desc: "Parlantes, micrófonos y sistemas de audio para el aula o el SUM.",
    longDesc: "Sistemas de sonido diseñados para espacios educativos. Parlantes con Bluetooth, micrófonos corbateros y amplificadores para mayor proyección de voz.",
    href: "https://www.laclasedigital.com.ar/productos/",
    img: "/assets/productos/Parlante-con-Bluetooth.png",
    products: ["Parlante Bluetooth", "Parlante GBR", "Micrófono Corbatero", "Sistema de amplificación"],
  },
  /* ── MOBILIARIO ── */
  {
    id: "mobiliario",
    tag: "Mobiliario",
    title: "Mobiliario Educativo",
    desc: "Carros porta-tablets, pantallas de proyección y bases con carga.",
    longDesc: "Soluciones de almacenamiento y carga para dispositivos educativos. Ergonomía pensada para el aula moderna. Acero de alta resistencia con ruedas con freno.",
    href: "https://www.laclasedigital.com.ar/productos/",
    img: "/assets/productos/Carro-Portanotebooks.png",
    products: ["Carro 30 tablets", "Pantallas de Proyección", "Mobiliario flexible", "Base proyector móvil"],
  },
  /* ── DISPOSITIVOS ── */
  {
    id: "dispositivos",
    tag: "Dispositivos",
    title: "Notebooks, PC y Tablets",
    desc: "Bangho, tablets educativas — Equipos nuevos y reciclados para instituciones.",
    longDesc: "Equipos nuevos o reciclados, interesante opción para manejar costos más flexibles. Configurados y listos para el uso educativo.",
    href: "https://www.laclasedigital.com.ar/productos/",
    img: "/assets/productos/Tabletsi.png",
    products: ["PC Bangho", "Notebook Reciclada Bangho", "Tablets educativas", "Impresoras"],
  },
];


/* ── Brands ── */
export const brands = [
  "ViewSonic", "Newline", "Boxlight", "BenQ", "Epson",
  "Mimio", "eBeam", "THScreen", "ActionTec", "ScreenBeam",
  "Yamaha", "Logitech", "Practi-Man", "Arduino", "Rasti",
  "Labdisc", "Sanako", "Gigo", "SIMA",
];

/* ── RCP Products ── */
export const rcpProducts = [
  {
    title: "Practi-Man Adult",
    desc: "Maniquí adulto de alta fidelidad con feedback visual LED de profundidad y ritmo. Compatible con app inalámbrica.",
    detail: "Proveedor: Laerdal / Nasco",
    img: "/assets/productos/Practimani.png",
    href: "/productos/ciencias-de-la-salud",
  },
  {
    title: "Torso Bisexuado XC-208i",
    desc: "Torso completo para simulación con DEA. Incluye monitoreo en tiempo real y registro de métricas por alumno.",
    detail: "Feedback electrónico + software",
    img: "/assets/productos/Torso-Bixesuado-XC-208i.png",
    href: "/productos/ciencias-de-la-salud",
  },
  {
    title: "Esqueleto a Escala",
    desc: "Maqueta anatómica de alta precisión. Ideal para clases de anatomía y fisiología.",
    detail: "Escala real + soporte articulado",
    img: "/assets/productos/Esqueleto-a-Escala.png",
    href: "/productos/ciencias-de-la-salud",
  },
  {
    title: "Simulador DEA Trainer",
    desc: "Desfibrilador de entrenamiento con locución en español, pasos guiados y escenarios variables de arritmia.",
    detail: "Modo instructor con control remoto",
    img: "/assets/productos/Modelo-de-Esqueleto.png",
    href: "/productos/ciencias-de-la-salud",
  },
];

/* ── Shortcuts ── */
export interface Shortcut {
  icon: LucideIcon;
  label: string;
  href: string;
  external?: boolean;
}
export const shortcuts: Shortcut[] = [
  { icon: DollarSign, label: "Lista de Precios", href: "https://tienda.garaged.com.ar/tecnologia-educativa/", external: true },
  { icon: Download, label: "Descargas", href: "/descargas" },
  { icon: Video, label: "Videos", href: "https://www.youtube.com/user/ondafilms/videos", external: true },
  { icon: BookOpen, label: "Blog", href: "/blog" },
  { icon: Monitor, label: "TOMi Digital", href: "https://tomi.digital", external: true },
  { icon: Wrench, label: "Soporte Técnico", href: "/servicios/instalacion-soporte" },
];

/* ── Differentiators ── */
export const differentiators = [
  { icon: ShieldCheck, title: "Distribuidores Oficiales", desc: "Únicos representantes autorizados de Mimio, eBeam, Practi-Man y THScreen en Argentina." },
  { icon: Users, title: "Soporte Pedagógico Real", desc: "No vendemos cajas: acompañamos la implementación con capacitación in-situ y seguimiento continuo." },
  { icon: Cpu, title: "Ecosistema Integrado", desc: "Hardware + Software + Gamificación (TOMi) + Capacitación en un único proveedor de confianza." },
  { icon: Star, title: "20 Años de Trayectoria", desc: "Más de 2.000 instituciones transformaron sus aulas con La Clase Digital en Argentina, Paraguay y Uruguay." },
];

/* ── Ecosystem ── */
export const ecosystemItems = [
  {
    title: "TOMi Digital",
    href: "https://tomi.digital",
    desc: "El software de gamificación educativa nro. 1 de Argentina. Cuánto Sabés, Opivalia y más herramientas para dinamizar la clase.",
    badge: "Software #1",
    accent: "#0099D7",
  },
  {
    title: "Bienestar Docente",
    href: "https://bienestardocente.com.ar/login",
    desc: "Plataforma de bienestar y formación para docentes. Recursos, comunidad y acompañamiento emocional.",
    badge: "Comunidad",
    accent: "#61CE70",
  },
  {
    title: "Diplomado Dokuma",
    href: "http://laclasedigital.com.ar/Cursos/laclase/IT/oferta-academica-dokuma/index.html",
    desc: "Capacitación docente certificada para el uso pedagógico de tecnología interactiva. Modalidad virtual y presencial.",
    badge: "Certificado",
    accent: "#576CBC",
  },
];

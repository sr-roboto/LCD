import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.laclasedigital.com.ar';
  
  const routes = [
    '',
    '/blog',
    '/juegos',
    '/productos',
    '/nosotros',
    '/contacto',
    '/descargas',
    '/cursos',
    '/soluciones',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}

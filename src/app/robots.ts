import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/login', '/registro'],
    },
    sitemap: 'https://www.laclasedigital.com.ar/sitemap.xml',
  };
}

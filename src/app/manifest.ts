import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'La Clase Digital',
    short_name: 'LCD',
    description: 'Ecosistema educativo integral: hardware, software y capacitación.',
    start_url: '/',
    display: 'standalone',
    background_color: '#12136b',
    theme_color: '#12136b',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}

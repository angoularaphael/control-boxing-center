import './globals.css';

export const metadata = {
  title: 'Control Center — Boxing Center',
  description: 'Hub de gestion des outils Boxing Center',
  applicationName: 'Boxing Center',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Boxing Center',
  },
  icons: {
    icon: [
      { url: '/favicon.svg?v=bc5', type: 'image/svg+xml' },
      { url: '/favicon.ico?v=bc5', sizes: 'any' },
      { url: '/favicon.png?v=bc5', sizes: '48x48', type: 'image/png' },
      { url: '/icons/icon-192.png?v=bc5', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png?v=bc5', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png?v=bc5', sizes: '180x180', type: 'image/png' }],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

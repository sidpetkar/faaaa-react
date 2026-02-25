import './globals.css';

export const metadata = {
  title: 'FAAAAA',
  description: 'Press the red button',
  manifest: '/faaaa-react/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'FAAAAA'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ff0000'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/faaaa-react/favicon.ico" />
        <link rel="apple-touch-icon" href="/faaaa-react/icon-192x192.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

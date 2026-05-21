'use client';
import './globals.css';
import Navigation from '@/components/Navigation';
import CursorLens from '@/components/CursorLens';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags and title */}
        <title>ICECAPCC | Imagine. Create. Execute.</title>
        <meta name="description" content="ICECAPCC is an elite digital studio building sovereign intelligence ecosystems and premium web applications." />
      </head>
      <body>
        <CursorLens />
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

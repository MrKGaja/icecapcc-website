import './globals.css';
import Navigation from '@/components/Navigation';
import CursorLens from '@/components/CursorLens';

export const metadata = {
  metadataBase: new URL('https://icecap.cc'),
  title: 'ICECAPCC | Elite Digital Studio & Sovereign Ecosystems',
  description: 'ICECAPCC is an elite digital studio building sovereign intelligence ecosystems and premium web applications at the frontier of technology.',
  openGraph: {
    title: 'ICECAPCC | Imagine. Create. Execute.',
    description: 'ICECAPCC is an elite digital studio building sovereign intelligence ecosystems and premium web applications.',
    url: 'https://icecap.cc',
    siteName: 'ICECAPCC',
    images: [
      {
        url: '/hero-video-poster.jpg',
        width: 1280,
        height: 720,
        alt: 'ICECAPCC Deep Ocean Iceberg Refraction',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICECAPCC | Elite Digital Studio',
    description: 'Building sovereign intelligence ecosystems and premium web applications.',
    images: ['/hero-video-poster.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  // AEO & GEO Structured Data (Schema.org)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ICECAPCC',
    url: 'https://icecap.cc',
    logo: 'https://icecap.cc/hero-video-poster.jpg',
    description: 'An elite digital studio building sovereign intelligence ecosystems and premium web applications.',
    sameAs: [
      // Add social links here if/when they exist
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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

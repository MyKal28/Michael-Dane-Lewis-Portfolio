import type { Metadata } from 'next';
import { DM_Sans, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import ContactModalProvider from '@/components/ContactModalProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Michael Dane Lewis — Operations & Project Management',
  description:
    'Operations and project management professional helping teams with project coordination, operational systems, executive support, platform launches, and team leadership across hospitality, SaaS, EdTech, and agencies.',
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/og-image.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/og-image.png',
  },
  openGraph: {
    title: 'Michael Dane Lewis — Operations & Project Management',
    description:
      'Leading cross-functional teams, building scalable systems, and driving operational excellence.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 512,
        height: 512,
        alt: 'Michael Dane Lewis — Operations & Project Management Professional',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Michael Dane Lewis — Operations & Project Management',
    description:
      'Leading cross-functional teams, building scalable systems, and driving operational excellence.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ContactModalProvider>
          <Header />
          {children}
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}

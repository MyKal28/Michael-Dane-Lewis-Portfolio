import type { Metadata } from 'next';
import { DM_Sans, Source_Serif_4 } from 'next/font/google';
import './globals.css';
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
  openGraph: {
    title: 'Michael Dane Lewis — Operations & Project Management',
    description:
      'Leading cross-functional teams, building scalable systems, and driving operational excellence.',
    type: 'website',
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

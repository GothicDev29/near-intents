import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { LenisProvider } from '@/lib/lenis-provider';

// Using Space Grotesk as alternative to FK Grotesk (similar geometric sans-serif)
// To use FK Grotesk instead, replace with localFont and add font files
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-grotesk',
});

export const metadata: Metadata = {
  title: 'NEAR Intents - The Universal Liquidity Protocol',
  description:
    'NEAR Intents powers one-click cross-chain swaps, unified liquidity, and universal execution for onchain markets.',
  openGraph: {
    title: 'NEAR Intents - The Universal Liquidity Protocol',
    description: 'Cross-chain swaps simplified. $13B+ all-time volume across 35+ chains.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEAR Intents',
    description: 'The universal liquidity protocol',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} antialiased`} suppressHydrationWarning>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

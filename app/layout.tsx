import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LenisProvider } from '@/lib/lenis-provider';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={`${inter.className} antialiased`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

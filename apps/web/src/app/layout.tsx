import '@/globals.css';
import type { ReactNode } from 'react';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display'
});

export const metadata = {
  title: 'Libreca – Web MVP',
  description: 'Couch‑friendly all‑in‑one hub'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import './globals.css';

import { ThemeProvider } from '@/state/theme-context';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400'],
  style: 'normal',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Thanh Dang',
  description:
    'Full Stack Developer | React/Nest.Js/Next.js/Flask/Node.js/Javascript/Typescript/PHP/AWS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="relative font-sans text-slate-700">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

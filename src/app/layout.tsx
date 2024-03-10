import { ReactNode, Suspense } from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import { ThemeProvider } from '@/state/theme-context';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400'],
  style: 'normal',
  variable: '--font-roboto',
});

const SITE_NAME = process.env['SITE_NAME'] ?? 'Thanh Dang';
const DESC =
  'Full Stack Developer | React/Nest.Js/Next.js/Flask/Node.js/Javascript/Typescript/PHP/AWS';
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  openGraph: {
    title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
    description: DESC,
  },
  robots: {
    follow: true,
    index: true,
  },
  description: DESC,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="relative font-sans text-slate-700">
        <Suspense>
          <ThemeProvider>{children}</ThemeProvider>
        </Suspense>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

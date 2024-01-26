import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

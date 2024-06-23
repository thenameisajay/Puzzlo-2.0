import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { siteConfig } from '@/data/site/siteConfig';
import '@/styles/globals.css';
import { TRPCReactProvider } from '@/trpc/react';

export const metadata: Metadata = {
  title: siteConfig.title,
  applicationName: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  creator: siteConfig.creator,
};

const MonaSans = localFont({
  src: './Mona-Sans.woff2',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`min-h-dvh  w-screen  bg-sky-500 ${MonaSans.className}`}
    >
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { siteConfig } from '@/data/site/siteConfig';
import { Providers } from '@/providers/providers';
import '@/styles/globals.css';

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
    <html lang="en">
      <body className={`${MonaSans.className} bg-sky-500`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

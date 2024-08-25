import { Toaster } from 'react-hot-toast';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import CookieComponent from '@/components/cookie-component/Component';
import { siteConfig } from '@/data/site/data';
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
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${MonaSans.className} bg-sky-500`}>
        <Providers>
          <Toaster />
          {children}
          <CookieComponent />
        </Providers>
      </body>
    </html>
  );
}

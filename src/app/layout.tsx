import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/react";
import { siteConfig } from "@/data/site/siteConfig";

export const metadata: Metadata = {
  title: siteConfig.title,
  applicationName: siteConfig.title,

  description: siteConfig.description,
  keywords: siteConfig.keywords,

  creator: siteConfig.creator,
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-dvh  w-screen  bg-sky-500 ">
      <body className={inter.className}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}

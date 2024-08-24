'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DotsNine } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navConfig } from '@/data/navbar/data';
import { siteConfig } from '@/data/site/data';
import { cn } from '@/lib/utils';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-2  flex w-full flex-col items-start justify-start border-b  border-yellow-500  p-1 focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <DotsNine size={32} weight={'bold'} className="text-yellow-400" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-sky-500 pr-0 font-bold text-white"
        >
          <MobileLink
            href={'/'}
            className="flex items-center"
            onOpenChange={setOpen}
          >
            <Image
              src="/icon.png"
              alt="Puzzlo Logo"
              width={100}
              height={100}
              className="mr-2 h-7 w-7"
            />
            <span
              className="text-3xl
            font-bold
            "
            >
              {siteConfig.title}
            </span>
          </MobileLink>
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
            <div className="flex flex-col space-y-5">
              {navConfig.map(
                (item) =>
                  item.href && (
                    <MobileLink
                      key={item.href}
                      href={item.href}
                      onOpenChange={setOpen}
                    >
                      <div className="flex  w-full flex-row  space-x-2">
                        <div>{item.icon && item.icon}</div>{' '}
                        <div>{item.title}</div>{' '}
                      </div>
                    </MobileLink>
                  ),
              )}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}

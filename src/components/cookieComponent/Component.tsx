'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { setCookiesAccepted } from '@/actions/cookies/setCookies/actions';
import { Button } from '@/components/ui/button';

export default function CookieComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 translate-y-0 transform transition-transform duration-300 ease-in-out">
      <div className="mx-auto max-w-4xl rounded-t-lg bg-sky-500 p-4 text-white shadow-lg">
        <div className="flex w-full items-center justify-end px-3 md:px-0">
          <button
            type="button"
            onClick={handleClose}
            className="text-white transition-colors hover:text-sky-200"
          >
            <X size={24} />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-grow">
            <h2 className="mb-2 text-lg font-semibold">Cookie Consent</h2>
            <p className="text-sm">
              We use cookies to enhance your playing experience and analyze our
              traffic. By clicking &apos;Accept&apos;, you consent to our use of
              cookies.
            </p>
          </div>
          <div className="flex h-full items-center justify-start space-x-4 px-4">
            <Button
              variant="outline"
              className="bg-white text-sky-600 hover:bg-sky-100"
              onClick={async () => {
                await setCookiesAccepted(true);
                handleClose();
              }}
            >
              Accept
            </Button>
            <Button
              variant="outline"
              className="bg-white text-sky-600 hover:bg-sky-100"
              onClick={async () => {
                await setCookiesAccepted(false);
                handleClose();
              }}
            >
              Nope
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

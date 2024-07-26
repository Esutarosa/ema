import type { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { NextUIProvider } from '@/providers';
import { poppins } from '@/config/fonts';

import { cn } from '@/helpers/cn';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'EMA',
  description: "Most respected EMA's fan club with DUSTCELL",
};

interface layoutProps extends PropsWithChildren { }

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(
        'bg-background text-foreground font-poppins',
        poppins.className
      )}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}

export default layout;
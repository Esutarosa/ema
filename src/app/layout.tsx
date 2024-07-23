import type { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'EMA',
  description: "Most respected EMA's fan club with DUSTCELL",
};

interface layoutProps extends PropsWithChildren { }

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body className='bg-background text-foreground font-sans'>
        {children}
      </body>
    </html>
  );
}

export default layout;
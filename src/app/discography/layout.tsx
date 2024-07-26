import type { FC, PropsWithChildren } from 'react';

import { Layout } from '@/components/layouts';

interface DiscographyLayoutProps extends PropsWithChildren { }

const DiscographyLayout: FC<DiscographyLayoutProps> = ({ children }) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
}

export default DiscographyLayout;
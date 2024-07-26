import type { FC, PropsWithChildren } from 'react';

import { Layout } from '@/components/layouts';

interface DustcellLayoutProps extends PropsWithChildren { }

const DustcellLayout: FC<DustcellLayoutProps> = ({ children }) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
}

export default DustcellLayout;
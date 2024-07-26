import type { FC, PropsWithChildren } from 'react';

import { Layout } from '@/components/layouts';

interface SocialLayoutProps extends PropsWithChildren { }

const SocialLayout: FC<SocialLayoutProps> = ({ children }) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
}

export default SocialLayout;
import type { FC } from 'react';

import { Hero } from '@/components/hero';
import { Layout } from '@/components/layouts';

const Home: FC = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

export default Home;
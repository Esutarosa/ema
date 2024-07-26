import type { FC } from 'react';

import { Layout } from '@/components/layouts';

import { Hero } from '@/components/hero';

const Home: FC = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

export default Home;
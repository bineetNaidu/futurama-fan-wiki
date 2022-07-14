import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Futurama Fan Wiki</title>
        <meta name="description" content="Futurama Fan wiki" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Character Wiki</h1>
      </main>
    </>
  );
};

export default Home;

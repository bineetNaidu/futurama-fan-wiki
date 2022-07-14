import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useGetAllCharacters } from '../services/getAllCharacters';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  const { data, error } = useGetAllCharacters();
  if (error)
    return (
      <div className="font-bold text-center mt-32 text-xl text-red-500">
        <p>Failed to load the data</p>
        <p>Error: {error.message}</p>
      </div>
    );

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <Head>
        <title>Futurama Fan Wiki</title>
        <meta name="description" content="Futurama Fan wiki" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center text-5xl my-6 font-bold text-blue-900">
          Character Wiki
        </h1>

        <motion.div
          className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 my-16"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {data &&
            data.map((c) => (
              <Link
                key={c.Name}
                rel="preload"
                href="/characters/[name]"
                as={`/characters/${c.Name.replaceAll(' ', '-')}`}
              >
                <motion.div
                  key={c.Name}
                  className="border p-2 group cursor-pointer"
                  variants={item}
                >
                  <div className="relative">
                    <Image
                      src={c.PicUrl}
                      alt={c.Name}
                      width={200}
                      height={200}
                      layout="responsive"
                      className="mx-auto relative group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">{c.Name}</h2>
                </motion.div>
              </Link>
            ))}
        </motion.div>
      </main>
    </>
  );
};

export default Home;

import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useGetAllCharacters } from '../services/getAllCharacters';

const Home: NextPage = () => {
  const { data, error } = useGetAllCharacters();
  if (error)
    return (
      <div className="font-bold text-center mt-32 text-xl text-red-500">
        <p>Failed to load the data</p>
        <p>Error: {error.message}</p>
      </div>
    );
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

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 my-16">
          {data &&
            data.map((c) => (
              <Link
                key={c.Name}
                rel="preload"
                href="/characters/[name]"
                as={`/characters/${c.Name.replaceAll(' ', '-')}`}
              >
                <div key={c.Name} className="border p-2 group cursor-pointer">
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
                </div>
              </Link>
            ))}
        </div>
      </main>
    </>
  );
};

export default Home;

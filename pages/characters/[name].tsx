import type { NextPage } from 'next';
import type { Character } from '../../lib/types';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useGetCharacter } from '../../services/getCharacter';
import { useGetQuotesByCharacter } from '../../services/getQuotesByCharacter';
import { motion } from 'framer-motion';

const CharacterPage: NextPage<{ character: Character }> = () => {
  const router = useRouter();
  const name = router.query.name as string;
  const { character, error } = useGetCharacter(name?.replaceAll('-', ' '));
  const { quotes } = useGetQuotesByCharacter(name?.replaceAll('-', ' '));

  const data = character ? character[0] : null;
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

  if (error)
    return (
      <div className="font-bold text-center mt-32 text-xl text-red-500">
        <Head>
          <title>Error</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <p>Failed to load the data</p>
        <p>Error: {error.message}</p>
      </div>
    );

  if (!data)
    return (
      <div className="font-bold text-center mt-32 text-xl text-red-500">
        <Head>
          <title>Character not found</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <p>Character not found!</p>
      </div>
    );

  return (
    <>
      <Head>
        <title>{data.Name} | Futurama Fan Wiki</title>
        <meta name="description" content={`${data.Name}'s Fan Wiki`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main variants={container} initial="hidden" animate="visible">
        <Link href="/">
          <a className="text-lg text-gray-800 px-3 py-2 border-2 border-gray-800 border-dashed cursor-pointer">
            Go Back
          </a>
        </Link>
        <h1 className="text-center text-5xl my-6 font-bold text-blue-900">
          {data.Name}&apos; character Wiki
        </h1>

        <motion.main
          variants={item}
          className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 my-16 mx-auto"
        >
          <div className="flex flex-col items-center">
            <div className="relative w-[300px]">
              <Image
                src={data.PicUrl}
                alt={data.Name}
                width={200}
                height={200}
                layout="responsive"
              />
            </div>

            <motion.div variants={item} className="text-xl">
              <h1 className="text-3xl my-4 font-bold">{data.Name}</h1>
              <p>
                <span className="font-medium">Age: </span>
                <span>{data.Age}</span>
              </p>
              <p>
                <span className="font-medium">First Appearance: </span>
                <span>{data.FirstAppearance}</span>
              </p>
              <p>
                <span className="font-medium">Planet: </span>
                <span>{data.Planet}</span>
              </p>
              <p>
                <span className="font-medium">Profession: </span>
                {data.Profession}
              </p>
              <p>
                <span className="font-medium">Relatives: </span>
                <span>{data.Relatives}</span>
              </p>
              <p>
                <span className="font-medium">Species: </span>
                <span>{data.Species}</span>
              </p>
              <p>
                <span className="font-medium">Status: </span>
                <span>{data.Status}</span>
              </p>
              <p>
                <span className="font-medium">Voiced By: </span>
                <span>{data.VoicedBy}</span>
              </p>
            </motion.div>

            <div className="my-5">
              <h2 className="text-3xl my-4 font-bold">
                Some Quotes by {data.Name}
              </h2>

              {quotes?.length ? (
                quotes.map((quote, index) => (
                  <div key={index} className="flex justify-center">
                    <div className="relative w-[300px]">
                      <Image
                        src={quote.image}
                        alt={quote.character}
                        width={200}
                        height={200}
                      />
                    </div>
                    <q>{quote.quote}</q>
                  </div>
                ))
              ) : (
                <p className="text-center italic">
                  There are not quotes by this character!
                </p>
              )}
            </div>
          </div>
        </motion.main>
      </motion.main>
    </>
  );
};

export default CharacterPage;

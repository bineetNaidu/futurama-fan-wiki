import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="border-2 border-dashed p-4 m-2 min-h-screen h-full border-gray-800">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

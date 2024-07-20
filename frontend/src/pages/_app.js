import "@/styles/globals.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Component key={router.asPath} {...pageProps} />
      </main>
    </>
  );
}

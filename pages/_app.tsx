import '../src/styles/globals.scss';
import Head from "next/head";
import type { AppProps } from 'next/app'

export default function App({Component, pageProps}: AppProps) {
    return (
     <>
       <Head>
        <title>Котики</title>
        <meta name="description"
              content="хорошие котики"/>
        <link rel="icon" href={"/favicon.ico"}/>
         </Head>
            <Component {...pageProps} />

     </>
    )
}

import type { AppProps } from "next/app";

import Header from "components/Header";
import Footer from "components/Footer";

import "@/styles/globals.css";
import Head from "components/Head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

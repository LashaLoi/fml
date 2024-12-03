import type { AppProps } from "next/app";

import { Roboto } from "@next/font/google";

import Header from "components/Header";
import Footer from "components/Footer";

import "@/styles/globals.css";
import Head from "components/Head";

const inter = Roboto({
  weight: "100",
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

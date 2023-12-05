import type { AppProps } from "next/app";

import { Roboto } from "@next/font/google";

import Header from "components/Header";
import Footer from "components/Footer";

import "@/styles/globals.css";
import Head from "components/Head";

import { init } from "@emailjs/browser";

const inter = Roboto({
  weight: "100",
  variable: "--font-inter",
});

init("_d7Gy1hFeTL7avenj");

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

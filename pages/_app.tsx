import type { AppProps } from "next/app";

import { Inter } from "@next/font/google";

import Header from "components/Header";
import Footer from "components/Footer";

import "@/styles/globals.css";
import Head from "components/Head";

import { init } from "@emailjs/browser";

const inter = Inter({
  variable: "--font-inter",
});

init("_d7Gy1hFeTL7avenj");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head />
      <Header />
      <div className="pt-[80px]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

import { useEffect, useState } from "react";

import Gallery from "../components/Gallery";
import Goals from "../components/Goals";
import Program from "../components/Program";
import Register from "../components/Register";
import Users from "../components/Users";
import Price from "../components/Price";
import Map from "../components/Map";
import FAQ from "../components/FAQ";
import Why from "../components/Why";
import About from "../components/About";

export default function IndexPage() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <>
      <Register />
      <Goals isSafari={isSafari} />
      <Price />
      <Gallery />
      <About />
      <Program />
      <Users isSafari={isSafari} />
      <Why />
      <Map />
      <FAQ />
    </>
  );
}

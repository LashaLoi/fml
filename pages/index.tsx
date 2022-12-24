import Gallery from "../components/Gallery";
import Goals from "../components/Goals";
// import Program from "../components/Program";
import Register from "../components/Register";
import Users from "../components/Users";
// import Map from "../components/Map";
import FAQ from "../components/FAQ";
import Why from "../components/Why";
import { useEffect, useState } from "react";
// import About from "../components/About";

export default function IndexPage() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <>
      <Register />
      <Goals isSafari={isSafari} />
      <Gallery />
      {/* <Program /> */}
      {/* <About /> */}
      <Users isSafari={isSafari} />
      <Why />
      {/* <Map /> */}
      <FAQ isSafari={isSafari} />
    </>
  );
}

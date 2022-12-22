import Gallery from "../components/Gallery";
import Goals from "../components/Goals";
// import Program from "../components/Program";
import Register from "../components/Register";
import Users from "../components/Users";
// import Map from "../components/Map";
import FAQ from "../components/FAQ";
import Why from "../components/Why";
// import About from "../components/About";

export default function IndexPage() {
  return (
    <>
      <Register />
      <Goals />
      <Gallery />
      {/* <Program /> */}
      {/* <About /> */}
      <Users />
      <Why />
      {/* <Map /> */}
      <FAQ />
    </>
  );
}

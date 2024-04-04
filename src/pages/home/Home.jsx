import { Fragment } from "react";
import Navbar from "../../common/Header";
import Footer from "../../common/Footer";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section4 from "./components/Section4";
import Section3 from "./components/Section3";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </Fragment>
  )
}

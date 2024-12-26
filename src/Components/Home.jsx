import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import KeyHighlights from "./KeyHighlights";
import PoweringInnovation from "./PoweringInnovation";
import Footer from "./Footer";
import UltimatePower from "./UltimatePower";

function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <UltimatePower />
      <AboutUs />
      <KeyHighlights />
      <PoweringInnovation />
    </div>
  );
}

export default Home;

import AboutUs from "./AboutUs";
import Banner from "./Banner";
import KeyHighlights from "./KeyHighlights";
import PoweringInnovation from "./PoweringInnovation";
import UltimatePower from "./UltimatePower";
import YourSuccessMadeSimple from "./YourSuccessMadeSimple";

function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <UltimatePower />
      <AboutUs />
      <KeyHighlights />
      <PoweringInnovation />
      <YourSuccessMadeSimple/>
    </div>
  );
}

export default Home;

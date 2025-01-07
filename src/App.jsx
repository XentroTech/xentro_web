import { Route, BrowserRouter as Router, Routes, } from "react-router";
import FAQ from "./Components/Faq";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import BusinessModel from "./Components/pages/BusinessModel";
import ContactUs from "./Components/pages/ContactUs";
import MoreServices from "./Components/pages/MoreServices";
import OurServices from "./Components/pages/OurServices";
import OurTeam from "./Components/pages/OurTeam";
import WhyChooseUs from "./Components/pages/WhyChooseUs";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
      <ScrollToTop/>
        <div >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/businessModel" element={<BusinessModel />} />
            <Route path="/moreServices" element={<MoreServices />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/chooseUs" element={<WhyChooseUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;

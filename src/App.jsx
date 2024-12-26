import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import OurServices from "./Components/pages/OurServices";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BusinessModel from "./Components/pages/BusinessModel";
import OurTeam from "./Components/pages/OurTeam";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="div">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/business" element={<BusinessModel />} />
            <Route path="/team" element={<OurTeam />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

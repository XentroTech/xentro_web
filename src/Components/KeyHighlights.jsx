import React from "react";
import { FaChartLine, FaDollarSign, FaGamepad, FaSolarPanel, FaTools } from "react-icons/fa";
import { Link } from "react-router";
import keyImg from "../assets/keyImg.png";

function KeyHighlights() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-gray-900 pt-12"
     
    >
   

      {/* Content */}
      <div
        className="relative z-10 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-16 text-center text-white gap-10 md:gap-16"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={keyImg}
            alt="Key Highlights"
            className="w-full md:w-[600px] rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col gap-6 text-sm md:text-lg leading-relaxed text-start">
          <h1 className="text-secondary font-bold text-3xl md:text-4xl ">
            KEY <span className="text-primary">HIGHLIGHTS</span>
          </h1>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaSolarPanel className="text-secondary text-2xl" />
              <p className="text-base">First Electric Karting Solution in Bangladesh</p>
            </div>
            <div className="flex items-center gap-3">
              <FaTools className="text-secondary text-xl md:text-2xl" />
              <p className="text-base">Custom-Built Tracks (Indoor)</p>
            </div>
            <div className="flex items-center gap-3">
              <FaDollarSign className="text-secondary text-xl md:text-2xl" />
              <p className="text-base">Solar-Powered Charging Stations for Sustainability</p>
            </div>
            <div className="flex items-center gap-3">
              <FaChartLine className="text-secondary text-xl md:text-2xl" />
              <p className="text-base">Turnkey Facility Development</p>
            </div>
            <div className="flex items-start gap-3">
              <FaGamepad className="text-secondary text-2xl md:text-3xl" />
              <p className="text-base">
                Additional Entertainment: VR Gaming, Rock Climbing, and More
              </p>
            </div>
          </div>
          <button className="mt-6 rounded-md bg-primary px-6 py-3 text-secondary font-semibold w-[200px]  hover:bg-red-600 transition-colors duration-300">
            <Link to="/services">SEE MORE</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default KeyHighlights;

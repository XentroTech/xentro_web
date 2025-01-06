import React from "react";
import { FaRegLightbulb, FaSolarPanel } from "react-icons/fa";
import highROIImage from "../../../assets/roi.jpg";

function HighROIandLowCosts() {
  return (
    <div className="relative w-full min-h-screen bg-gray-900 pt-12">
      {/* Heading Section */}
      <div className="text-center text-white px-6 md:px-16 py-8">
        <h1 className="text-yellow-400 font-bold text-3xl md:text-4xl">
          HIGH ROI AND LOW <span className="text-primary">OPERATIONAL COSTS</span>
        </h1>
        <p className="text-base text-gray-400 md:text-lg mt-4">
          Efficient and sustainable solutions for maximized returns.
        </p>
      </div>

      {/* Content Section */}
      <div
        className="relative z-10 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-16 text-center text-white gap-10 md:gap-16"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
         {/* Image Section */}
         <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={highROIImage}
            alt="High ROI and Low Costs"
            className="w-full md:w-[600px] rounded-lg shadow-lg"
          />
        </div>
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col gap-6 text-md md:text-lg leading-relaxed">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaRegLightbulb className="text-yellow-400 text-2xl" />
              <p className="text-start text-base md:text-lg">
                Efficient electric karts and solar charging systems lower costs.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaSolarPanel className="text-yellow-400 text-2xl" />
              <p className="text-start text-base md:text-lg">
                High customer demand for sustainable entertainment guarantees strong returns.
              </p>
            </div>
          </div>
          <p className="text-start text-base md:text-lg">
            Our innovative solutions provide you with a high return on investment while keeping operational costs low.
          </p>
          <button className="mt-6 rounded-md bg-primary px-6 py-3 text-secondary font-semibold w-[200px] mx-auto md:mx-0 hover:bg-yellow-500 transition-colors duration-300">
            Learn More
          </button>
        </div>

       
      </div>
    </div>
  );
}

export default HighROIandLowCosts;

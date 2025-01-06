import React from "react";
import { FaRegHandshake, FaRegLightbulb, FaUsers } from "react-icons/fa";

function OurProcess() {
  return (
    <div className="bg-gray-900 py-[100px]">
      <h2
        className="text-center text-yellow-400 text-3xl font-bold mb-8 relative"
        data-aos="fade-down"
      >
        Our <span className="text-primary">Process</span>
       
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16 px-6 md:px-16">
        {/* Step 1 */}
        <div
          className="w-full md:w-1/4 flex flex-col items-center text-center text-white"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-700">
            <FaRegHandshake className="text-yellow-400 text-4xl" />
          </div>
          <h3 className="text-xl font-bold mt-4">Step 1: Consultation</h3>
          <ul className="text-gray-400 mt-2">
            <li>Share your goals, space, and budget.</li>
            <li>We design a solution that fits your needs.</li>
          </ul>
        </div>

        {/* Step 2 */}
        <div
          className="w-full md:w-1/4 flex flex-col items-center text-center text-white"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-700">
            <FaRegLightbulb className="text-yellow-400 text-4xl" />
          </div>
          <h3 className="text-xl font-bold mt-4">Step 2: Design & Manufacturing</h3>
          <ul className="text-gray-400 mt-2">
            <li>Custom track layouts and electric go-kart production.</li>
            <li>Solar charging systems integrated seamlessly.</li>
          </ul>
        </div>

        {/* Step 3 */}
        <div
          className="w-full md:w-1/4 flex flex-col items-center text-center text-white"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-700">
            <FaUsers className="text-yellow-400 text-4xl" />
          </div>
          <h3 className="text-xl font-bold mt-4">Step 3: Facility Setup</h3>
          <ul className="text-gray-400 mt-2">
            <li>Professional installation and full complex setup.</li>
          </ul>
        </div>

        {/* Step 4 */}
        <div
          className="w-full md:w-1/4 flex flex-col items-center text-center text-white"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-700">
            <FaRegHandshake className="text-yellow-400 text-4xl" />
          </div>
          <h3 className="text-xl font-bold mt-4">Step 4: Launch & Support</h3>
          <ul className="text-gray-400 mt-2">
            <li>Staff training, operational guidance, and post-launch support.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OurProcess;

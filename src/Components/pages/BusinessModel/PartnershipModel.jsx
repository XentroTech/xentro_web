import React from "react";
import { FaHandshake } from "react-icons/fa";
import partnership from "../../../assets/partnership.jpeg";

function PartnershipModel() {
  return (
    <div className="relative w-full min-h-screen bg-gray-900 pt-12">
      {/* Heading Section */}
      <div className="text-center text-white px-6 md:px-16 py-8">
        <h1 className="text-yellow-400 font-bold text-3xl md:text-4xl">
          PARTNERSHIP <span className="text-primary">MODEL</span>
        </h1>
        <p className="text-base text-gray-400 md:text-lg mt-4">
          Collaborate, innovate, and grow together with strategic partnerships.
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
            src={partnership}
            alt="Partnership Model"
            className="w-full md:w-[600px] rounded-lg shadow-lg"
          />
        </div>
        
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col gap-6 text-md md:text-lg leading-relaxed">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaHandshake className="text-yellow-400 text-2xl" />
              <p className="text-start text-base md:text-lg">
                Shared financial burden and reduced investment risk.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaHandshake className="text-yellow-400 text-2xl" />
              <p className="text-start text-base md:text-lg">
                Access to partners’ expertise, networks, and resources.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaHandshake className="text-yellow-400 text-2xl" />
              <p className="text-start text-base md:text-lg">
                Faster growth through combined knowledge and capital.
              </p>
            </div>
          </div>
          <p className="text-start text-base md:text-lg">
            Our partnership model is designed to maximize mutual benefits and foster growth through collaboration.
          </p>
          <button className="mt-6 rounded-md bg-primary px-6 py-3 text-secondary font-semibold w-[200px] mx-auto md:mx-0 hover:bg-yellow-500 transition-colors duration-300">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
}

export default PartnershipModel;

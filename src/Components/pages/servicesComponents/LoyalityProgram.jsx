import React from "react";
import { FaAward, FaGift, FaHandshake } from "react-icons/fa";
import loyalty from "../../../assets/loyalty.png";

function LoyalityProgram() {
  return (
    <div className="w-full h-auto bg-gray-900 px-6 md:px-[100px] py-[50px]">
      <h1 className="text-center font-bold text-3xl md:text-4xl mb-10 pb-[100px]">
        <span className="text-secondary">Loyalty</span> <span className="text-primary">Program</span>
      </h1>
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {/* Content Section */}
        <div
          className="content text-white text-center md:text-left w-full md:w-[50%] text-base md:text-lg leading-7 md:leading-8"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p>We set up advanced loyalty programs to track customer preferences, drive engagement, and boost repeat visits:</p>
          <ul className="list-none mt-4 space-y-4">
            <li className="flex items-center gap-3">
              <FaGift className="text-yellow-400" /> Reward Points System
            </li>
            <li className="flex items-center gap-3">
              <FaHandshake className="text-yellow-400" /> Exclusive Member Benefits
            </li>
            <li className="flex items-center gap-3">
              <FaAward className="text-yellow-400" /> VIP Tier Programs
            </li>
          </ul>
          <div className="mt-8 flex justify-center md:justify-start">
            <button className="rounded-md bg-primary px-6 py-3 text-secondary font-medium hover:bg-primary/90 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="img w-full md:w-[45%]"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img
            src={loyalty}
            alt="Loyalty Program"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default LoyalityProgram;

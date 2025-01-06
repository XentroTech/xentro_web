import React from "react";
import { FaEye, FaLock, FaServer } from "react-icons/fa";
import it from "../../../assets/it.jpg";

function ItInfrastructure() {
  return (
    <div className="w-full h-auto bg-gray-900 px-6 md:px-[100px] py-[50px]">
      <h1 className="text-center font-bold text-3xl md:text-4xl mb-10 pb-[100px]">
        <span className="text-secondary">IT</span> <span className="text-primary">Infrastructure</span>
      </h1>
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
           {/* Image Section */}
           <div
          className="img w-full md:w-[45%]"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img
            src={it}
            alt="IT Infrastructure"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Content Section */}
        <div
          className="content text-white text-center md:text-left w-full md:w-[50%] text-base md:text-lg leading-7 md:leading-8"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p>Our robust IT solutions support facility operations with:</p>
          <ul className="list-none mt-4 space-y-4">
            <li className="flex items-center gap-3">
              <FaServer className="text-yellow-400" /> Seamless transactions
            </li>
            <li className="flex items-center gap-3">
              <FaLock className="text-yellow-400" /> Data security
            </li>
            <li className="flex items-center gap-3">
              <FaEye className="text-yellow-400" /> Real-time system monitoring
            </li>
          </ul>
          <div className="mt-8 flex justify-center md:justify-start">
            <button className="rounded-md bg-primary px-6 py-3 text-secondary font-medium hover:bg-primary/90 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>

     
      </div>
    </div>
  );
}

export default ItInfrastructure;

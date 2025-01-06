import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import successImg from "../assets/success.jpg";

function YourSuccessMadeSimple() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-gray-900 pt-12"
    >
      {/* Heading Section */}
      <div className="text-center text-white px-6 md:px-16 py-8">
        <h1 className="text-secondary font-bold text-3xl md:text-4xl">
          YOUR SUCCESS, <span className="text-primary">MADE SIMPLE</span>
        </h1>
        <p className="text-base text-gray-600 md:text-lg mt-4">
          From the moment you share your idea with us, our team will handle
          everything:
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
            src={successImg}
            alt="Your Success Made Simple"
            className="w-full md:w-[600px] rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col gap-6 text-md md:text-lg leading-relaxed">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-secondary text-2xl" />
              <p className="text-base">Consultation & Feasibility Analysis</p>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-secondary text-2xl" />
              <p className="text-base">Custom Design & Manufacturing</p>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-secondary text-2xl" />
              <p className="text-base">Facility Setup</p>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-secondary text-2xl" />
              <p className="text-base">Post-Launch Support & Marketing Guidance</p>
            </div>
          </div>
          <p className="text-base md:text-lg text-start">
            With <span className="text-primary font-semibold">Xentro</span>, your
            journey to owning a profitable entertainment business is smooth and
            stress-free.
          </p>
          <button className="mt-6 rounded-md bg-primary px-6 py-3 text-secondary font-semibold w-[200px] hover:bg-red-600 transition-colors duration-300">
            <Link to="/services">LEARN MORE</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default YourSuccessMadeSimple;

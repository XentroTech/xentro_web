import React from "react";
import testing from "../../../assets/feasibility.webp";

function FeasibilityTesting() {
  return (
    <div className="w-full h-auto bg-gray-900 px-6 md:px-[100px] py-[100px]">
      <h1 className="text-center font-bold text-3xl md:text-4xl pb-[100px]">
        <span className="text-secondary">Feasibility</span> <span className="text-primary">Testing</span>
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
          <p>
            We conduct business viability, demographic studies, and financial
            assessments to ensure your project is set up for success.
          </p>
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
            src={testing}
            alt="Feasibility Testing"
            className="w-full h-[400px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default FeasibilityTesting;

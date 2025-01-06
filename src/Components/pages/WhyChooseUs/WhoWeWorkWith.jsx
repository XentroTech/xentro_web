import React from "react";

function WhoWeWorkWith() {
  return (
    <div className="bg-gray-900  text-center text-white px-6 md:px-16 py-[100px]">
      {/* Title Section */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        <span className="text-secondary">Who </span>
        <span className="text-primary">We Work With</span>
      </h2>

      {/* Subtitle */}
      <p className="text-base text-gray-700 md:text-lg mt-4">
        Our solutions are perfect for:
      </p>

      {/* Content List */}
      <ul className="mt-8 flex flex-col md:flex-row justify-center gap-6">
        <li
          className="bg-gray-800 rounded-lg p-6 w-full md:w-1/3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className="text-lg font-semibold text-secondary">
            Investors
          </h3>
          <p className="text-sm text-gray-400 mt-2">
            Looking for sustainable business opportunities.
          </p>
        </li>
        <li
          className="bg-gray-800 rounded-lg p-6 w-full md:w-1/3"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h3 className="text-lg font-semibold text-primary">
            Business Owners
          </h3>
          <p className="text-sm text-gray-400 mt-2">
            Ready to launch or expand their entertainment ventures.
          </p>
        </li>
        <li
          className="bg-gray-800 rounded-lg p-6 w-full md:w-1/3"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <h3 className="text-lg font-semibold text-secondary">
            Property Developers
          </h3>
          <p className="text-sm text-gray-400 mt-2">
            Adding unique karting complexes to entertainment hubs.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default WhoWeWorkWith;

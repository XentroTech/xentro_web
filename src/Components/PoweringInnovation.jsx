import React from "react";
import {
  FaChartLine,
  FaHandshake,
  FaSolarPanel,
  FaTools,
} from "react-icons/fa";
import { Link } from "react-router";
import track from "../assets/P2.jpg";

function PoweringInnovation() {
  return (
    <div className="w-full min-h-screen bg-gray-900 py-12">
      <h1 className="text-center text-2xl md:text-3xl text-secondary font-bold py-[30px] md:pb-[70px]">
        POWERING INNOVATION,{" "}
        <span className="text-primary">PROFIT AND SUSTAINABILITY</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-center md:justify-center items-center gap-4 p-4 md:p-8">
        {/* Text Section */}
        <div
          className="text w-full md:w-[45%]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="flex text-slate-500 flex-col gap-4 text-gray-800 text-lg md:text-xl leading-[1.25rem] md:leading-[1.75rem] gap-2">
            <div className="flex items-start gap-3">
              <FaSolarPanel className="text-secondary text-xl md:text-3xl flex-shrink-0" />
              <p className="text-base md:text-lg">
                Eco-Friendly Innovation: State-of-the-art electric go-karts
                powered by hybrid solar charging stations.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaTools className="text-secondary text-xl md:text-2xl flex-shrink-0" />
              <p className="text-base md:text-lg">
                Custom Facility Solutions: From track design to full
                entertainment center construction.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaChartLine className="text-secondary text-xl md:text-2xl flex-shrink-0" />
              <p className="text-base md:text-lg">
                Sustainable Business Model: Low operational costs and high ROI.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaHandshake className="text-secondary text-xl md:text-2xl flex-shrink-0" />
              <p className="text-base md:text-lg">
                Flexible Partnership Options: Lease, partnership, or franchise -
                choose what works best for you.
              </p>
            </div>
            <button className="rounded-lg bg-primary p-4 text-secondary w-[200px] md:w-[250px] my-2">
              <Link to="/businessModel">SEE MORE</Link>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="img w-full md:w-[45%]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
        >
          <img
            src={track}
            alt="Track"
            className="w-full max-w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default PoweringInnovation;

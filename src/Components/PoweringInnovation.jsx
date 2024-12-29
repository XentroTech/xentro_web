import React from "react";
import track from "../assets/track.png";
function PoweringInnovation() {
  return (
    <div className="w-full h-screen bg-gray-900 pt-[150px] ">
      <h1 className="text-center pl-[200px] text-3xl text-yellow-300 font-bold pb-[70px] ">
        POWERING INNOVATION, PROFIT AND SUSTAINABILITY
      </h1>
      <div className="flex justify-around items-center p-8">
        <div
          className="text"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          <div className="flex flex-col gap-4 text-white text-2xl leading-[3rem]">
            <p>
              Eco-Friendly Innovation: State-of-the-art electric go-karts <br />
              powered by hybrid solar charging stations.
            </p>
            <p>
              Custom Facility Solutions: From track design to full entertainment{" "}
              <br />
              center construction.
            </p>
            <p>
              Sustainable Business Model: Low operational costs and high ROI.
            </p>
            <p>
              Flexible Partnership Options: Lease, partnership, or franchise -{" "}
              <br />
              choose what works best for you.
            </p>
            <button className="rounded-lg bg-red-500 p-2 text-white w-[250px] ">
              SEE MORE
            </button>
          </div>
        </div>
        <div
          className="img"
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          <img src={track} alt="img" className="w-[700px] rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default PoweringInnovation;

import React from "react";
import charging from "../../../assets/charging.png";
function ChargingFacilities() {
  return (
    <div className="w-full h-screen bg-indigo-950 p-[100px]">
      <h1 className="text-center font-bold text-yellow-400 text-4xl p-[100px]">
        Charging Facilities
      </h1>
      <div
        className=" flex justify-around items-center"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="img">
          <img
            src={charging}
            alt="img"
            className="w-full h-[400px] rounded-lg"
          />
        </div>
        <div className="content text-white w-[500px] text-3xl leading-[3rem] text-justify ">
          Xentro implements hybrid solar-powered charging stations to keep your
          go-karts running efficiently with minimal operational costs.
        </div>
      </div>
    </div>
  );
}

export default ChargingFacilities;

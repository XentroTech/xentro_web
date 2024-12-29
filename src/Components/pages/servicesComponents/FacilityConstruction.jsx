import React from "react";
import services from "../../../assets/services.png";
function FacilityConstruction() {
  return (
    <div className="w-full h-screen bg-indigo-950 p-[100px]">
      <h1 className="text-center font-bold text-yellow-400 text-4xl p-[100px]">
        Facility Construction
      </h1>
      <div
        className=" flex justify-around items-center"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        <div className="img">
          <img
            src={services}
            alt="img"
            className="w-full h-[400px] rounded-lg"
          />
        </div>
        <div className="content text-white w-[500px] text-3xl leading-[3rem] text-justify ">
          We build world-class entertainment facilities, handling everything
          from design to final construction.
        </div>
      </div>
    </div>
  );
}

export default FacilityConstruction;

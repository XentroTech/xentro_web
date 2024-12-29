import React from "react";
import vrzone from "../../../assets/vrzone.webp";
function AditionalAttraction() {
  return (
    <div className="w-full h-screen bg-indigo-950 p-[100px]">
      <h1 className="text-center font-bold text-yellow-400 text-4xl p-[100px]">
        Additional Attractions
      </h1>
      <div
        className=" flex justify-around items-center"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
      >
        <div className="content text-white w-[600px] text-3xl leading-[3rem] text-justify ">
          <p>Enhance your facility with additional entertainment options:</p>
          <p>➩ VR Gaming Stations</p>
          <p>➩ Surf Simulators </p>
          <p>➩ Indoor Rock Climbing</p>
          <p>➩ Arcade Zones</p>
        </div>
        <div className="img">
          <img
            src={vrzone}
            alt="img"
            className="w-[600px] h-[400px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default AditionalAttraction;

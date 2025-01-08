import React from "react";
import simpleSolution from "../../../assets/simpleSolution.jpg";
function SimpleSolution() {
  return (
    <div className="w-full h-screen bg-indigo-950 p-[100px]">
      <h1 className="text-center font-bold text-yellow-400 text-4xl p-[100px]">
        Simplified Solutions for Your Karting Business
      </h1>
      <div
        className=" flex justify-around items-center"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        <div className="content text-white w-[500px] text-3xl leading-[3rem] text-justify ">
          We take care of every step – from planning to construction – making it
          easy for you to focus on your success.
        </div>
        <div className="img">
          <img
            src={simpleSolution}
            alt="img"
            className="w-full h-[400px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default SimpleSolution;

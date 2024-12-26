import React from "react";
import testing from "../../../assets/testing.jpg";
function FeasibilityTesting() {
  return (
    <div className="w-full h-screen bg-indigo-950 p-[100px]">
      <h1 className="text-center font-bold text-yellow-400 text-4xl p-[100px]">
        Feasibility Testing
      </h1>
      <div className=" flex justify-around items-center">
        <div className="content text-white w-[500px] text-3xl leading-[3rem] text-justify ">
          We conduct business viability, demographic studies, and financial
          assessments to ensure your project is set up for success.
        </div>
        <div className="img">
          <img
            src={testing}
            alt="img"
            className="w-full h-[400px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default FeasibilityTesting;

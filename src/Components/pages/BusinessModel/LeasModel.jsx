import React from "react";
import leas from "../../../assets/leas.jpg";
function LeasModel() {
  return (
    <div className="w-full h-screen bg-gray-900 p-[100px]">
      <h1 className="text-center font-bold text-yellow-400 text-4xl p-[100px]">
        Lease Model
      </h1>
      <div className=" flex justify-around items-center">
        <div className="img">
          <img src={leas} alt="img" className="w-full h-[400px] rounded-lg" />
        </div>
        <div className="content text-white w-[700px] text-3xl leading-[3rem] text-justify ">
          <p className="text-justify">
            ➩ Lower initial capital expenditure compared to purchasing property
          </p>
          <p>
            ➩ Flexibility to relocate or expand your business without the burden
            of ownership
          </p>
          <p>➩ Potential tax benefits</p>
        </div>
      </div>
    </div>
  );
}

export default LeasModel;

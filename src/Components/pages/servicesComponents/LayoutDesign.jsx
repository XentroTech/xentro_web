import React from "react";
import layout from "../../../assets/layout.jpg";
function LayoutDesign() {
  return (
    <div className="w-full h-screen bg-indigo-950 p-[100px]">
      <h1 className="text-center font-bold text-yellow-400 text-4xl p-[100px]">
        Layout Design
      </h1>
      <div className=" flex justify-around items-center">
        <div className="img">
          <img src={layout} alt="img" className="w-full h-[400px] rounded-lg" />
        </div>
        <div className="content text-white w-[600px] text-3xl leading-[3rem] text-justify ">
          Our designers create optimized facility layouts that improve:
          <br /> ➩ Space utilization
          <br /> ➩ Traffic flow - Guest experience
        </div>
      </div>
    </div>
  );
}

export default LayoutDesign;

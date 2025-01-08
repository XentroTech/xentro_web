import React from "react";
import roi from "../../../assets/roi.jpg";
function HighRoi() {
  return (
    <div className="w-full h-screen bg-indigo-950 p-[100px]">
      <h1 className="text-center font-bold text-yellow-400 text-4xl p-[100px]">
        High ROI and Low Operational Costs
      </h1>
      <div
        className=" flex justify-around items-center"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        <div className="img">
          <img src={roi} alt="img" className="w-full h-[400px] rounded-lg" />
        </div>
        <div className="content text-white w-[500px] text-3xl leading-[3rem]  ">
          <p>
            ➩ Efficient electric karts and solar charging systems lower costs.
          </p>
          <p className="pt-5">
            ➩ High customer demand for sustainable entertainment guarantees
            strong returns.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HighRoi;

import React from "react";
import it from "../../../assets/it.jpg";
function ItInfrastructure() {
  return (
    <div className="w-full h-screen bg-indigo-950 p-[100px]">
      <h1 className="text-center font-bold text-yellow-400 text-4xl p-[100px]">
        IT Infrastructure
      </h1>
      <div
        className=" flex justify-around items-center"
        data-aos="fade-right"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
      >
        <div className="content text-white w-[600px] text-3xl leading-[3rem] text-justify ">
          <p>Our robust IT solutions support facility operations with :</p>
          <p>➩ Seamless transactions</p>
          <p>➩ Data security </p>
          <p>➩ Real-time system monitoring</p>
        </div>
        <div
          className="img"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
        >
          <img src={it} alt="img" className="w-full h-[400px] rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default ItInfrastructure;

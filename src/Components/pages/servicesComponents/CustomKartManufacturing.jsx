import React from "react";
import goKart from "../../../assets/customKart.png";
function CustomKartManufacturing() {
  return (
    <div className="w-full h-screen bg-indigo-950 p-[100px]">
      <h1 className="text-center font-bold text-yellow-400 text-4xl p-[100px]">
        Custom Kart Manufacturing
      </h1>
      <div className=" flex justify-around items-center">
        <div
          className="content text-white w-[500px] text-3xl leading-[3rem] text-justify "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Our high-performance electric go-karts are eco-friendly,
          technologically advanced, and built for maximum safety and fun for all
          age groups.
        </div>
        <div className="img" data-aos="fade-left" data-aos-duration="1000">
          <img src={goKart} alt="img" className="w-full h-[400px] rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default CustomKartManufacturing;

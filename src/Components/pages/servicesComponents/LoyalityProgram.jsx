import React from "react";
import loyalty from "../../../assets/loyalty.png";
function LoyalityProgram() {
  return (
    <div className="w-full h-screen bg-indigo-950 p-[100px]">
      <h1 className="text-center font-bold text-yellow-400 text-4xl p-[100px]">
        Loyalty Program
      </h1>
      <div
        className=" flex justify-around items-center"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
      >
        <div className="img">
          <img
            src={loyalty}
            alt="img"
            className="w-full h-[400px] rounded-lg"
          />
        </div>
        <div className="content text-white w-[500px] text-3xl leading-[3rem] text-justify ">
          We set up advanced loyalty programs to track customer preferences,
          drive engagement, and boost repeat visits.
        </div>
      </div>
    </div>
  );
}

export default LoyalityProgram;

import React from "react";
import bg from "../assets/new-2.png";
import bg1 from "../assets/bettaryUnit.png";
// import bg from "../assets/ultimatePower.jpg";
function UltimatePower() {
  return (
    <div>
      <div className="w-full  ">
        {/* 1st */}
        <div className="flex justify-center items-center gap-4 h-screen  py-[50px]">
          <div className="text">
            <h1 className="  text-4xl pb-4 text-yellow-400 font-semibold">
              ULTIMATE PERFORMANCE
            </h1>
            <p className="w-[500px] text-justify text-gray-500 leading-[2rem]">
              Xentro addresses karting's biggest challenge with our innovative
              electric racing kart technology, providing unmatched racing
              experiences with the world's lightest electric go karts.
            </p>
          </div>
          <div className="img">
            <img src={bg} alt="" className="w-full h-[500px] rounded-lg " />
          </div>
        </div>
        {/* 2nd */}
        <div className="flex justify-center bg-gray-900 items-center h-screen gap-4 space-x-[10rem]  py-[100px]">
          <div className="img">
            <img src={bg1} alt="" className=" rounded-lg " />
          </div>
          <div className="text">
            <h1 className="text-yellow-400 font-semibold  text-4xl pb-4">
              Electric Power unit
            </h1>
            <p className="w-[500px] text-justify text-gray-500 leading-[2rem]">
              Enjoy the simplicity of Plug and Play, fitting any standard racing
              chassis in 30 minutes. Unleash BSR X-Gen's remarkable performance
              globally..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UltimatePower;

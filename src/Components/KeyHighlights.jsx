import React from "react";
import keyImg from "../assets/keyImg.png";
function KeyHighlights() {
  return (
    <div className="w-full h-screen object-cover bg-indigo-950 p-[3rem] pt-[150px]">
      <div className="flex justify-around items-center p-8">
        <div
          className="img"
          data-aos="fade-right"
          data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <img src={keyImg} alt="img" className=" w-[700px] rounded-md" />
        </div>
        <div
          className="text-white text-2xl"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div className="flex flex-col gap-10">
            <h1 className="text-yellow-300 font-bold text-3xl">
              KEY HIGHLIGHTS
            </h1>
            <p>⍟ First Electric Karting Solution in Bangladesh</p>
            <p>⍟ Custom-Built Tracks-Indoor</p>
            <p>⍟ Solar-Powered Charging Stations for Sustainability</p>
            <p>⍟ Trunkey Facility Development</p>
            <p>
              ⍟ Addirional Entertainment - VR Gaming, Rock Climbing, and More
            </p>
            <button className="rounded-md bg-red-500 w-[200px] text-white cursor-pointer p-2 ">
              SEE MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyHighlights;

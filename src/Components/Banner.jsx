import React from "react";
import xentroPic from "../assets/xentro.jpg";

function Banner() {
  return (
    <div
      className="relative w-full h-screen top-0 left-0 bg-cover "
      style={{
        backgroundImage: `url(${xentroPic})`,
        // height: "100%",
        backgroundPosition: "center",
        // backgroundSize: "cover",
      }}
    >
      {/* <img
        src={xentroPic}
        alt="banner image"
        className="w-full h-screen left-0 top-o absolute"
      /> */}
      {/* overlay */}
      <div className="absolute inset-0 bg-indigo-950/60 "></div>
      {/* content */}
      <div className="relative z-10 w-full h-full flex items-center justify-start pl-[100px] ">
        <h1 className="text-justify  text-5xl text-white font-bold leading-[4rem]  ">
          <span className="">
            {" "}
            Pioneer Electric karting <br /> & Sustainable
          </span>{" "}
          <br /> <span className="">Entertainment in Bangladesh</span>
        </h1>{" "}
        {/* <button className=" text-white bg-red-400 rounded-lg p-3">
          Start Your Project Now
        </button> */}
      </div>
    </div>
  );
}

export default Banner;

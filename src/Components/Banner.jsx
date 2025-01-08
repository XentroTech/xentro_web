import React from "react";
import goKart from "../assets/videos/0101.mp4";

function Banner() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-screen object-cover overflow-hidden"
      >
        <source src={goKart} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/80"></div>

      {/* Content */}
      <div
        className="relative z-10 w-full h-screen flex items-center justify-start pl-[15px] md:pl-[100px]"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="2000"
      >
        <h1 className="text-3xl  md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold leading-normal md:leading-relaxed lg:leading-loose xl:leading-[4rem]">
          <span>Pioneer Electric Karting</span> <br />
          <span>
            & Sustainable Entertainment <br /> in Bangladesh
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Banner;

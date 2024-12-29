import React from "react";
import aboutUs from "../assets/aboutus.jpg";
function AboutUs() {
  return (
    <div
      className="relative w-full h-screen top-0 left-0 bg-cover  "
      style={{ backgroundImage: `url(${aboutUs})` }}
    >
      {/* <img src={aboutUs} alt="img" className="absolute w-full h-full" /> */}
      {/* overlay */}
      <div className="absolute inset-0 bg-indigo-950/90 "></div>
      {/* content */}
      <div
        className="relative z-10 w-full h-full flex flex flex-col justify-center items-center"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <h1 className="text-3xl text-yellow-300 text-center font-bold p-2">
          ABOUT US
        </h1>
        <br />
        <br />
        <p className="text-center text-white text-3xl ">
          Welcome to Xentro <br /> Xentro delivers innovative electric karting
          solutions alongside <br /> comprehensive entertainment facility
          development. From electric go-karts <br /> to hybrid solar charging
          systems and full entertainment <br /> complexes, we bring your vision
          to life-seamlessly and sustainably.
        </p>
        <br />
        <br />
        <p className="text-white text-2xl font-bold p-4">
          ** Your success, our expertise.**
        </p>
        <h2 className="font-bold text-3xl text-white">WHY CHOOSE XENTRO?</h2>
        <p className="text-center text-4xl animate-bounce text-pink-500 font-bolder">
          ↓
        </p>
      </div>
    </div>
  );
}

export default AboutUs;

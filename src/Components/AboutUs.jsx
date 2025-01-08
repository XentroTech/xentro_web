import React from "react";
import aboutUs from "../assets/aboutus.jpg";

function AboutUs() {
  return (
    <div
      className="relative w-full h-auto bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${aboutUs})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 w-full"></div>

      {/* Content */}
      <div
        className="relative z-10 w-full h-auto flex flex-col justify-center items-center px-6 md:px-16"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1500"
      >
        <h1 className="text-4xl md:text-5xl text-secondary font-bold text-center mb-8">
          ABOUT <span className="text-primary">US</span>
        </h1>

        <p className="text-center text-white  text-lg md:text-2xl leading-relaxed mb-8 max-w-3xl">
          Welcome to <span className="font-bold text-primary">Xentro</span>.
          Xentro delivers innovative electric karting solutions alongside
          comprehensive entertainment facility development. From electric
          go-karts to hybrid solar charging systems and full entertainment
          complexes, we bring your vision to life—seamlessly and sustainably.
        </p>

        <p className="text-center text-2xl md:text-3xl text-white font-semibold mb-8 max-w-3xl">
          ** Your success, our expertise. **
        </p>

        <h2 className="text-2xl md:text-3xl text-white font-bold text-center mb-6">
          WHY CHOOSE XENTRO?
        </h2>

        <p className="text-center text-4xl animate-bounce text-primary font-bold">
          ↓
        </p>
      </div>
    </div>
  );
}

export default AboutUs;

import React from "react";

function PageHeader({ title, subtitle, description, backgroundImage }) {
  const words = title.split(" ");
  const firstPart = words.slice(0, Math.ceil(words.length / 2)).join(" ");
  const secondPart = words.slice(Math.ceil(words.length / 2)).join(" ");

  return (
    <section
      className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/80"></div>

      {/* Content */}
      <div
        className="relative text-center px-4 sm:px-8 lg:px-16"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="1500"
      >
        {/* title */}
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight md:leading-snug">
          <span className="text-secondary">{firstPart} </span> 
          <span className="text-primary">{secondPart}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-md sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-400 mt-4 font-semibold">
          {subtitle}
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-400 mt-6 mx-auto max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}

export default PageHeader;

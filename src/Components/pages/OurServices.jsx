import React from "react";
import services from "../../assets/aboutus.jpg";
import FacilityConstruction from "./servicesComponents/FacilityConstruction";
import ChargingFacilities from "./servicesComponents/ChargingFacilities";
import CustomKartManufacturing from "./servicesComponents/CustomKartManufacturing";
import LayoutDesign from "./servicesComponents/LayoutDesign";
import TrackConstruction from "./servicesComponents/TrackConstruction";
import FeasibilityTesting from "./servicesComponents/FeasibilityTesting";
import AditionalAttraction from "./servicesComponents/AditionalAttraction";
import DeliveryLogistic from "./servicesComponents/DeliveryLogistic";
import ItInfrastructure from "./servicesComponents/ItInfrastructure";
import LoyalityProgram from "./servicesComponents/LoyalityProgram";
function OurServices() {
  return (
    <div className="w-full pt-[70px]  ">
      {/* top section */}
      <section
        className="w-full h-[500px] relative flex flex-col justify-center items-center "
        style={{ backgroundImage: `url(${services})` }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-indigo-950/80"></div>
        {/* text */}
        <div
          className="content relative   "
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
        >
          <h1 className="text-yellow-400 font-bold text-4xl text-center">
            Our Services
          </h1>
          <p className="text-center text-2xl text-white p-5 font-bold">
            {" "}
            **Comprehensive Entertainment Facility Construction**
          </p>
          <p className="container mx-auto w-[500px] text-gray-300 text-justify">
            At Xentro, we offer a complete suite of services to bring your
            entertainment business to life. From planning to delivery, we ensure
            every detail is designed for quality, safety, and guest enjoyment.
          </p>
        </div>
      </section>
      <FacilityConstruction />
      <CustomKartManufacturing />
      <ChargingFacilities />
      <LayoutDesign />
      <TrackConstruction />
      <FeasibilityTesting />
      <AditionalAttraction />
      <DeliveryLogistic />
      <ItInfrastructure />
      <LoyalityProgram />
    </div>
  );
}

export default OurServices;

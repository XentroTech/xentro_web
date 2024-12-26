import React from "react";
import model from "../../assets/businessModel.jpg";
import LeasModel from "./BusinessModel/LeasModel";
import PartnershipModel from "./BusinessModel/PartnershipModel";
import FranchiseModel from "./BusinessModel/FranchiseModel";
function BusinessModel() {
  return (
    <div>
      <section
        className="w-full h-[600px] relative flex flex-col justify-center items-center "
        style={{ backgroundImage: `url(${model})` }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-indigo-950/80"></div>
        {/* text */}
        <div className="content relative   ">
          <h1 className="text-yellow-400 font-bold text-4xl text-center p-[50px]">
            Our Business Model
          </h1>

          <p className="container mx-auto w-[500px] text-gray-300 text-justify">
            At Xentro, we create innovative entertainment ecosystems that
            combine cutting-edge technology, sustainability, and profitability.
            Our flexible business models make it easier than ever to partner
            with us.
          </p>
        </div>
      </section>

      <LeasModel />
      <PartnershipModel />
      <FranchiseModel />
    </div>
  );
}

export default BusinessModel;

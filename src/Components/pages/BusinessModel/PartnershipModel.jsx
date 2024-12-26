import React from "react";
import partnership from "../../../assets/partnership.jpg";

function PartnershipModel() {
  return (
    <div className="w-full h-screen bg-gray-900 p-[100px]">
      <h1 className="text-center font-bold text-yellow-400 text-4xl p-[100px]">
        Partnership Model
      </h1>
      <div className=" flex justify-around items-center">
        <div className="content text-white w-[600px] text-3xl leading-[3rem]  ">
          <p className="text-justify">
            ➩ Shared financial burden and reduced investment risk
          </p>
          <p>➩ Access to partners’ expertise, networks, and resources</p>
          <p>➩ Faster growth through combined knowledge and capital</p>
        </div>
        <div className="img">
          <img
            src={partnership}
            alt="img"
            className="w-full h-[400px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default PartnershipModel;

import React from "react";
import franchise from "../../../assets/franchise.png";
function FranchiseModel() {
  return (
    <div className="w-full h-screen bg-gray-900 p-[100px]">
      <h1 className="text-center font-bold text-yellow-400 text-4xl p-[100px]">
        Franchise Model
      </h1>
      <div className=" flex justify-around items-center">
        <div className="img">
          <img
            src={franchise}
            alt="img"
            className="w-full h-[400px] rounded-lg"
          />
        </div>
        <div className="content text-white w-[600px] text-3xl leading-[3rem]  ">
          <p className="text-justify">
            ➩ Rapid expansion with lower capital expenditure
          </p>
          <p>
            ➩ Franchisees invest their own capital, reducing your financial
            outlay
          </p>
          <p>➩ Franchise fees and royalties create a steady revenue stream </p>
        </div>
      </div>
    </div>
  );
}

export default FranchiseModel;

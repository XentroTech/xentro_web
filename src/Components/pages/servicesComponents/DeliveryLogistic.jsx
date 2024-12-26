import React from "react";
import delivery from "../../../assets/delivery.jpg";
function DeliveryLogistic() {
  return (
    <div className="w-full h-screen bg-indigo-950 p-[100px]">
      <h1 className="text-center font-bold text-yellow-400 text-4xl p-[100px]">
        Delivery Logistic
      </h1>
      <div className=" flex justify-around items-center">
        <div className="img">
          <img
            src={delivery}
            alt="img"
            className="w-full h-[400px] rounded-lg"
          />
        </div>
        <div className="content text-white w-[500px] text-3xl leading-[3rem] text-justify ">
          We ensure on-time delivery of every component, managing all logistics
          to streamline your facility setup.
        </div>
      </div>
    </div>
  );
}

export default DeliveryLogistic;

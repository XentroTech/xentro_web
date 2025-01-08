import React from "react";
import event from "../../../assets/event.jpg";
function EventAndCorporateServices() {
  return (
    <div className="w-full h-screen bg-indigo-950 p-[100px]">
      <h1 className="text-center font-bold text-yellow-400 text-4xl p-[100px]">
        Event & Corporate Services
      </h1>
      <div
        className=" flex justify-around items-center"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        <div className="img">
          <img src={event} alt="img" className="w-full h-[400px] rounded-lg" />
        </div>
        <div className="content text-white w-[500px] text-3xl leading-[3rem]  ">
          <p>
            ➩ Host corporate events, team-building sessions, and birthday
            parties.
          </p>
          <p className="pt-5">
            ➩ Custom packages ensure memorable group experiences and additional
            revenue streams.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventAndCorporateServices;

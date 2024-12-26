import React from "react";
import construction from "../../../assets/construction.jpg";
function TrackConstruction() {
  return (
    <div className="w-full h-screen bg-indigo-950 p-[100px]">
      <h1 className="text-center font-bold text-yellow-400 text-4xl p-[100px]">
        High Quality Track Construction
      </h1>
      <div className=" flex justify-around items-center">
        <div className="img">
          <img
            src={construction}
            alt="img"
            className="w-full h-[400px] rounded-lg"
          />
        </div>
        <div className="content text-white  text-3xl leading-[3rem] text-justify flex flex-col gap-4">
          <p> We offer tailored tracks for diverse audiences:</p>
          <p>➩ Kids Tracks: Safe and fun for young visitors.</p>
          <p>
            {" "}
            ➩ Fun Tracks: Casual racing thrills for families and beginners.
          </p>
          <p>
            ➩ Thrill Tracks: Adrenaline-filled layouts for racing enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TrackConstruction;

import React from "react";
import success from "../assets/success.png";
import step from "../assets/firstStep.png";
function MadeSuccess() {
  return (
    <div>
      <div className="w-full  ">
        {/* 1st */}
        <div className="flex justify-around bg-indigo-950 items-center gap-4 h-screen  py-[50px]">
          <div className="text" data-aos="fade-right" data-aos-duration="1000">
            <h1 className="  text-4xl pb-4 text-yellow-400 font-semibold">
              Made Success Made Simple
            </h1>
            <p className="w-[500px] text-justify text-gray-500 leading-[2rem]">
              From the moment you share your idea with us, our team will handle
              everything –
            </p>
            <p className="w-[500px] text-justify text-gray-500 leading-[2rem]">
              Consultation & Feasibility Analysis
            </p>
            <p className="w-[500px] text-justify text-gray-500 leading-[2rem]">
              Custom Design & Manufacturing
            </p>
            <p className="w-[500px] text-justify text-gray-500 leading-[2rem]">
              Facility Setup
            </p>
            <p className="w-[500px] text-justify text-gray-500 leading-[2rem]">
              Post-Launch Support & Marketing Guidance
            </p>
            <p className="w-[500px] text-justify text-gray-500 leading-[2rem]">
              With Xentro, your journey to owning a profitable entertainment
              business is smooth and stress-free.
            </p>
          </div>
          <div className="img" data-aos="fade-left" data-aos-duration="1000">
            <img
              src={success}
              alt=""
              className="w-[600px] h-[400px] rounded-lg "
            />
          </div>
        </div>
        {/* 2nd */}
        <div className="flex justify-center bg-gray-900 items-center h-screen gap-4 space-x-[10rem]  py-[100px]">
          <div
            className="img"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <img src={step} alt="" className=" rounded-lg " />
          </div>
          <div
            className="text"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <h1 className="text-yellow-400 font-semibold  text-4xl pb-4">
              Take the First Step
            </h1>
            <p className="w-[500px] text-justify text-gray-500 leading-[2rem]">
              Ready to bring an exciting and sustainable entertainment solution
              to life? Join hands with Xentro today and let us help you create a
              future-ready entertainment hub that delights customers and drives
              profitability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MadeSuccess;

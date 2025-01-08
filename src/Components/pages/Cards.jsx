import React from "react";
import { FaEnvelope } from "react-icons/fa";

function Cards({ name, designation, about, qr, img, email }) {
  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 hover:rotate-3 transition duration-500 ease-in-out cursor-pointer">
      <div className="relative bg-gray-900">
        <img
          className="h-56 w-full object-contain rounded-t-lg filter grayscale"
          src={img}
          alt={name}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 rounded-t-lg">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-sm text-gray-300">{designation}</p>
        </div>
      </div>
      <div className="px-6 py-4 bg-slate-700 h-[250px] text-center flex flex-col justify-between">
        {/* About Section */}
        <p className="text-gray-400 text-sm mb-4 text-justify">{about}</p>

        {/* QR and Email Section */}
        <div className="">
          <div className="flex flex-col items-center justify-center space-x-4">
            {/* QR Section */}
            <img
              className="h-[80px] w-[80px] rounded-lg"
              src={qr}
              alt={`${name} QR Code`}
            />

            {/* Email Section */}
            <div className="flex  items-center ">
              <div className="flex items-center text-gray-400 text-sm">
                <FaEnvelope className="text-white mr-2" />
                <span className="font-medium">Email:</span>
              </div>
              <a
                href={`mailto:${email}`}
                className="ml-2 text-gray-400 hover:underline"
              >
                {email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

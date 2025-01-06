import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Cards({ name, designation, about, contact, img, email }) {
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
      <div className="px-6 py-4 bg-slate-700 h-[200px]">
        <p className="text-gray-400 text-sm mb-4 text-justify">{about}</p>

        {/* Contact Section */}
        <div className="flex items-center text-gray-400 text-sm mt-4">
          <FaPhoneAlt className="text-white mr-2" />
          <span className="font-medium">Phone:</span>
          <span className="ml-2">{contact}</span>
        </div>

        {/* Email Section */}
        <div className="flex items-center text-gray-400 text-sm mt-2">
          <FaEnvelope className="text-white mr-2" />
          <span className="font-medium">Email:</span>
          <a href={`mailto:${email}`} className="ml-2 text-gray-400 hover:underline">
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;

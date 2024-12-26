import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";
function Navbar() {
  return (
    <header className="text-gray-600 body-font bg-indigo-950 text-white fixed z-50 w-full p-4">
      <div className="container mx-auto flex flex-wrap  flex-col md:flex-row justify-between items-center ">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="logo" className="h-10" />

          <span className="ml-3 text-xl text-white font-bold">
            <span className="text-red-500">Xen</span>
            <span className="text-yellow-500">tro</span>
          </span>
        </a>
        {/* - Comprehensive Entertainment Facility Construction
   - Electric Go-Kart Manufacturing
   - Charging Facilities
   - Track and Facility Layout Design
   - Feasibility Studies and Additional Attractions
   - IT Infrastructure and Loyalty Programs */}

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
          <Link to="/" className="mr-5 hover:text-gray-500 cursor-pointer">
            Home
          </Link>

          <Link
            to="/services"
            className="mr-5 hover:text-gray-500 cursor-pointer"
          >
            Our Services
          </Link>
          {/* <div className="mr-5 hover:text-gray-900 cursor-pointer"> */}
          <ul className="md:hidden ">
            <li>Comprehensive Entertainment Facility Construction</li>
            <li>Electric Go-Kart Manufacturing</li>
            <li>Track and Facility Layout Design</li>
            <li>Track and Facility Layout Design</li>
            <li>Feasibility Studies and Additional Attractions</li>
            <li>IT Infrastructure and Loyalty Programs</li>
          </ul>
          {/* </div> */}
          <Link
            to="/business"
            className="mr-5 hover:text-gray-500 cursor-pointer"
          >
            Business Model
          </Link>
          <Link to="/team" className="mr-5 hover:text-gray-500 cursor-pointer">
            Our Team
          </Link>
          <a className="mr-5 hover:text-gray-500 cursor-pointer">
            More Services
          </a>
          <a className="mr-5 hover:text-gray-500 cursor-pointer">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

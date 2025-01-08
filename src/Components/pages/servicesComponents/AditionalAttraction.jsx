import { FaDesktop, FaGamepad, FaMountain, FaSwimmer } from "react-icons/fa";
import vrzone from "../../../assets/vrzone.png";

function AditionalAttraction() {
  return (
    <div className="w-full h-auto bg-gray-900 px-6 md:px-[100px] py-[100px]">
      <h1 className="text-center font-bold text-3xl md:text-4xl pb-[100px]">
        <span className="text-secondary">Additional</span>{" "}
        <span className="text-primary">Attractions</span>
      </h1>
      <div
        className="flex flex-col md:flex-row justify-between items-around gap-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {/* Image Section */}
        <div
          className="img w-full md:w-[45%]"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img
            src={vrzone}
            alt="VR Zone"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Content Section */}
        <div
          className="content text-white text-center md:text-left w-full md:w-[50%] text-base md:text-lg leading-7 md:leading-8"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p>Enhance your facility with additional entertainment options:</p>
          <ul className="list-none mt-4 space-y-4">
            <li className="flex items-center gap-3">
              <FaGamepad className="text-yellow-400" /> VR Gaming Stations
            </li>
            <li className="flex items-center gap-3">
              <FaSwimmer className="text-yellow-400" /> Surf Simulators
            </li>
            <li className="flex items-center gap-3">
              <FaMountain className="text-yellow-400" /> Indoor Rock Climbing
            </li>
            <li className="flex items-center gap-3">
              <FaDesktop className="text-yellow-400" /> Arcade Zones
            </li>
          </ul>
          <div className="mt-8 flex justify-center md:justify-start">
            <button className="rounded-md bg-primary px-6 py-3 text-secondary font-medium hover:bg-primary/90 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AditionalAttraction;

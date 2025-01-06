import { FaArrowCircleRight } from "react-icons/fa";
import construction from "../../../assets/construction.jpg";

function TrackConstruction() {
  return (
    <div className="w-full h-auto bg-gray-900 px-6 md:px-[100px] py-[100px]">
      <h1 className="text-center font-bold text-3xl md:text-4xl pb-[100px]">
        <span className="text-secondary">High Quality</span> <span className="text-primary">Track Construction</span>
      </h1>
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {/* Image Section */}
        <div className="img w-full md:w-[45%]" data-aos="fade-right" data-aos-duration="1000">
          <img
            src={construction}
            alt="Track Construction"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div
          className="content text-white text-center md:text-left w-full md:w-[50%] text-base md:text-lg leading-7 md:leading-8"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <p>We offer tailored tracks for diverse audiences:</p>
          <ul className="list-none mt-4 space-y-4">
            <li className="flex items-center gap-3">
              <FaArrowCircleRight className="text-yellow-400" /> Kids Tracks: Safe and fun for young visitors.
            </li>
            <li className="flex items-center gap-3">
              <FaArrowCircleRight className="text-yellow-400" /> Fun Tracks: Casual racing thrills for families and beginners.
            </li>
            <li className="flex items-center gap-3">
              <FaArrowCircleRight className="text-yellow-400" /> Thrill Tracks: Adrenaline-filled layouts for racing enthusiasts.
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

export default TrackConstruction;

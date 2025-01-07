import { FaArrowCircleRight } from "react-icons/fa";
import layout from "../../../assets/layout.jpeg";

function LayoutDesign() {
  return (
    <div id="layout" className="w-full h-auto bg-gray-900 px-6 md:px-[100px] py-[120px]">
      <h1 className="text-center font-bold text-yellow-400 text-3xl md:text-4xl pb-[100px]">
        Layout <span className="text-primary ">Design</span>
      </h1>
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        

        {/* Content Section */}
        <div
          className="content text-white text-center md:text-left w-full md:w-[50%] text-base md:text-lg leading-7 md:leading-8"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p>
            Our designers create optimized facility layouts that improve:
          </p>
          <ul className="list-none mt-4 space-y-4">
            <li className="flex items-center gap-3">
              <FaArrowCircleRight className="text-yellow-400" /> Space utilization
            </li>
            <li className="flex items-center gap-3">
              <FaArrowCircleRight className="text-yellow-400" /> Traffic flow
            </li>
            <li className="flex items-center gap-3">
              <FaArrowCircleRight className="text-yellow-400" /> Guest experience
            </li>
          </ul>
          <div className="mt-8 flex justify-center md:justify-start">
            <button className="rounded-md bg-primary px-6 py-3 text-secondary font-medium hover:bg-primary/90 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="img w-full md:w-[45%]">
          <img
            src={layout}
            alt="Layout Design"
            className="w-full h-[auto] md:h-[400px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default LayoutDesign;

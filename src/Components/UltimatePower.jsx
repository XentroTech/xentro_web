import AOS from "aos";
import "aos/dist/aos.css";
import { FaBolt } from "react-icons/fa";
import bg1 from "../assets/facility.jpg";
import bg from "../assets/power.webp";

AOS.init();

function UltimatePower() {
  return (
    <div className="bg-gray-900 py-12">
      <div className="w-full">
        {/* Hero Section */}
        <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl pb-4 text-secondary font-bold py-8 text-center py-24">
          ULTIMATE <span className="text-primary">PERFORMANCE</span>
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-x-12 gap-y-8 sm:gap-x-16 bg-gray-900 py-24 px-4">
          <div
            className="text max-w-md"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <p className="text-slate-500 sm:text-lg md:text-xl lg:text-lg xl:text-xl text-gray-800 leading-relaxed">
              Xentro addresses karting's biggest challenge with our innovative
              electric racing kart technology, providing unmatched racing
              experiences with the world's lightest electric go karts.
            </p>
          </div>
          <div
            className="img w-full sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-xl"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src={bg}
              alt="Ultimate Performance"
              className="w-full h-auto md:h-[350px] xl:h-[450px] rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Electric Power Unit Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-y-8 sm:gap-x-16 bg-gray-900 py-16 xl:py-24 px-4">
          <div
            className="img w-full sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <img
              src={bg1}
              alt="Electric Power Unit"
              className="w-full  h-auto md:h-[350px] xl:h-[450px] rounded-lg shadow-lg"
            />
          </div>
          <div
            className="text md:w-1/2 flex flex-col gap-6 text-sm md:text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <h1 className="text-secondary font-bold text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl pb-4 flex items-center gap-x-2">
              <FaBolt className="text-primary text-2xl" /> Electric{" "}
              <span className="text-primary">Power Unit</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-gray-400 leading-relaxed">
              Enjoy the simplicity of Plug and Play, fitting any standard racing
              chassis in 30 minutes. Unleash BSR X-Gen's remarkable performance
              globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UltimatePower;

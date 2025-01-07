import charging from "../../../assets/charging.png";

function ChargingFacilities() {
  return (
    <div id="charging" className="w-full h-auto bg-gray-900 px-6 md:px-[100px] py-[50px]">
      <h1 className="text-center font-bold text-yellow-400 text-3xl md:text-4xl pb-[100px]">
        Charging <span className="text-primary">Facilities</span>
      </h1>
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-10"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {/* Image Section */}
        <div className="img w-full md:w-[45%]">
          <img
            src={charging}
            alt="Charging Facilities"
            className="w-full h-auto md:h-[400px] rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="content text-white text-center md:text-left w-full md:w-[50%] text-base md:text-lg leading-7 md:leading-8">
          <p>
            Xentro implements hybrid solar-powered charging stations to keep your 
            go-karts running efficiently with minimal operational costs. Our advanced 
            systems are designed to reduce environmental impact while ensuring 
            uninterrupted performance.
          </p>
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

export default ChargingFacilities;

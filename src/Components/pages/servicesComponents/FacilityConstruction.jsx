import services from "../../../assets/facility-2.jpg";

function FacilityConstruction() {
  return (
    <div className="relative w-full min-h-screen bg-gray-900 pt-12" id="facility">
      {/* Heading Section */}
      <div className="text-center text-white px-6 md:px-16 py-8">
        <h1 className="text-yellow-400 font-bold text-3xl md:text-4xl">
          FACILITY <span className="text-primary">CONSTRUCTION</span>
        </h1>
        <p className="text-base text-gray-400 md:text-lg mt-4">
          We handle every aspect of building world-class entertainment facilities.
        </p>
      </div>

      {/* Content Section */}
      <div
        className="relative z-10 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-16 text-center text-white gap-10 md:gap-16"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={services}
            alt="Facility Construction"
            className="w-full md:w-[600px] rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col gap-6 text-md md:text-lg leading-relaxed">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <p className="text-start text-base md:text-lg">
                Our team ensures precise planning and execution to deliver
                cutting-edge entertainment spaces.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <p className="text-start text-base md:text-lg">
                From layout design to construction, we prioritize quality and safety.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <p className="text-start text-base md:text-lg">
                Tailored solutions to meet your specific business requirements.
              </p>
            </div>
          </div>
          <button className="mt-6 rounded-md bg-primary px-6 py-3 text-secondary font-semibold w-[200px] mx-auto md:mx-0 hover:bg-secondary/90 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default FacilityConstruction;

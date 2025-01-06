import { FaCheckCircle } from "react-icons/fa";
import franchise from "../../../assets/franchise.png";

function FranchiseModel() {
  return (
    <div className="relative w-full min-h-screen bg-gray-900 pt-12">
      {/* Heading Section */}
      <div className="text-center text-white px-6 md:px-16 py-8">
        <h1 className="text-yellow-400 font-bold text-3xl md:text-4xl">
          FRANCHISE <span className="text-primary">MODEL</span>
        </h1>
        <p className="text-base text-gray-400 md:text-lg mt-4">
          Expand your business rapidly with our low-capital franchise opportunities.
        </p>
      </div>

      {/* Content Section */}
      <div
        className="relative z-10 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-16 text-center text-white gap-10 md:gap-16"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col gap-6 text-md md:text-lg leading-relaxed">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-yellow-400 text-xl md:text-2xl flex-shrink-0" />
              <p className="text-start text-base md:text-lg">
                Rapid expansion with lower capital expenditure.
              </p>
            </div>
              <div className="flex items-start gap-3">
              <FaCheckCircle className="text-yellow-400 text-xl md:text-2xl flex-shrink-0" />
              <p className="text-start text-base md:text-lg">
                Franchisees invest their own capital, reducing your financial outlay.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-yellow-400 text-xl md:text-2xl flex-shrink-0" />
              <p className="text-start text-base md:text-lg">
                Franchise fees and royalties create a steady revenue stream.
              </p>
            </div>
          </div>
          <p className="text-start text-base md:text-lg">
            Partner with us to expand your business with lower risk and maximum growth potential.
          </p>
          <button className="mt-6 rounded-md bg-primary px-6 py-3 text-secondary font-semibold w-[200px] mx-auto md:mx-0 hover:bg-yellow-500 transition-colors duration-300">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={franchise}
            alt="Franchise Model"
            className="w-full md:w-[600px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default FranchiseModel;

import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/Logo 1.png";

function Footer() {
  return (
    <footer className="bg-black">
      <div className=" mx-auto px-6 pb-6 pt-16 sm:px-12 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.5fr,1fr,1fr,1fr] md:gap-8 gap-6 justify-center items-center md:items-start">
          {/* Logo and About Section */}
          <div className="text-center flex flex-col  justify-center md:justify-start items-center md:items-start md:text-left">
            <div className="flex-shrink-0">
              <img src={logo} alt="logo" className="w-24 h-24" />
            </div>
            <p className="mt-4 text-white leading-relaxed">
              Xentro delivers innovative electric karting solutions alongside
              comprehensive entertainment facility development. From electric
              go-karts to hybrid solar charging systems and full entertainment
              complexes, we bring your vision to life – seamlessly and
              sustainably.
            </p>
            <ul className="flex justify-start mt-6 space-x-4">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-primary transition"
                >
                  <FaFacebookF size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-primary transition"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-primary transition"
                >
                  <FaYoutube size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-primary transition"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div className="text-center md:text-start">
            <h3 className="text-lg font-medium text-secondary">About Us</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/company-history"
                  className="text-white hover:text-primary transition"
                >
                  Company History
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-white hover:text-primary transition"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="text-white hover:text-primary transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-white hover:text-primary transition"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-start">
            <h3 className="text-lg font-medium text-secondary">Our Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/services#facility"
                  className="text-white hover:text-primary transition"
                >
                  Facility Construction
                </Link>
              </li>
              <li>
                <Link
                  to="/services#kart"
                  className="text-white hover:text-primary transition"
                >
                  Custom Kart Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  to="/services#charging"
                  className="text-white hover:text-primary transition"
                >
                  Charging Facilities
                </Link>
              </li>
              <li>
                <Link
                  to="/services#layout"
                  className="text-white hover:text-primary transition"
                >
                  Layout Design
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-start">
            <h3 className="text-lg font-medium text-secondary">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center justify-center md:justify-start ">
                <FaPhoneAlt className="text-white mr-2" />
                <span className="text-white">+880 1911-682447</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="text-white mr-2" />
                <span className="text-white">support@xentrobd.com</span>
              </li>
              <li className="flex items-start justify-center md:items-start">
                <FaLocationArrow className="text-white mr-2  text-lg md:text-3xl xl:text-2xl" />
                <address className="not-italic text-white">
                  CTG Office: Plot 379, Khulshi Colony, Nasirabad 1/A,
                  Chittagong.
                </address>
              </li>
              <li className="flex items-start justify-center md:items-start">
                <FaLocationArrow className="text-white mr-2 text-xl md:text-4xl xl:text-2xl" />
                <address className="not-italic text-white">
                  Dhaka Office: House 512, Road No-7, Avenue 4, Mirpur DOHS
                  1216, Dhaka.
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 p-6 pt-2">
        <div className="flex flex-col sm:flex-row justify-between text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Xentrobd. All rights reserved.
          </p>
          <p>
            <a
              href="#"
              className="text-white underline hover:text-secondary transition"
            >
              Terms & Conditions
            </a>
            <span className="mx-2">&middot;</span>
            <a
              href="#"
              className="text-white underline hover:text-secondary transition"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

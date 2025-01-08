import { useState } from 'react';
import { FaChevronDown, FaChevronRight, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo 2.png';
import menuItems from './data/menuItems';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSubmenu = (id) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  return (
    <div className="mx-auto bg-black fixed top-0 left-0 w-[360px] md:w-full z-50 flex items-center justify-between px-6 md:px-12 py-3 opacity-70">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <Link to="/"><img src={logo} alt="logo-img" className="h-8 md:h-12 w-auto" /></Link>
      </div>

      {/* Desktop Menu Section */}
      <div className="hidden md:flex">
        <ul className="flex items-center gap-6">
          {menuItems.map((item) => (
            <li key={item.id} className="relative group">
              <Link
                to={item.link || "#"}
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200"
              >
                <span className="text-white whitespace-nowrap hover:text-secondary">
                  {item.title}
                </span>
                {item.submenu && (
                  <span className="text-white">
                    <FaChevronRight className="group-hover:hidden" />
                    <FaChevronDown className="hidden group-hover:inline" />
                  </span>
                )}
              </Link>
              {item.submenu && (
                <ul className="hidden group-hover:block w-[160px] absolute top-full left-0 bg-black text-white py-2 px-4 shadow-lg">
                  {item.submenu.map((subItem) => (
                    <li key={subItem.id} className="py-1">
                      <Link
                        to={subItem.link}
                        className="block text-white hover:text-secondary transition-colors duration-200"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Section */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-white">
          {isMobileMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-12 left-0 right-0 w-full bg-gray-900 p-4 z-40">
          <ul>
            {menuItems.map((item) => (
              <li key={item.id} className="py-2">
                <div
                  className="flex items-center justify-between text-white hover:text-secondary cursor-pointer"
                  onClick={() => item.submenu && toggleMobileSubmenu(item.id)}
                >
                  <Link to={item.link || "#"} className="block w-full">
                    {item.title}
                  </Link>
                  {item.submenu && (
                    <span>
                      {openSubmenu === item.id ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </span>
                  )}
                </div>
                {item.submenu && openSubmenu === item.id && (
                  <ul className="ml-4 mt-2">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.id} className="py-1">
                        <Link
                          to={subItem.link}
                          className="block text-secondary hover:text-primary transition-colors duration-200"
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

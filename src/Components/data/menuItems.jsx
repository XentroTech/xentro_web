import { FaAward, FaBriefcase, FaCogs, FaHome, FaPhoneAlt, FaServicestack, FaUsers } from 'react-icons/fa';

const menuItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
    icon: <FaHome />
  },
  {
    id: 2,
    title: "Services",
    link: "/services",
    icon: <FaCogs />
  },
  {
    id: 3,
    title: "About",
    icon: <FaUsers />,
    submenu: [
      {
        id: 3.1,
        title: "Business Model",
        link: "/businessModel",
        icon: <FaBriefcase />
      },
      {
        id: 3.2,
        title: "More Services",
        link: "/moreServices",
        icon: <FaServicestack />
      },
      {
        id: 3.3,
        title: "Why Choose Us",
        link: "/chooseUs",
        icon: <FaAward />
      },
    ],
  },
  {
    id: 4,
    title: "Our Team",
    link: "/team",
    icon: <FaPhoneAlt />
  },
  {
    id: 5,
    title: "Contact",
    link: "/Contact",
    icon: <FaPhoneAlt />
  },
];

export default menuItems;

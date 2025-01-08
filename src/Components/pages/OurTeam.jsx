import ashrafQr from "../../assets/ashraf-qr.png";
import ashraf from "../../assets/ashraf.png";
import eshrakQr from "../../assets/eshrak-qr.png";
import eshrak from "../../assets/eshrak.png";
import minarQr from "../../assets/minar-qr.png";
import minar from "../../assets/Miner.png";
import parvez from "../../assets/parvez .png";
// import parvezQr from "../../assets/parvez-qr-code.png";
import parvezQr from "../../assets/parvez-qr.png";
import riduan from "../../assets/riduan.png";
import riduanQr from "../../assets/riduanul-qr.png";
import rubaiyatQr from "../../assets/rubaiyat-qr.png";
import rubaiyat from "../../assets/rubaiyat.png";
import sajidQr from "../../assets/sajid-qr-code.png";
import sajid from "../../assets/sajid.png";
import team from "../../assets/team.jpg";
import Cards from "./Cards.jsx";
import PageHeader from "./PageHeader";

// info
const info = [
  {
    name: "Moktadir Sajid",
    designation: "Founder & Managing Director",
    about:
      "Moktadir Sajid, a vital team player at Xentro, is transforming the entertainment industry with his exceptional leadership and extensive technology experience.",
    qr: sajidQr,
    img: sajid,
    email: "sajid@xentrobd.com",
  },
  {
    name: "Thahrim Eshrak",
    designation: "Director of Business Development",
    about:
      "Thahrim leads Xentro’s strategic growth and brand innovation, ensuring successful partnerships and top-quality delivery.",
    qr: eshrakQr,
    img: eshrak,
    email: "eshrak@xentrobd.com",
  },
  {
    name: "Mohammad Sharfuddin",
    designation: "Director Production & R&D",
    about:
      "Mohammad Sharfuddin, a dedicated team player at Xentro, is transforming the entertainment industry with his exceptional production and R&D expertise. ",
    qr: minarQr,
    img: minar,
    email: "sharfuddin@xentrobd.com",
  },
  {
    name: "Khandaker Rubaiyat Islam",
    designation: "Director Marketing & Public relation",
    about:
      "Khandaker Rubaiyat Islam, a dedicated team player at Xentro, is revolutionizing the entertainment industry with his exceptional marketing and public relations skills. ",
    qr: rubaiyatQr,
    img: rubaiyat,
    email: "rubaiyat@xentrobd.com",
  },
  {
    name: "MD. Ashraf Ullah",
    designation: "Flutter Developer",
    about:
      "Md. Ashraf Ullah is a passionate Flutter developer with a clear vision of driving innovation at Xentro. His dedication is reflected in his commitment to enhancing Xentro's development projects.",
    qr: ashrafQr,
    img: ashraf,
    email: "ashraf@xentrobd.com",
  },
  {
    name: "MD. Riduanul Haque",
    designation: "Backend Developer",
    about:
      "Md. Riduanul Haque is a highly dedicated backend developer at Xentro, committed to improving the company's backend systems and driving innovation.",
    qr: riduanQr,
    img: riduan,
    email: "riduanul@xentrobd.com",
  },
  {
    name: "MD. Parvez Hossen",
    designation: "Production Supervisor/Assistant",
    about:
      "Md. Parvez Hossen, a highly skilled mechanical engineer at Xentro, brings exceptional expertise and dedication to his work. With a keen eye for detail and a problem-solving mindset.",
    qr: parvezQr,
    img: parvez,
    email: "parvez@xentrobd.com",
  },
];

function OurTeam() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900 bg-opacity-50 backdrop-blur-sm">
      <PageHeader
        title="Our Team"
        subtitle="** Expertise That Builds Dreams into Reality **"
        description="At Xentro, we are passionate about transforming your vision into extraordinary experiences. Our team specializes in creating comprehensive, cutting-edge entertainment facilities that prioritize innovation, sustainability, and customer satisfaction. From concept to completion, we’re dedicated to delivering excellence every step of the way."
        backgroundImage={team}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10 lg:gap-18 py-12">
        {info.map((member, index) => (
          <Cards
            key={index}
            name={member.name}
            designation={member.designation}
            about={member.about}
            qr={member.qr}
            img={member.img}
            email={member.email}
          />
        ))}
      </div>
    </div>
  );
}

export default OurTeam;

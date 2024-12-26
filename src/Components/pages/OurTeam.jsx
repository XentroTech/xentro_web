import React from "react";
import team from "../../assets/team.jpg";
import Cards from "./Cards";
import eshrak from "../../assets/eshrak_pic.jpg";
import sajid from "../../assets/sajid.jpg";
const info = [
  {
    name: "Moktadir Sajid ",
    designation: "Founder & Managing Director",
    about:
      "Moktadir Sajid, a vital team player at Xentro, is transforming the entertainment industry with his exceptional leadership and extensive technology experience. ",
    contact: "0170000000",
    img: sajid,
    email: "sajid@xentrobd.com",
  },
  {
    name: "Thahrim Eshrak ",
    designation: "Director of Business Development",
    about:
      "Thahrim leads Xentro’s strategic growth and brand innovation, ensuring successful partnerships and top-quality delivery",
    contact: "0170000000",
    img: eshrak,
    email: "eshrak@xentrobd.com",
  },
  {
    name: "Minar ",
    designation: "Director",
    about:
      "Minar leads Xentro’s strategic growth and brand innovation, ensuring successful partnerships and top-quality delivery",
    contact: "0170000000",
    img: eshrak,
    email: "minar@xentrobd.com",
  },
  {
    name: "Minar ",
    designation: "Director",
    about:
      "Minar leads Xentro’s strategic growth and brand innovation, ensuring successful partnerships and top-quality delivery",
    contact: "0170000000",
    img: sajid,
    email: "minar@xentrobd.com",
  },
  {
    name: "Minar ",
    designation: "Director",
    about:
      "Minar leads Xentro’s strategic growth and brand innovation, ensuring successful partnerships and top-quality delivery",
    contact: "0170000000",
    img: sajid,
    email: "minar@xentrobd.com",
  },
  {
    name: "Minar ",
    designation: "Director",
    about:
      "Minar leads Xentro’s strategic growth and brand innovation, ensuring successful partnerships and top-quality delivery",
    contact: "0170000000",
    img: sajid,
    email: "minar@xentrobd.com",
  },
];

function OurTeam() {
  return (
    <div className="w-full">
      <section
        className="w-full h-[600px] relative flex flex-col justify-center items-center "
        style={{
          backgroundImage: `url(${team})`,
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-indigo-950/80"></div>
        {/* text */}
        <div className="content relative   ">
          <h1 className="text-yellow-400 font-bold text-4xl text-center">
            Meat Our Team
          </h1>
        </div>
      </section>
      <div className="bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[2rem] container mx-auto gap-4">
          {info.map((u) => (
            <Cards
              key={u.name}
              img={u.img}
              name={u.name}
              designation={u.designation}
              about={u.about}
              contact={u.contact}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;

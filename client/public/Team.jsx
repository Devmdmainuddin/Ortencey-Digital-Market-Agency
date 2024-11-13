import React, { useState } from "react";
import { TbTargetArrow } from "react-icons/tb";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Tm from "../assets/team2.jpg";
import Tm1 from "../assets/team1.png";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="lg:py-28 py-3 lg:px-0 px-2 bg-[#F4F4FF]">
      <div className="container mx-auto">
        <h3 className="text-blue-500 font-sans lg:text-[20px] text-[16px] font-medium justify-center flex gap-x-3 items-center">
          <TbTargetArrow className="font-sans lg:text-[25px] text-[18px] text-red-400" />
          Team Member
        </h3>
        <h2 className="text-black lg:text-[40px] text-center text-[20px] font-bold font-sans">
          Creative Team Member
        </h2>
        <div className="lg:flex justify-between pt-10 gap-x-5">
          {[
            { name: "Robert Sions", role: "Business Consultant", image: Tm },
            { name: "Karikok Jahan", role: "Executive Manager", image: Tm1 },
            { name: "Robert Sions", role: "Business Consultant", image: Tm },
            { name: "Karikok Jahan", role: "Executive Manager", image: Tm1 },
          ].map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

let TeamCard = ({ member }) => {
  let [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="lg:w-1/4 w-full bg-[#fff] px-5 py-5  rounded-xl shadow-lg lg:hover:scale-105 duration-700 ease-in-out lg:mb-0 mb-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-gray-400 py-3 px-2 rounded-lg flex justify-center items-center">
        <Link to="/teamdetails">
          <img
            src={member.image}
            alt={member.name}
            className="rounded-md w-full lg:h-[300px] h-[200px]"
          />
        </Link>
      </div>
      <Link to="/teamdetails">
        <div className="text-center pt-5">
          {isHovered ? (
            <div className="flex justify-center space-x-5 duration-700 ease-in-out">
              <a
                href="#"
                aria-label="Facebook"
                className="lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-full flex justify-center items-center bg-blue-600"
              >
                <FaFacebookF className="text-white lg:text-[25px] text-[20px]" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-full flex justify-center items-center bg-blue-600"
              >
                <FaLinkedinIn className="text-white lg:text-[25px] text-[20px]" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-full flex justify-center items-center bg-blue-600"
              >
                <FaInstagram className="text-white lg:text-[25px] text-[20px]" />
              </a>
            </div>
          ) : (
            <>
              <h3 className="font-sans text-[20px] font-semibold">
                {member.name}
              </h3>
              <p className="font-sans font-normal text-[16px]">{member.role}</p>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Team;

import React from "react";
import { didi, kubal, map, nike } from "../assets";
import { FaAngleDown } from "react-icons/fa";
import SimpleBtn from "./buttons/SimpleBtn";
import { Link, useNavigate } from "react-router-dom";

const exhibitions = [
  {
    img: nike,
    name: "Nike art gallery",
    location: "Lagos, Nigeria",
  },
  {
    img: kubal,
    name: "Kubal center",
    location: "Nairobi, Kenya",
  },
  {
    img: didi,
    name: "Didi museum",
    location: "Lagos, Nigeria",
  },
];

const Exhibitions = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/galleries");
  };
  return (
    <section className="bg-gradient-to-b from-[#0F0A0F] to-[#302B30] text-white px-6 w-full flex flex-col h-fit justify-between items-center py-16">
      <h2 className="text-[26px] font-semibold mb-8 px-2 text-center uppercase">
        Discover Exhibitions in Africa
      </h2>
      <div className="flex lgss:flex-row flex-col justify-between items-center w-full lgss:w-[78%] py-6">
        <div className="px-[5%]">
          <SimpleBtn
            onClick={handleClick}
            className="px-[32px] flex items-center gap-3"
          >
            Select a location <FaAngleDown />
          </SimpleBtn>
        </div>
        <SimpleBtn
          onClick={handleClick}
          className="px-[32px] lgss:flex hidden border-white border"
        >
          See more...
        </SimpleBtn>
      </div>
      <div className="flex lgss:hidden flex-col lgss:py-10 w-full justify-center items-center">
        <div className="w-[60%] py-7 flex justify-end items-end">
          <img src={map} alt="Map of Africa" className="w-auto h-auto" />
        </div>
        <div className="w-[90%] flex flex-col justify-start items-start space-y-4">
          <div className="flex lgss:max-w-[600px] w-full items-end justify-end py-6">
            <Link to={"/galleries"}>
            <SimpleBtn className="px-[32px] border-white border">
              See more
            </SimpleBtn>
            </Link>
          </div>
          {exhibitions.map((exhibition, index) => (
            <div
              key={index}
              className="flex items-center w-full space-x-4 lgss:max-w-[600px] bg-[#1E1E1E]"
            >
              <img
                src={exhibition.img}
                alt={exhibition.name}
                className="w-24 h-auto"
              />
              <div className="text-left space-y-1">
                <h3 className="text-lg font-semibold">{exhibition.name}</h3>
                <p className="text-sm">{exhibition.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lgss:flex hidden flex-row w-[80%] justify-between items-center">
        <div className="w-[30%] lgsx:w-full h-full py-7 flex justify-center items-center">
          <img src={map} alt="Map of Africa" className="w-auto h-auto" />
        </div>
        <div className="w-[50%] lgsx:w-full flex flex-col justify-start items-start space-y-4">
          {exhibitions.map((exhibition, index) => (
            <div
              key={index}
              className="flex items-center w-full space-x-5 lgss:max-w-[600px] bg-[#1E1E1E]"
            >
              <img
                src={exhibition.img}
                alt={exhibition.name}
                className="w- h-auto"
              />
              <div className="text-left space-y-1">
                <h3 className="text-xl font-semibold">{exhibition.name}</h3>
                <p>{exhibition.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;

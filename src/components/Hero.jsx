import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { heroImg1, heroImg2, heroImg3, heroEllipse, heroImg4 } from "../assets";
import Header from "./Header";
import SimpleBtn from "./buttons/SimpleBtn";
import { useNavigate } from "react-router-dom";

const images = [heroImg1, heroImg2, heroImg3, heroImg4];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate("/galleries/products");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full lgss:h-screen font-montserrat lgss:bg-primary bg-black text-white">
      <Header />
      <div className="flex flex-col lgss:flex-row-reverse w-full h-full">
        <div className="lgss:w-[65%] relative flex h-[50vh] lgss:h-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="relative lgss:w-[45%] flex flex-col justify-center lgss:items-start px-0 lgss:px-[5%] pt-16 h-fit py-3 lgss:h-screen">
          <div className="absolute top-0 left-[-10%] h-full lgss:w-[140%]">
            <img
              src={heroEllipse}
              alt="Ellipse"
              className="absolute inset-0 w-full h-screen object-cover"
            />
          </div>
          <div className="relative z-10 w-full space-y-7 py-10 px-8 lgss:bg-none lgss:bg-opacity-0 bg-black bg-opacity-65 lgss:p-0">
            <h1 className="pb-8 lgss:text-5xl text-3xl font-medium text-white">
              Art For Africa
            </h1>
            <h2 className="text-[20px] lgss:text-2xl text-white mt-4">
              Connecting African Art Enthusiasts Across the Continent: Invest in
              the Future of African Art.
            </h2>
            <p className="lgss:text-sm font-extralight">
              Connecting African Art Enthusiasts Across the Continent: Invest in
              the Future of African Art. For Africans to express their deep
              desires of Art.
            </p>
            <div className="pt-4 flex lgss:flex-row flex-col gap-5 items-center">
              <SimpleBtn className={"px-[32px] flex gap-2"}>
                <div className="rounded-full p-[5px] bg-white">
                  <FaPlay className="text-black text-[8px]" />
                </div>
                Learn more
              </SimpleBtn>
              <SimpleBtn
                onClick={handleBtnClick}
                className={"px-[32px] border-white border"}
              >
                Get Started
              </SimpleBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

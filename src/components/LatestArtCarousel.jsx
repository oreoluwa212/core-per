import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HeaderText from "./textComponents/HeaderText";
import { latest1, latest2 } from "../assets";
import SliderArrow from "./sliders/SliderArrow";

const LatestArtCarousel = () => {
  const cardWidth = 350;
  const cardMarginPercentage = 3;
  const cardMargin = (window.innerWidth * cardMarginPercentage) / 100;
  const transitionDuration = 500;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const galleries = [
    {
      imageSrc: latest1,
      title: "How to Draw Flowers",
    },
    {
      imageSrc: latest2,
      title: "Intricacies of Art",
    },
    {
      imageSrc: latest2,
      title: "Exploring Modern Art",
    },
  ];

  const sliderRef = useRef(null);

  const prevSlide = () => {
    if (isTransitioning || currentIndex === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const nextSlide = () => {
    if (isTransitioning || currentIndex === galleries.length - 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
    };

    if (sliderRef.current) {
      sliderRef.current.addEventListener("transitionend", handleTransitionEnd);
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener(
          "transitionend",
          handleTransitionEnd
        );
      }
    };
  }, []);

  const renderGalleries = galleries;

  return (
    <div className="relative w-full overflow-hidden flex flex-col justify-between items-center bg-[#111111] py-10 px-4 h-fit">
      <HeaderText
        title={"LATEST IN THE WORLD OF ART"}
        className={"text-center text-white px-10"}
      />
      <div className="w-[80%] flex gap-10 justify-center mt-5 lgss:py-10 overflow-hidden relative">
        <div
          className="flex"
          ref={sliderRef}
          style={{
            transform: `translateX(-${
              currentIndex * (cardWidth + cardMargin)
            }px)`,
            width: `${renderGalleries.length * (cardWidth + cardMargin)}px`,
            transition: isTransitioning
              ? `transform ${transitionDuration}ms ease`
              : "none",
          }}
        >
          {renderGalleries.map((gallery, index) => (
            <LatestArtCard
              key={index}
              imageSrc={gallery.imageSrc}
              title={gallery.title}
              cardWidth={cardWidth}
              cardMargin={cardMargin}
            />
          ))}
        </div>
      </div>

      <SliderArrow
        onPrevClick={prevSlide}
        onNextClick={nextSlide}
        indicatorPosition={currentIndex * (100 / galleries.length)}
        totalSlides={galleries.length}
      />

      <div className="w-full flex my-5 justify-center items-center">
        <Link to={"/galleries/products"}>
          <button className="px-8 py-2 border border-white text-white hover:bg-black rounded-[32px]">
            See more
          </button>
        </Link>
      </div>
    </div>
  );
};
const LatestArtCard = ({ imageSrc, title, cardWidth, cardMargin }) => {
  return (
    <div
      className="bg-transparent shadow-sm h-fit border-gray-300 w-full shadow-gray-500 lgss:w-[350px] my-4 rounded-[8px] min-h-[160px] flex-shrink-0 relative"
      style={{ marginRight: `${cardMargin}px` }}
    >
      <div className="h-[200px] relative">
        <img
          src={imageSrc}
          className="rounded-t-[8px] w-full h-full object-cover"
          alt={title}
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-t-[8px]"></div>
      </div>
      <div className="py-8 text-white">
        <h1 className="lgss:text-2xl text-sm text-center font-semibold px-1">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default LatestArtCarousel;

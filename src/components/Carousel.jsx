import React, { useState, useEffect } from "react";
import SmallCard from "./cards/landingPage/SmallCard";
import LargeCard from "./cards/landingPage/LargeCard";
import { FaAngleDown } from "react-icons/fa";
import SimpleBtn from "./buttons/SimpleBtn";
import { Link } from "react-router-dom";
import HeaderText from "./textComponents/HeaderText";
import { footerCountryUK } from "../assets";
import SliderArrow from "./sliders/SliderArrow";

const Carousel = ({ cards }) => {
  const cardWidth = 150;
  const visibleCards = 3;
  const cardMargin = 16;
  const transitionDuration = 500;

  const totalCards = [...cards, ...cards, ...cards];
  const [currentIndex, setCurrentIndex] = useState(visibleCards);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(cards.length);
    } else if (currentIndex === totalCards.length - visibleCards) {
      setCurrentIndex(cards.length - visibleCards);
    }
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      handleTransitionEnd();
    }, transitionDuration);

    return () => {
      clearTimeout(transitionTimeout);
    };
  }, [currentIndex]);

  const indicatorPosition =
    (currentIndex % cards.length) * (100 / cards.length);

  return (
    <div className="relative w-full overflow-hidden flex flex-col justify-center items-center bg-[#111111] py-10 px-4 h-fit">
      <HeaderText
        title={"BUY AND INVEST ART COMMISSION - FREE"}
        subtitle={"PHYSICAL | DIGITAL | NFT"}
        className={"text-center text-white"}
      />
      <div className="w-full flex justify-center items-center">
      <div className="w-[80%] lgss:mt-5 lgss:py-10 overflow-hidden">
        <div
          className="flex transition-transform justify-end gap-12 items-end duration-500"
          style={{
            transform: `translateX(-${
              currentIndex * (cardWidth + cardMargin)
            }px)`,
            width: `${totalCards.length * (cardWidth + cardMargin)}px`,
            transition: isTransitioning
              ? `transform ${transitionDuration}ms`
              : "none",
          }}
        >
          {totalCards.map((card, index) => (
            <div
              key={index}
              className={`flex-shrink-0 cursor-pointer transition-transform duration-500 ${
                expandedCardIndex === index % cards.length ? "scale-150" : ""
              }`}
            >
              {card.type === "small" ? (
                <SmallCard {...card} />
              ) : (
                <LargeCard {...card} />
              )}
            </div>
          ))}
        </div>
      </div>
      </div>

      <SliderArrow
        onPrevClick={prevSlide}
        onNextClick={nextSlide}
        indicatorPosition={indicatorPosition}
        totalSlides={cards.length}
      />

      <div className="w-full flex my-5 justify-center items-center">
        <Link to={"/galleries/products"}>
          <SimpleBtn className={"px-[32px] border"}>See more</SimpleBtn>
        </Link>
      </div>
    </div>
  );
};

export default Carousel;

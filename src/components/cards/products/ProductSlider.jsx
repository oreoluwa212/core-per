import React from "react";
import Slider from "react-slick";
import TopSlide from "./TopSlide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    >
      <FaArrowRight className="arrow" />
    </div>
  );
};

const ProductSlider = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full flex justify-start items-start">
      <div className="slider-wrapper w-[95%]">
        <Slider {...settings}>
          {products.map((product, index) => (
            <TopSlide key={index} img={product.img} text={product.text} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;

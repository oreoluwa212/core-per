import React, { useState } from "react";
import { gallery2, gallery3, gallery4, gallery5, gallery6 } from "../../assets";

const images = [ gallery2, gallery3, gallery4, gallery5, gallery6];

const GalleriesImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 66.67}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[66.67%] mx-2 cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image}
              alt={`Gallery ${index}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleriesImages;

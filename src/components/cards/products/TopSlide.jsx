import React from "react";

function TopSlide({ img, text }) {
  return (
    <div className="p-2 mx-8">
      <div className="flex flex-col items-start">
        <img src={img} alt={text} className="w-full h-auto object-cover" />
        <p className="text-left mt-2">{text}</p>
      </div>
    </div>
  );
}

export default TopSlide;

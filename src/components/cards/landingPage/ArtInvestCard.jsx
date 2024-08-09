import React from "react";

const ArtInvestCard = ({ imageSrc, title, description, btnText }) => {
  return (
    <div className="flex flex-row items-center gap-6 bg-[#1E1E1E] h-fit shadow-custom-blur backdrop-blur-sm custom-width pr-6 lgss:pr-6">
      <div className="flex justify-center items-center px-6 py-6 border-dashed border border-white">
        <div className="w-10 h-12">
          <img src={imageSrc} className="w-full h-full" alt={title} />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start text-left text-sm py-1 text-gray-400">
        <h3 className="text-lg font-semibold pb-2 text-white">{title}</h3>
        <p>{description}</p>
        <button className="hover:underline">{btnText}</button>
      </div>
    </div>
  );
};

export default ArtInvestCard;

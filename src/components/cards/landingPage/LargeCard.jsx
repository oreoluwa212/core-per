import React from "react";

const LargeCard = ({ image, title, artist, price }) => {
  return (
    <div className="lgss:w-[400px] h-fit bg-transparent font-montserrat text-white border-[2px] border-[#413f3f] rounded-lg shadow-[#1B1B1B4D] shadow-sm relative">
      <div className="h-[340px] relative">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded-t-lg mb-4"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-t-lg"></div>{" "}
        {/* Overlay */}
      </div>
      <div className="px-3 py-5 space-y-1 text-gray-400 text-center">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-xl">{artist}</p>
        <p className="pt-5 text-[18px]">{price}</p>
      </div>
    </div>
  );
};

export default LargeCard;

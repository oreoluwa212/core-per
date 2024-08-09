import React from "react";
import ProductText from "../../textComponents/ProductText";

function ProductCard({
  img,
  title,
  subtitle,
  description,
  description1,
  price,
  onClick,
}) {
  return (
    <div
      className="lgss:w-[95%] cursor-pointer bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40"
      onClick={onClick}
    >
      <div className="w-full">
        <img src={img} className="w-full rounded-t-[8px] h-auto" alt={title} />
      </div>
      <div className="flex flex-col pl-7 py-4">
        <ProductText
          title={title}
          subtitle={subtitle}
          description={description}
          description1={description1}
        />
        <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
          <p className="border p-2 rounded-[4px] border-black border-opacity-25">EUR</p>
          <p>€ {price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

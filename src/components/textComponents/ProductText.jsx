import React from "react";

const ProductText = ({
  title,
  subtitle,
  description,
  description1,
  className,
}) => {
  return (
    <div className={`${className}`}>
      <h1 className="pt-2 text-xl lgss:text-2xl font-semibold">{title}</h1>
      <h2 className="text-lg font-medium">{subtitle}</h2>
      <div className="flex flex-col">
        <p className="text-sm font-normal">{description}</p>
        <p className="text-sm font-normal">{description1}</p>
      </div>
    </div>
  );
};

export default ProductText;

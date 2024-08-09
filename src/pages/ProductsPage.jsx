import React, { useState } from "react";
import Header from "../components/Header";
import HeaderText from "../components/textComponents/HeaderText";
import {
  footerCountryUK,
  item1a,
  item1b,
  item1c,
  item1d,
  item2a,
  item2b,
  item2c,
  item2d,
  item2e,
  item3a,
  item3b,
  item3c,
  item3d,
  product1,
  product2,
  product3,
  product4,
} from "../assets";
import ProductSlider from "../components/cards/products/ProductSlider";
import { FaAngleDown } from "react-icons/fa";
import ProductCard from "../components/cards/products/ProductCard";
import { useNavigate } from "react-router-dom";

const products = [
  { img: product1, text: "Digital Art" },
  { img: product2, text: "NFTs" },
  { img: product3, text: "Plaster" },
  { img: product4, text: "Photography" },
  { img: product2, text: "Ceramic" },
  { img: product4, text: "Fumage" },
];

const ProductsPage = () => {
  const [activeScreen, setActiveScreen] = useState(1);
  const navigate = useNavigate();
  const handleImageClick = (img) => {
    navigate("/galleries/products/item-details", { state: { img } });
  };

  const productDetails1 = [
    {
      img: item1a,
      title: "Heaven on Earth",
      subtitle: "Sarah Ojunnwa, Nairobi Kenya",
      description: "2014. Oil linen canvas",
      description1: "200 x 350. Sounds (Album)",
      price: 2000,
    },
    {
      img: item1b,
      title: "Purple Silk",
      subtitle: "Sarah Ojunnwa, Nairobi Kenya",
      description: "2014. Oil linen canvas",
      description1: "200 x 350. Sounds (Album)",
      price: 2000,
    },
    {
      img: item1c,
      title: "Rainbow Rose",
      subtitle: "Loki Payaya. Nairobi Kenya",
      description: "2014. Oil linen canvas",
      description1: "200 x 350. Sounds (Album)",
      price: 4000,
    },
    {
      img: item1d,
      title: "Mayetta",
      subtitle: "Sarah Ojunnwa, Nairobi Kenya",
      description: "2014. Oil linen canvas",
      description1: "200 x 350. Sounds (Album)",
      price: 1000,
    },
  ];

  const productDetails2 = [
    {
      img: item2a,
      title: "Rainbow Vision",
      subtitle: "Lara Johnson. South Africa",
      description: "2014. Oil linen canvas",
      description1: "200 x 350. Sounds (Album)",
      price: 1500,
    },
    {
      img: item2b,
      title: "Vibrating Wave",
      subtitle: "Sarah Ojunnwa, Nairobi Kenya",
      description: "2014. Oil linen canvas",
      description1: "200 x 350. Sounds (Album)",
      price: 2000,
    },
    {
      img: item2c,
      title: "Egyptian Writing",
      subtitle: "Paja Salah. Egypt",
      description: "2014. Oil linen canvas",
      description1: "200 x 350. Sounds (Album)",
      price: 8000,
    },
    {
      img: item2d,
      title: "Traditional Masks",
      subtitle: "Lara Folake. Nigeria",
      description: "2014. Oil linen canvas",
      description1: "200 x 350. Sounds (Album)",
      price: 500,
    },
    {
      img: item2e,
      title: "Paint Brush",
      subtitle: "Elon Musk. South Africa",
      description: "2014. Oil linen canvas",
      description1: "200 x 350. Sounds (Album)",
      price: 4000,
    },
  ];

  const productDetails3 = [
    {
      img: item3a,
      title: "Yellow Oil Wave",
      subtitle: "Michael Okeke. Nigeria",
      description: "2014. Oil linen canvas",
      description1: "200 x 350. Sounds (Album)",
      price: 5000,
    },
    {
      img: item3b,
      title: "Africana",
      subtitle: "Femi Olarinwaju. Nigeria",
      description: "2014. Oil linen canvas",
      description1: "200 x 350. Sounds (Album)",
      price: 1500,
    },
    {
      img: item3c,
      title: "Oil Opaque",
      subtitle: "Oji Iheanyi. Nigeria",
      description: "2014. Oil linen canvas",
      description1: "200 x 350. Sounds (Album)",
      price: 10000,
    },
    {
      img: item3d,
      title: "Flat Orange",
      subtitle: "John Andy. Nairobi Kenya",
      description: "2014. Oil linen canvas",
      description1: "200 x 350. Sounds (Album)",
      price: 6000,
    },
  ];

  return (
    <div className="w-full font-montserrat bg-white text-black">
      <Header />
      <div className="py-[5%] mt-16 w-full flex flex-col justify-start lgss:px-14">
        <HeaderText
          className={"text-black pt-5 ml-8"}
          title={"Discover physical digital and NFT artworks "}
        />
        <div className="w-full px-[15%] lgss:px-0">
          <ProductSlider products={products} />
        </div>
        <div className="w-full px-[5%] lgss:px-0">
          <div className="w-full flex flex-col pt-7">
            <div className="w-full lgss:px-5 lgss:h-[80px] h-fit lgss:py-0 py-4 flex lgss:flex-row flex-col gap-2 justify-between">
              <div className="flex lgss:flex-row flex-col lgss:px-8 gap-5 justify-start lgss:items-center text-primary font-medium h-[92px] ">
                <p>Artwork type:</p>
                <div className="">
                  <button
                    onClick={() => setActiveScreen(1)}
                    className={
                      activeScreen === 1
                        ? "text-primary border-primary border-b-2 font-semibold px-[12px]"
                        : "px-[12px]"
                    }
                  >
                    ALL
                  </button>
                  <button
                    onClick={() => setActiveScreen(2)}
                    className={
                      activeScreen === 2
                        ? "text-primary border-primary border-b-2 font-semibold px-[12px]"
                        : "px-[12px]"
                    }
                  >
                    PHYSICAL
                  </button>
                  <button
                    onClick={() => setActiveScreen(3)}
                    className={
                      activeScreen === 3
                        ? "text-primary border-primary border-b-2 font-semibold px-[12px]"
                        : "px-[12px]"
                    }
                  >
                    DIGITAL
                  </button>
                  <button
                    onClick={() => setActiveScreen(4)}
                    className={
                      activeScreen === 4
                        ? "text-primary border-primary border-b-2 font-semibold px-[12px]"
                        : "px-[12px]"
                    }
                  >
                    NFT
                  </button>
                </div>
              </div>
              <a
                href="#language"
                className="hover:underline flex text-[18px] py-4 lgss:py-0 gap-4 items-center uppercase"
              >
                <span>
                  <img src={footerCountryUK} alt="uk logo" />
                </span>
                currency
                <FaAngleDown />
              </a>
            </div>
            <div className="w-full lgss:px-12 pb-4">
              {activeScreen === 1 ? (
                <div className="flex w-full flex-col lgss:flex-row gap-5">
                  <div className="flex flex-col lgss:w-1/3 w-full">
                    {productDetails1.map((product, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-10 w-full pb-10 items-center"
                      >
                        <ProductCard
                          img={product.img}
                          title={product.title}
                          subtitle={product.subtitle}
                          description={product.description}
                          description1={product.description1}
                          price={product.price}
                          onClick={() => handleImageClick(product.img)}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col lgss:w-1/3 w-full">
                    {productDetails2.map((product, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-10 w-full pb-10 items-center"
                      >
                        <ProductCard
                          img={product.img}
                          title={product.title}
                          subtitle={product.subtitle}
                          description={product.description}
                          description1={product.description1}
                          price={product.price}
                          onClick={() => handleImageClick(product.img)}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col lgss:w-1/3 w-full">
                    {productDetails3.map((product, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-10 w-full pb-10 items-center"
                      >
                        <ProductCard
                          img={product.img}
                          title={product.title}
                          subtitle={product.subtitle}
                          description={product.description}
                          description1={product.description1}
                          price={product.price}
                          onClick={() => handleImageClick(product.img)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : activeScreen === 2 ? (
                <div className="flex w-full flex-col lgss:flex-row gap-5">
                  <div className="flex flex-col lgss:w-1/3 w-full">
                    {productDetails3.map((product, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-10 w-full pb-10 items-center"
                      >
                        <ProductCard
                          img={product.img}
                          title={product.title}
                          subtitle={product.subtitle}
                          description={product.description}
                          description1={product.description1}
                          price={product.price}
                          onClick={() => handleImageClick(product.img)}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col lgss:w-1/3 w-full">
                    {productDetails2.map((product, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-10 w-full pb-10 items-center"
                      >
                        <ProductCard
                          img={product.img}
                          title={product.title}
                          subtitle={product.subtitle}
                          description={product.description}
                          description1={product.description1}
                          price={product.price}
                          onClick={() => handleImageClick(product.img)}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col lgss:w-1/3 w-full">
                    {productDetails1.map((product, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-10 w-full pb-10 items-center"
                      >
                        <ProductCard
                          img={product.img}
                          title={product.title}
                          subtitle={product.subtitle}
                          description={product.description}
                          description1={product.description1}
                          price={product.price}
                          onClick={() => handleImageClick(product.img)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : activeScreen === 3 ? (
                <div className="flex w-full flex-col lgss:flex-row gap-5">
                  <div className="flex flex-col lgss:w-1/3 w-full">
                    {productDetails1.map((product, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-10 w-full pb-10 items-center"
                      >
                        <ProductCard
                          img={product.img}
                          title={product.title}
                          subtitle={product.subtitle}
                          description={product.description}
                          description1={product.description1}
                          price={product.price}
                          onClick={() => handleImageClick(product.img)}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col lgss:w-1/3 w-full">
                    {productDetails2.map((product, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-10 w-full pb-10 items-center"
                      >
                        <ProductCard
                          img={product.img}
                          title={product.title}
                          subtitle={product.subtitle}
                          description={product.description}
                          description1={product.description1}
                          price={product.price}
                          onClick={() => handleImageClick(product.img)}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col lgss:w-1/3 w-full">
                    {productDetails3.map((product, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-10 w-full pb-10 items-center"
                      >
                        <ProductCard
                          img={product.img}
                          title={product.title}
                          subtitle={product.subtitle}
                          description={product.description}
                          description1={product.description1}
                          price={product.price}
                          onClick={() => handleImageClick(product.img)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex w-full flex-col lgss:flex-row gap-5">
                  <div className="flex flex-col lgss:w-1/3 w-full">
                    {productDetails3.map((product, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-10 w-full pb-10 items-center"
                      >
                        <ProductCard
                          img={product.img}
                          title={product.title}
                          subtitle={product.subtitle}
                          description={product.description}
                          description1={product.description1}
                          price={product.price}
                          onClick={() => handleImageClick(product.img)}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col lgss:w-1/3 w-full">
                    {productDetails2.map((product, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-10 w-full pb-10 items-center"
                      >
                        <ProductCard
                          img={product.img}
                          title={product.title}
                          subtitle={product.subtitle}
                          description={product.description}
                          description1={product.description1}
                          price={product.price}
                          onClick={() => handleImageClick(product.img)}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col lgss:w-1/3 w-full">
                    {productDetails1.map((product, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-10 w-full pb-10 items-center"
                      >
                        <ProductCard
                          img={product.img}
                          title={product.title}
                          subtitle={product.subtitle}
                          description={product.description}
                          description1={product.description1}
                          price={product.price}
                          onClick={() => handleImageClick(product.img)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

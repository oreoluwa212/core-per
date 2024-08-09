import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { FaAngleDown } from "react-icons/fa";
import { footerCountryUK } from "../assets";
import TransparentBtn from "../components/buttons/TransparentBtn";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ItemDetailsPage() {
  const location = useLocation();
  const { img } = location.state || { img: null };
  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const item = {
    img: img,
    artist: "Oji",
    medium: "Photography",
    year: "2012",
    album: "Heaven on Earth",
    condition: "Excellent",
    size: "100 cm x 70 cm",
    price: 2000,
    currency: "EUR",
  };

  const handleAddToCart = () => {
    addItemToCart(item);
    navigate("/cart");
  };

  return (
    <div className="w-full font-montserrat bg-white text-black">
      <Header />
      <div className="py-[5%] mt-16 w-full flex flex-col justify-start lgss:px-[5%]">
        {img ? (
          <div className="flex lgss:flex-row flex-col justify-center w-full lgss:justify-between pt-10 lgss:pt-0 lgss:px-0 px-5">
            <div className="w-[10%] hidden lgss:flex h-[100px]">
              <img src={img} className="w-full rounded-lg h-full" alt="" />
            </div>
            <div className="lgss:w-[45%] h-[70vh]">
              <img
                src={img}
                alt="Selected Item"
                className="w-full rounded-lg h-full"
              />
            </div>
            <div className="lgss:w-[40%] pt-7 px-4 lgss:pt-0 lgss:px-0">
              <div className="flex flex-col gap-2 pb-4">
                <div className="lgss:w-[50%] w-full md:w-[70%] grid grid-cols-2">
                  <div className="flex flex-col gap-3">
                    <strong>Artist:</strong>
                    <strong>Medium:</strong>
                    <strong>Year:</strong>
                    <strong>Album:</strong>
                    <strong>Condition:</strong>
                    <strong>Size:</strong>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p>{item.artist}</p>
                    <p>{item.medium}</p>
                    <p>{item.year}</p>
                    <p>{item.album}</p>
                    <p>{item.condition}</p>
                    <p>{item.size}</p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-2">
                  <img
                    src={footerCountryUK}
                    alt="UK flag"
                    className="w-5 h-5"
                  />
                  <span>CURRENCY</span>
                  <FaAngleDown />
                </div>
                <div className="py-3 flex items-center gap-2">
                  <span className="font-semibold">{item.currency}</span>
                  <span>€ {item.price}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">Free Shipping</span>
                </div>
                <div className="mt-5 flex gap-8 flex-col lgss:flex-row">
                  <TransparentBtn
                    btnText={"Add to cart"}
                    onClick={handleAddToCart}
                  />
                  <TransparentBtn btnText={"Invest"} />
                </div>
                <div className="mt-7 flex flex-col md:flex-row gap-8 w-full lgss:flex-row justify-between lgss:pr-[20%]">
                  <TransparentBtn btnText={"Message"} />
                  <TransparentBtn btnText={"Share"} />
                  <TransparentBtn btnText={"Sell Yours"} />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ItemDetailsPage;

import {
  FaAngleDown,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { footerCountryUK } from "../assets";

function Footer() {
  return (
    <div className="w-full absolute bg-footerBg h-[251px] flex flex-col justify-between items-start font-montserrat text-white font-extralight px-5% py-10 px-[5%] uppercase text-lg">
      <div className="w-full flex lgss:flex-row flex-col justify-between items-center">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#contact" className="hover:underline">
          contact
        </a>
        <div className="flex gap-1">
          <a href="#terms" className="hover:underline">
            terms |
          </a>
          <a href="#condition" className="hover:underline">
            condition |
          </a>
          <a href="#privacy" className="hover:underline">
            privacy |
          </a>
        </div>
        <a href="#language" className="hover:underline flex gap-4 items-center">
          <span>
            <img src={footerCountryUK} alt="uk logo" />
          </span>
          language
          <FaAngleDown />
        </a>
      </div>
      <div className="flex gap-5 text-[#828282]">
        <FaFacebook />
        <FaLinkedin />
        <FaYoutube />
        <FaInstagram />
      </div>
    </div>
  );
}

export default Footer;

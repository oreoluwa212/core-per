import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
} from "../assets";
import Header from "../components/Header";
import GalleryCard from "../components/GalleryCard";
import BlackBtn from "../components/buttons/BlackBtn";
import GalleriesImages from "../components/sliders/GalleriesImages";
import { useNavigate } from "react-router-dom";

const galleries = [
  {
    imageSrc: gallery1,
    title: "Nike Art Gallery",
    location: "Lagos, Nigeria",
    description:
      "Nike Art Gallery is an art gallery in Lagos, Nigeria owned by Nike Davies-Okundaye. The gallery is one of the largest of its kind in West Africa, it boasts a collection of about 8,000 diverse artworks from various Nigerian artists like Chief Josephine Oboh Macleod. The gallery is housed in a five-story building.",
  },
  {
    imageSrc: gallery2,
    title: "Kubal Gallery",
    location: "Nairobi, Kenya",
    description:
      "Kubal Gallery is a leading art gallery in Lagos, showcasing contemporary and modern art from African artists. It features a wide range of exhibitions and events. It promotes cultural dialogue and offers a platform for both established and emerging artists.",
  },
  {
    imageSrc: gallery3,
    title: "Art Twenty One",
    location: "Lagos, Nigeria",
    description:
      "Art Twenty One is a space dedicated to contemporary art, located in the heart of Lagos. It promotes cultural dialogue and offers a platform for both established and emerging artists.",
  },
  {
    imageSrc: gallery4,
    title: "National Museum Lagos",
    location: "Lagos, Nigeria",
    description:
      "The National Museum Lagos houses important collections of Nigerian art, including pieces from various Nigerian cultures, and provides insights into the nation's history and heritage.",
  },
  {
    imageSrc: gallery5,
    title: "Terra Kulture",
    location: "Lagos, Nigeria",
    description:
      "Once established, national museums in Nigeria became the sole responsibility of government. Museums therefore became synonymous with government patronage. Other attempts that were made at establishing museums had also been at different government levels.",
  },
  {
    imageSrc: gallery6,
    title: "Didi Museum",
    location: "Lagos, Nigeria",
    description:
      "Once established, national museums in Nigeria became the sole responsibility of government. Museums therefore became synonymous with government patronage. Other attempts that were made at establishing museums had also been at different government levels.",
  },
];

const ExhibitionPage = () => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/galleries/products");
  };
  return (
    <div className="w-full font-montserrat bg-white text-black px-[5%]">
      <Header />
      <div className="py-[5%] mt-16 w-full flex flex-wrap justify-between">
        <div className="lgss:w-[80%] p-5 flex flex-col md:grid md:grid-cols-2 lgsss:flex-wrap justify-between gap-16">
          {galleries.map((gallery, index) => (
            <GalleryCard
              key={index}
              imageSrc={gallery.imageSrc}
              title={gallery.title}
              location={gallery.location}
              description={gallery.description}
            />
          ))}
        </div>
        <div className="lgss:w-[18%] pt-5">
          <div className="w-full bg-white shadow-sm h-fit border-[1px] py-3 border-gray-300 rounded-[8px]">
            <div className="py-5 px-3 flex flex-col justify-center items-center gap-2 text-primary">
              <h1 className="text-xl lg:text-2xl font-medium uppercase text-center">
                new artworks
              </h1>
              <GalleriesImages />
              <BlackBtn
                onClick={handleBtnClick}
                className={"w-[55%] mt-5 py-[12px] bg-[#000000E5]"}
              >
                See more...
              </BlackBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionPage;

import { art1, nft1 } from "../assets";
import ArtInvestCard from "./cards/landingPage/ArtInvestCard";

const ArtInvestments = () => {
  return (
    <div className="flex flex-wrap gap-7 justify-around py-16 text-white bg-gradient-to-r from-black to-[#3B3B3B] px-[5%]">
      <ArtInvestCard
        imageSrc={nft1}
        title="NFT Artworks"
        description="Buy and Sell"
        btnText={"See more..."}
      />
      <ArtInvestCard
        imageSrc={art1}
        title="Invest in art"
        description="Own quality art with as little as $1"
        btnText={"View options..."}
      />
    </div>
  );
};

export default ArtInvestments;

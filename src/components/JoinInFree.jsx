import { artifact } from "../assets";
import SimpleBtn from "./buttons/SimpleBtn";
import HeaderText from "./textComponents/HeaderText";

const headerTexts = [
  {
    subtitle: "An open art platform",
    subtext:
      "An open platform for art-lovers, artists, galleries, collectors, art universities and anyone who is involved in the art world in some way. ",
    description:
      "Create your own profile, make connections, followers, post on your wall and much more.",
  },
  {
    subtitle: "A Theme-Based Social Network",
    subtext:
      "Imagine a LinkedIn for art, as social as Facebook, plus a marketplace and plenty of entertaining and informative content.",
    description: "Served from Germany. Popular worldwide.",
  },
  {
    subtitle: "Connecting The Art World",
    subtext: "Connecting The Art World",
    description:
      "Art-Lovers, Artists, Galleries and Universities from all countries ... worldwide.",
  },
];

function JoinInFree() {
  return (
    <div className="w-full flex h-full bg-joinInBg font-montserrat py-16 px-[5%]">
      <div className="flex flex-col h-full lgss:w-[50%] lgss:pr-[10%]">
        <HeaderText className={"text-white"} title={"Join in free"} />
        {headerTexts.map((header, index) => (
          <HeaderText
            key={index}
            title={header.title}
            className={"text-white"}
            subtitle={header.subtitle}
            subtext={header.subtext}
            description={header.description}
          />
        ))}
        <div className="pt-14 flex lgss:flex-row flex-col w-full lgss:space-x-7 items-center">
          <SimpleBtn className={"lgss:w-[25%] w-[45%]"}>Log In</SimpleBtn>
          <SimpleBtn
            className={"px-6 w-[50%] lgss:w-[25%] border-white border"}
          >
            Sign Up
          </SimpleBtn>
        </div>
      </div>
      <div className="lgss:flex hidden w-[50%] justify-center items-center">
        <img src={artifact} alt="" />
      </div>
    </div>
  );
}

export default JoinInFree;

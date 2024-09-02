import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

const AdminNav = ({ toggleSidebar }) => {
    return (
        <nav className="z-10 w-full font-axiforma text-black bg-white shadow-md h-fit py-4">
            <div className="flex items-center justify-between lg:px-[70px]">
                <div className="hidden w-full items-center justify-between md:flex">
                    <div className="flex items-center bg-black px-6 py-4 rounded-full">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="flex space-x-6">
                        <FaSearch />
                    </div>
                </div>

                <div className="flex w-full items-center justify-between px-4 py-6 md:hidden">
                    <div className="flex items-center">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-40 p-[10px]"
                            onClick={toggleSidebar}
                        >
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AdminNav;

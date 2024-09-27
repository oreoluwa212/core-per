import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const AdminNav = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <nav className="fixed top-0 left-0 z-10 w-full text-black bg-white shadow-md h-fit py-4">
      <div className="flex items-center justify-between lg:px-[70px] overflow-hidden">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex items-center bg-black px-6 py-4 rounded-full">
            <Link to="/">
              <img src={logo} alt="Logo" className="max-w-full h-auto" />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex w-full items-center justify-between px-4 py-6 md:hidden">
          <div className="flex items-center bg-black px-6 py-4 rounded-full">
            <Link to="/">
              <img src={logo} alt="Logo" className="max-w-full h-auto" />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-40 p-[10px]"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? <FaTimes /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;

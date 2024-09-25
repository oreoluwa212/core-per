import { BiLogOut } from "react-icons/bi";
import { FaCog, FaHome, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AdminSidebar = ({ isOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    navigate("/signin/admin");
  };

  return (
    <aside
      className={`bg-white shadow-md border z-10 text-lg fixed top-0 left-0 h-screen w-2/3 lg:w-1/6 transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:static md:translate-x-0`}
    >
      <ul className="flex flex-col gap-10 justify-center items-center pt-[50%]">
        <li className="mb-4">
          <Link to="/dashboard/ahome" className="flex items-center space-x-4">
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link to="#" className="flex items-center space-x-4">
            <FaUser />
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link to="#" className="flex items-center space-x-4">
            <FaCog />
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="flex items-center text-red-600 font-semibold space-x-4"
          >
            <BiLogOut />
            <span>Log out</span>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;

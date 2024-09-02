import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

const AdminSidebar = ({ isOpen }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear session data
        sessionStorage.clear();
        localStorage.clear();

        // Redirect to the sign-in page
        navigate("/signin/admin");
    };

    return (
        <aside className={`bg-white shadow-md border z-10 w-1/2 lg:w-1/6 text-lg ${isOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col gap-10 justify-center items-center lg:pt-[20%]">
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
                    <button onClick={handleLogout} className="flex items-center text-red-600 font-semibold space-x-4">
                        <BiLogOut />
                        <span>Log out</span>
                    </button>
                </li>
            </ul>
        </aside>
    );
};

export default AdminSidebar;

import { useState } from "react";
import { Suspense } from "react";
import PropTypes from "prop-types";
import AdminNav from "../components/NavBars/AdminNav";
import AdminSidebar from "../components/NavBars/AdminSidebar";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-row h-screen w-full">
      <AdminSidebar isOpen={isSidebarOpen} />
      <div className="w-full lgss:overflow-auto">
        <div className="lgss:w-full lgss:h-full lgss:flex-1 lgss:overflow lgss:px-[4%] flex flex-col ">
          <AdminNav
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <div className="mt-[50px] lgss:mt-0 px-[5%] mds:px-0">
            <main
              className={`flex-1 bg-white p-3 md:px-12 pt-[20%] md:pt-[10%] transition-all duration-300 ${
                isSidebarOpen ? "ml-64" : "ml-0" // Adjust margin based on sidebar state
              } overflow-x-hidden overflow-y-auto`}
            >
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node,
};

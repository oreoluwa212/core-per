// AdminLayout Component
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
    <div className="flex flex-col min-h-screen overflow-hidden w-full">
      <AdminNav toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-1 overflow-hidden">
        <AdminSidebar isOpen={isSidebarOpen} />
        <main
          className={`flex-1 bg-white p-3 md:p-12 transition-all duration-300 ${
            isSidebarOpen ? "opacity-50" : "opacity-100"
          } overflow-x-hidden`}
        >
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </main>
      </div>
    </div>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node,
};

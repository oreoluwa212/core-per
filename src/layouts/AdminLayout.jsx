import { useState, Suspense } from "react";
import PropTypes from "prop-types";
import AdminNav from "../components/NavBars/AdminNav";
import AdminSidebar from "../components/NavBars/AdminSidebar";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen w-full">
      <AdminNav toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <AdminSidebar isOpen={isSidebarOpen} />
      {isSidebarOpen && (
        <div
          className="fixed inset-0"
          onClick={toggleSidebar} // Close sidebar on backdrop click
        />
      )}
      <div className="flex-1 overflow-auto">
        <div className="mt-16 px-4">
          <main className="flex-1 bg-white  p-3 transition-all duration-300">
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node,
};

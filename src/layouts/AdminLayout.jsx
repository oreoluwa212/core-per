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
    <div className="flex min-h-screen w-full flex-col">
      <AdminNav toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <AdminSidebar isOpen={isSidebarOpen} />
        <main className="flex-1 bg-white p-3 md:p-12">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </main>
      </div>
    </div>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node,
};

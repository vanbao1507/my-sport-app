import React from "react";

import BookingList from "./BookingList";
import Revenue from "./Revenue";
import BarChart from "./Barchart";
import Footer from "./Footer";
import SidebarAdmin from "./SidebarAdmin";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <SidebarAdmin />
      <main className="main-content">
        {/* <h1>Admin Dashboard</h1> */}
        <div className="widgets">
          {/* <BookingList /> */}
          <BarChart />
          <Revenue />
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;

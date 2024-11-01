import React from "react";
import Sidebar from "./SidebarAdmin";
import BookingList from "./BookingList";
import Revenue from "./Revenue";
import BarChart from "./Barchart";
import Footer from "./Footer";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <main className="main-content">
        {/* <h1>Admin Dashboard</h1> */}
        <div className="widgets">
          {/* <BookingList /> */}
          <BarChart />
          <Revenue />
        </div>
      </main>
      <footer className="footer">{/* <Footer /> */}</footer>
    </div>
  );
}

export default AdminDashboard;

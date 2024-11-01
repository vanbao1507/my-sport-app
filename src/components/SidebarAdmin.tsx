import React from "react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">Mỹ Đình</h2>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <a href="/login" className="active">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#">Bookings</a>
          </li>
          <li>
            <a href="/User">Users</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

import React from "react";

const revenueData = {
  total: 5000,
  lastMonth: 2000,
  thisMonth: 3000,
};

function Revenue() {
  return (
    <div className="revenue">
      <h2>Revenue Overview</h2>
      <div className="stats">
        <div className="stat">
          <h3>Total Revenue</h3>
          <p>${revenueData.total}</p>
        </div>
        <div className="stat">
          <h3>Last Month</h3>
          <p>${revenueData.lastMonth}</p>
        </div>
        <div className="stat">
          <h3>This Month</h3>
          <p>${revenueData.thisMonth}</p>
        </div>
      </div>
    </div>
  );
}

export default Revenue;

import React from "react";

const revenueData = {
  total: 5000,
  lastMonth: 2000,
  thisMonth: 3000,
};

function Revenue() {
  return (
    <div className="revenue">
      <p>Doanh Thu</p>
      <div className="stats">
        <div className="stat">
          <h4>Total Revenue</h4>
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

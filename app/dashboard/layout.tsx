import React from "react";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Hello world</p>
      {children}
    </div>
  );
};

export default DashboardLayout;

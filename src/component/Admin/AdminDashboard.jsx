import React from "react";
import MenuAdmin from "./Menu/MenuAdmin";

const AdminDashboard = () => {
  return (
    <section className="flex">
      <MenuAdmin />
      <div className="min-h-[78vh]">
        <h1 class>Dashboard</h1>
      </div>
    </section>
  );
};

export default AdminDashboard;

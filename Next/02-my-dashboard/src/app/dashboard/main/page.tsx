import React from "react";
import { SimpleWidget } from "../../components";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const MainPage = () => {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Ingormacion General</span>

      <div className="flex flex-wrap p-2">
        <SimpleWidget />
      </div>
    </div>
  );
};

export default MainPage;

import { WidgetsGrid } from "../../components";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const MainPage = () => {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Ingormacion General</span>

      <WidgetsGrid />
    </div>
  );
};

export default MainPage;

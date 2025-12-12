import { TabBar } from "@/components";
import { cookies } from "next/headers";

export const metadata = {
  title: "Cookies Page",
  description: "Cookies Page",
};

const CookiesPage = async () => {
  const cookieStore = await cookies();
  const selectedTab = cookieStore.get("selectedTab")?.value ?? 1;

  return (
    <div className="grig grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col">
        <span className="text-3xl">Tabs</span>
        <TabBar currentTab={Number(selectedTab)} />
      </div>
    </div>
  );
};

export default CookiesPage;

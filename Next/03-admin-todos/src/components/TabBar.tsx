"use client";

import { setCookie } from "cookies-next";
import { useState } from "react";

interface Props {
  currentTab?: number;
  tabOptions?: number[];
}

export const TabBar = ({
  currentTab = 1,
  tabOptions = [1, 2, 3, 4],
}: Props) => {
  const [selectedTab, setSelectedTab] = useState(currentTab);

  const onTabSelected = (tab: number) => {
    setSelectedTab(tab);
    setCookie("selectedTab", tab.toString());
  };

  return (
    <div
      className={`grid w-full ${
        "grid-cols-" + tabOptions.length
      } space-x-2 rounded-xl bg-gray-200 p-2`}
    >
      {tabOptions.map((option) => (
        <div key={option}>
          <input
            type="radio"
            onChange={() => {}}
            checked={selectedTab === option}
            id={option.toString()}
            className="peer hidden"
          />
          <label
            onClick={() => onTabSelected(option)}
            className="block transition-all cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

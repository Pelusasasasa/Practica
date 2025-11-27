"use client";
import { useAppSelector } from "@/src/store";
import { SimpleWidget } from "./SimpleWidget";
import { IoCafeOutline } from "react-icons/io5";
import { CgShoppingCart } from "react-icons/cg";

export const WidgetsGrid = () => {
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget
        title={`${count}`}
        label="Contador"
        subtitle="Productos Agregados"
        icon={<CgShoppingCart className="text-blue-500" size={50} />}
        href="/dashboard/counter"
      />
    </div>
  );
};

import Link from "next/link";
import { ReactNode } from "react";
import { IoCafeOutline } from "react-icons/io5";

interface Props {
  title: string;
  subtitle?: string;
  label?: string;
  icon?: ReactNode;
  href?: string;
}

export const SimpleWidget = ({ href, icon, label, subtitle, title }: Props) => {
  return (
    <div className="bg-white shadow-xl  m-2 p-3 sm:min-w-[25%] min-w-full  rounded-2xl border border-gray-50 mx-2">
      <div className="flex flex-col">
        <div>
          {label && (
            <h2 className="font-bold text-gray-600 text-center">{label}</h2>
          )}
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            <div id="icon">
              {/* Icono irá aquí */}
              {icon}
            </div>
            <div id="temp" className="text-center">
              <h4 className="text-4xl">{title}</h4>
              {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
            </div>
          </div>
        </div>

        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
          {href ? (
            <Link href={href} className="text-indigo-600 text-xs font-medium">
              Mas
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { data } from "@/data/packages";
import Link from "next/link";
const Sidebar = ({ url }) => {
  return (
    <div className="m-5">
      <h1 className="text-center font-extrabold text-2xl py-2">
        Our Other Packages
      </h1>
      {data.map((d, index) => (
        <div
          key={index}
          className={` ${
            d.url === url ? "bg-primary text-white" : "bg-skyblue text-black"
          } border-2 border-primary/40 px-3 py-1 mt-1 rounded-md hover:translate-x-2 duration-300`}
        >
          <Link href={`/health-packages/${d.url}`} className="font-bold">
            {d.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

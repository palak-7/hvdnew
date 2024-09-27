import Sidebar from "@/components/common/Sidebar";
import React from "react";
import { data } from "@/data/packages";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";

const Detailed = ({ url }) => {
  const p = data.find((d) => d.url === url);
  return (
    <div>
      <div className="lg:grid grid-cols-3">
        <div className="col-span-2 lg:my-16 mx-5">
          <h1 className="uppercase text-4xl font-bold text-center pt-5">
            {p.name}
          </h1>
          <div className="flex justify-center pb-5">
            <div className="flex mt-3">
              <div className="text-lightgreen text-lg font-bold">
                ₹ {p.price} /-
              </div>
              <del className="ml-5 text-gray-500 text-lg">
                ₹ {p.cancelled} /-
              </del>
            </div>
          </div>
          <div className="lg:grid grid-cols-2">
            <div>
              <Image
                src={`${p.image}`}
                width={1000}
                height={1000}
                className=""
              />
            </div>
            <table className="w-full ml-5">
              <tbody>
                {p.description.map((d, index) => (
                  <tr key={index} className="border-b">
                    <td className="align-top">
                      <GiCheckMark className="mr-2 text-green-600 mt-3" />
                    </td>
                    <td className="flex items-center font-bold p-2">
                      {d.heading}
                    </td>
                    <td className="p-2">{d.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="lg:block hidden">
          <Sidebar url={p.url} />
        </div>
      </div>
    </div>
  );
};

export default Detailed;

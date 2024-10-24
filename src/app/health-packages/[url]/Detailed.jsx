import React from "react";
import { data } from "@/data/packages";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";
import Link from "next/link";
const Detailed = ({ url }) => {
  const p = data.find((d) => d.url === url);
  return (
    <div className="dark:bg-white">
      <div className="relative">
        <Image
          src={`/packages/package-banner.png`}
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover hidden lg:block"
          alt="service"
        />
        <div className=" lg:absolute inset-0 text-white lg:grid grid-cols-2">
          <div className="ml-10 flex justify-center mt-6 font-bold text-5xl">
            <div>
              <h1 className="uppercase text-black text-4xl font-bold pt-5">
                {p.name}
              </h1>
              <div className="pb-5">
                <div className="flex mt-3">
                  <div className="text-lightgreen text-2xl font-bold">
                    ₹ {p.price} /-
                  </div>
                  {/* <del className="ml-5 text-gray-500 text-2xl">
                    ₹ {p.cancelled} /-
                  </del> */}
                </div>
                <Link
                  href="/"
                  className="bg-lightgreen text-white px-3 py-2 rounded-md text-lg font-bold mt-2"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:grid grid-cols-2 lg:mx-20">
        <div className="col-span-2 lg:my-7 mx-5">
          <div className="lg:grid grid-cols-2">
            <div>
              <Image
                src={`${p.image}`}
                width={1000}
                height={1000}
                alt="health-package"
                className="rounded-md"
              />
            </div>
            <table className="w-full lg:mx-5 my-3 lg:my-0 bg-white shadow-lg rounded-lg">
              <tbody>
                {p.description.map((d, index) => (
                  <tr
                    key={index}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } hover:bg-gray-200 transition-colors duration-300`}
                  >
                    <td className="align-top p-4">
                      <GiCheckMark className="mr-2 text-green-600 mt-3" />
                    </td>
                    <td className="flex items-center font-semibold p-4 text-lg text-gray-800">
                      {d.heading}
                    </td>
                    <td className="p-4 align-top text-gray-700">{d.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="lg:block hidden">
          <Sidebar url={p.url} />
        </div> */}
      </div>
    </div>
  );
};

export default Detailed;

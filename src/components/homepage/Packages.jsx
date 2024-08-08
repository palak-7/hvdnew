"use client";
import React from "react";
import { data } from "@/data/packages";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Packages = () => {
  const filteredData = data.slice(0, 6);

  return (
    <div className="bg-skyblue">
      <h1 className="font-extrabold text-3xl text-primary text-center pt-10">
        Our Health Packages
      </h1>
      <div className="grid grid-cols-3 mt-10">
        {filteredData.map((s) => (
          <div
            key={s.id}
            className="bg-white mx-10 mb-10 rounded-br-[30%] rounded-tl-[30%] border shadow-lg"
          >
            <Image
              width={1000}
              height={1000}
              className="w-full h-[250px] object-cover rounded-tl-[30%]"
              src={`${s.image}`}
            />
            <div className="px-10 pt-4">
              <div className="flex">
                <h2 className="text-lg text-primary font-bold">{s.name}</h2>
                <p className="text-gray-500 font-bold ml-3">
                  ({s.number} Tests)
                </p>
              </div>
              <div>
                <ul className="text-gray-700 grid grid-cols-2 text-sm gap-x-4 mt-3">
                  {s.description.slice(0, 5).map((d, index) => (
                    <li key={index} className="list-disc">
                      {d.heading}
                    </li>
                  ))}
                  <div className="list-disc font-bold">
                    + {s.number - 5} Tests
                  </div>
                </ul>
                <div className="flex mt-3">
                  <div className="text-lightgreen text-lg font-bold">
                    ₹ {s.price} /-
                  </div>
                  <del className="ml-5 text-gray-500 text-lg">
                    ₹ {s.cancelled} /-
                  </del>
                </div>
                <Link
                  href="/"
                  className="bg-primary mt-2 mb-4 text-white p-1 rounded-md flex w-1/2 justify-center"
                >
                  <div className="flex">
                    Know More <FaArrowRightLong className="mt-1 ml-2" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          href="/"
          className="bg-lightgreen py-2 px-4 rounded-md text-white mb-4"
        >
          View All Health Packages
        </Link>
      </div>
    </div>
  );
};

export default Packages;
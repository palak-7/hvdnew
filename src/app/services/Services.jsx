import React from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesdata } from "@/data/serviceData";
const Services = () => {
  return (
    <div className="mt-10">
      <div className="lg:grid grid-cols-3">
        {servicesdata.map((s) => (
          <div key={s.id} className="">
            <div className="bg-white lg:mx-10 mx-2 mb-10 rounded-br-[30%] rounded-tl-[30%] border shadow-lg">
              <Image
                width={1000}
                height={1000}
                className="w-full h-[250px] object-cover rounded-tl-[30%]"
                src={`/services/${s.image}`}
              />
              <div className="p-5">
                <h2 className="text-lg text-primary font-bold">{s.name}</h2>
                <p className="text-gray-700 line-clamp-3">{s.short_desc}</p>
              </div>
              <div className="flex justify-center">
                <Link
                  href={`/services/${s.url}`}
                  className="bg-lightgreen hover:scale-105 shadow-lg text-white rounded-md py-2 px-9 mb-5"
                >
                  Find More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

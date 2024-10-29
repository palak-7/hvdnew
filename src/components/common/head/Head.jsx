import React from "react";
import Image from "next/image";
import Link from "next/link";
const Head = ({ service }) => {
  return (
    <div className="relative">
      <Image
        src={`/services/${service.image}`}
        width={1000}
        height={1000}
        className="w-full h-[300px] object-cover"
        alt="service"
      />
      <div className="bg-lightblue absolute inset-0 opacity-70"></div>
      <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
        <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
          {service.name}
        </div>
        <div className="row-start-5 flex justify-center">
          <Link
            href={"/contact"}
            className="bg-lightgreen shadow-white text-xl duration-300 hover:scale-105 shadow-md text-white rounded-md flex items-center px-9"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Head;

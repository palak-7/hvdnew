import React from "react";
import Image from "next/image";
import Link from "next/link";
const Introduction = () => {
  return (
    <div className="relative overflow-x-clip">
      <Image
        width={10000}
        height={10000}
        src="/banner/hvd-banner-3.png"
        alt="banner"
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute inset-0 text-white pt-20 lg:pl-20 pl-4 lg:bg-transparent bg-white lg:bg-opacity-100 bg-opacity-40">
        <div className="text-lightblue font-extrabold text-4xl">
          At Health Vista Diagnostics
          <br /> Your Wellness, Our Commitment
        </div>
        <div className="space-y-4 mt-3">
          <div className="flex">
            <Image
              src="/banner/precision.svg"
              width={40}
              height={40}
              className="border p-2 border-black"
              alt="precision"
            />
            <div className="text-primary mt-2 ml-2 font-semibold">
              Precision in Diagnostics
            </div>
          </div>
          <div className="flex">
            <Image
              src="/banner/tech.svg"
              width={40}
              height={40}
              className="border p-2 border-black"
              alt="tech"
            />
            <div className="text-primary mt-2 ml-2 font-semibold">
              Advanced Technology
            </div>
          </div>
          <div className="flex">
            <Image
              src="/banner/healthcare.svg"
              width={40}
              height={40}
              className="border p-2 border-black"
              alt="healthcare"
            />
            <div className="text-primary mt-2 ml-2 font-semibold">
              Expertise in Healthcare
            </div>
          </div>
          <div className="">
            <Link href="/contact" className="bg-lightgreen py-2 px-3 rounded-md">
              Book Online
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

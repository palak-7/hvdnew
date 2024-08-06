import React from "react";
import Image from "next/image";
import Link from "next/link";
const Introduction = () => {
  return (
    <div className="relative">
      <Image
        width={1000}
        height={1000}
        src="/banner/banner.jpg"
        alt="banner"
        className="w-full h-[500px]"
      />
      <div className="absolute inset-0 text-white pt-20 pl-20">
        <div className="text-lightblue font-extrabold text-4xl">
          At Health Vista Diagnostic
          <br /> Your Wellness, Our Commitment
        </div>
        <div className="space-y-4 mt-3">
          <div className="flex">
            <Image
              src="/banner/precision.svg"
              width={40}
              height={40}
              className="border p-2 border-black"
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
            />
            <div className="text-primary mt-2 ml-2 font-semibold">
              Expertise in Healthcare
            </div>
          </div>
          <div className="">
            <Link href="/" className="bg-lightgreen py-2 px-3 rounded-md">
              Book Online
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

import React from "react";
import Image from "next/image";
import Link from "next/link";
const Doctors = () => {
  return (
    <section className="py-8">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-lightblue text-3xl font-extrabold mb-2">
          Meet Our Expert Team
        </h1>
        <p className="text-lightblue text-xl text-center font-semibold">
          Dedicated Professionals Committed to Your Health and Well-being
        </p>
      </div>
      <div className="lg:grid grid-cols-3 lg:mx-[200px]">
        <Link
          href="/our-team/dr-bs-singla"
          className="hover:scale-105 duration-300  flex flex-col items-center px-10"
        >
          <div className="p-2 rounded-[100%] border">
            <Image
              src="/team/dr.jpg"
              alt="Dr. B.S. Singla"
              width={150}
              height={150}
              className="rounded-[100%] w-[210px] h-[200px] object-cover" // Changed to rounded-full for perfect circle
            />
          </div>
          <h1 className="text-xl text-center font-bold mt-4 text-lightblue">
            Dr. B.S. Singla
          </h1>
          <h2 className="text-md text-center text-lightblue">
            Senior Consultant Non Invasive Cardiologist
          </h2>
          <div className="border border-lightblue my-4 w-full"></div>
          <p className="text-gray-800 text-center text-sm">
            MBBS, MD (PGI CHANDIGARH)
          </p>
        </Link>
        <Link
          href="/our-team/dr-rohit-singla"
          className="hover:scale-105 duration-300 lg:mt-0 mt-10 flex flex-col items-center px-10"
        >
          <div className="p-2 rounded-[100%] border">
            <Image
              src="/team/rohitsir1.jpg"
              alt="Dr. Rohit Singla"
              width={150}
              height={150}
              className="rounded-[100%] w-[210px] h-[200px] object-cover" // Changed to rounded-full for perfect circle
            />
          </div>
          <h1 className="text-xl text-center font-bold mt-4 text-lightblue">
            Dr. Rohit Singla
          </h1>
          <h2 className="text-md text-center text-lightblue">
            Senior Consultant Interventional Cardiologist
          </h2>
          <div className="border border-lightblue my-4 w-full"></div>
          <p className="text-gray-800 text-center text-sm">
            MBBS (AIIMS), MD (AIIMS), DM Cardiology
          </p>
        </Link>
        <Link
          href="/our-team/dr-rishu-sangal"
          className="hover:scale-105 duration-300 lg:mt-0 mt-10 flex flex-col items-center px-10"
        >
          <div className="p-2 rounded-[100%] border">
            <Image
              src="/team/rishumam1.jpg"
              alt="Dr. Rishu Sangal"
              width={150}
              height={150}
              className="rounded-[100%] w-[210px] h-[200px] object-cover" // Changed to rounded-full for perfect circle
            />
          </div>
          <h1 className="text-xl text-center font-bold mt-4 text-lightblue">
            Dr. Rishu Sangal
          </h1>
          <h2 className="text-md text-center text-lightblue">
            Senior Consultant <br /> Radiologist
          </h2>
          <div className="border border-lightblue my-4 w-full"></div>
          <p className="text-gray-800 text-center text-sm">
            MBBS, MD (Radiology), Oncoradiology
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Doctors;

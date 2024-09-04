import React from "react";
import Image from "next/image";
const Doctors = () => {
  return (
    <section className="py-8">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-lightblue text-3xl font-extrabold mb-2">
          Meet Our Expert Team
        </h1>
        <p className="text-lightblue text-xl text-center">
          Dedicated Professionals Committed to Your Health and Well-being
        </p>
      </div>
      <div className="lg:grid grid-cols-3 lg:mx-[200px]">
        <div className="flex flex-col items-center px-10">
          <div className="p-2 rounded-[100%] border">
            <Image
              src="/doctors/16.png"
              alt="Dr. B.S. Singla"
              width={150}
              height={150}
              className="rounded-[100%] w-[210px] h-[200px]" // Changed to rounded-full for perfect circle
            />
          </div>
          <h1 className="text-xl text-center font-bold mt-4 text-lightblue">
            Dr. B.S. Singla
          </h1>
          <h2 className="text-md text-center text-lightblue">
            Consultant Physician & Non Invasive Cardiologist
          </h2>
          <div className="border border-lightblue my-4 w-full"></div>
          <p className="text-gray-800 text-center text-sm">
            MBBS, MD (Medicine), FIAE (Echocardiography)
          </p>
        </div>
        <div className="lg:mt-0 mt-10 flex flex-col items-center px-10">
          <div className="p-2 rounded-[100%] border">
            <Image
              src="/doctors/17.png"
              alt="Dr. Rohit Singla"
              width={150}
              height={150}
              className="rounded-[100%] w-[210px] h-[200px]" // Changed to rounded-full for perfect circle
            />
          </div>
          <h1 className="text-xl text-center font-bold mt-4 text-lightblue">
            Dr. Rohit Singla
          </h1>
          <h2 className="text-md text-center text-lightblue">
            Director & Senior Consultant Interventional Cardiology
          </h2>
          <div className="border border-lightblue my-4 w-full"></div>
          <p className="text-gray-800 text-center text-sm">
            MBBS, MD ( AIIMS ) <br />
            DM ( CARDIOLOGY )
          </p>
        </div>
        <div className="lg:mt-0 mt-10 flex flex-col items-center px-10">
          <div className="p-2 rounded-[100%] border">
            <Image
              src="/doctors/15.png"
              alt="Dr. Rishu Sangal"
              width={150}
              height={150}
              className="rounded-[100%] w-[210px] h-[200px]" // Changed to rounded-full for perfect circle
            />
          </div>
          <h1 className="text-xl text-center font-bold mt-4 text-lightblue">
            Dr. Rishu Sangal
          </h1>
          <h2 className="text-md text-center text-lightblue">
            Consultant Physician & Non Invasive Cardiologist
          </h2>
          <div className="border border-lightblue my-4 w-full"></div>
          <p className="text-gray-800 text-center text-sm">
            MBBS, MD (Medicine), FIAE (Echocardiography)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Doctors;

"use client";

import React from "react";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
const Drrishusangal = () => {
  const data = [
    {
      original: "/team/dr10.png",
      thumbnail: "/team/dr10.png",
    },
    {
      original: "/team/dr9.png",
      thumbnail: "/team/dr9.png",
    },
    {
      original: "/team/dr11.jpg",
      thumbnail: "/team/dr11.jpg",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-lightgreen">
        <Image
          src="/team/rishumam.jpg"
          width={1000}
          height={1000}
          className="w-full px-10 lg:px-20 lg:pt-5  pb-5"
          alt="dr-rishu-singal"
        />
        <div className="mx-10 leading-loose lg:mt-0 my-10">
          <div>
            <h1 className="text-4xl font-extrabold text-primary">
              Dr Rishu Sangal
            </h1>
            <h3 className="text-primary font-semibold">
              Director & Senior Consultant Radiology
            </h3>
            <h4 className="text-lightblue">(MBBS, MD ( Radiology )) </h4>
            <div className="border border-lightgreen"></div>
          </div>
        </div>
      </div>

      <div
        className="mx-5 lg:mx-10 mt-10 p-10 rounded-xl mb-9"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <div className="inline-block">
          <h2 className="text-4xl font-semibold text-gray-700 ">
            About Dr. Rohit Singla{" "}
            <div className="border-t border-blue-700 my-2 font-extrabold"></div>
          </h2>
        </div>
        <p className="text-justify">
          Dr. Rishu is a skilled practitioner known for precise diagnostics and
          compassionate approach to patient well - being. She has more than 12
          yrs of experience in Diagnostic radiology and has special interest in
          the field of Oncology imaging, Breast Imaging and Interventions. She
          has previously worked in prestigious institutions such as Rajiv Gandhi
          Cancer Institute & BLK- MAX Delhi. She is the member of various
          national and international radiology societies - IRIA, BISI, ESOI,
          RSNA, SOII.
        </p>
      </div>
    </div>
  );
};

export default Drrishusangal;

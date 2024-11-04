"use client";

import React from "react";
import { PiCaretCircleRightBold } from "react-icons/pi";
import Image from "next/image";
const Drrohitsingla = () => {
  
  const data = [
    {
      original: "/team/dr5.jpg",
      thumbnail: "/team/dr5.jpg",
    },
    {
      original: "/team/dr6.jpg",
      thumbnail: "/team/dr6.jpg",
    },
    {
      original: "/team/dr7.jpg",
      thumbnail: "/team/dr7.jpg",
    },
    {
      original: "/team/dr8.jpg",
      thumbnail: "/team/dr8.jpg",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white">
        <Image
          src="/team/dr5.jpg"
          width={1000}
          height={1000}
          className="w-full lg:px-20 lg:pt-5 pb-5"
          alt="dr-rishu-singal"
        />
        <div className="mx-10 leading-loose lg:mt-10">
          <div>
            <h1 className="text-4xl font-extrabold text-black">
              Dr. Rohit Singla
            </h1>
            <h3 className="text-blue-500 font-semibold text-xl">
              MBBS (AIIMS), MD (AIIMS) <br /> DM Cardiology <br /> Senior
              Consultant Interventional Cardiologist
            </h3>
          </div>
          <div>
            <div className="inline-block">
              <h1 className="text-3xl mt-5 font-semibold">BRIEF PROFILE</h1>
              <div className="border border-lightgreen"></div>
            </div>
            <p className="text-justify dark:text-black text-xl">
              Dr. Rohit Singla is one of the leading interventional cardiologist
              of Delhi with more than 11 years of experience in interventional
              cardiology. Dr. Rohit Singla is an alumnus from AIIMS, New Delhi.
              He received his cardiology training at SMS Medical College,
              Jaipur.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-5 lg:mx-10 px-10 py-4 rounded-xl">
        <p className="text-justify leading-relaxed text-black dark:text-black text-xl">
          Dr Rohit Singla has been performing complex interventional procedures
          for nearly a decade with highly successful outcomes. He is also
          trained in the trans-radial angioplasty and is one of the few doctors
          who perform it regularly.
        </p>

        <p className="text-justify leading-relaxed mt-2 text-black dark:text-black text-xl">
          Dr. Rohit Singla has been involved in academics and research from his
          days at AIIMS. He has more than 15 publications in various national
          and international journals. He is also a reviewer for many cardiology
          journals.
        </p>

        <p className="text-justify leading-relaxed mt-2 text-black dark:text-black text-xl">
          Dr. Rohit Singla is a life member of multiple national and
          international professional organizations in the field of cardiology
          such as SCAI.
        </p>
      </div>

      {/** EDUCATION Section **/}
      <div className="mx-5 lg:mx-10 px-10 rounded-xl">
        <div className="inline-block">
          <h1 className="text-3xl font-semibold">EDUCATION</h1>
          <div className="border border-lightgreen"></div>
        </div>

        <p className="text-justify leading-relaxed mt-2 text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> MBBS: All India Institute of Medical
          Sciences, New Delhi
        </p>

        <p className="text-justify leading-relaxed text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> MD (Medicine): All India Institute of
          Medical Sciences, New Delhi
        </p>

        <p className="text-justify leading-relaxed text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> DM Cardiology: SMS Hospital, Jaipur,
          Rajasthan
        </p>
      </div>

      {/** EXPERIENCE Section **/}
      <div className="mx-5 lg:mx-10 px-10 mt-5 rounded-xl">
        <div className="inline-block">
          <h1 className="text-3xl font-semibold">WORK EXPERIENCE </h1>
          <div className="border border-lightgreen"></div>
        </div>

        <p className="text-justify leading-relaxed mt-2 text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> 2013-2014: Delhi Heart & Lung Institute
        </p>

        <p className="text-justify leading-relaxed text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> 2014-2015: Balaji Action Cancer Hospital
        </p>

        <p className="text-justify leading-relaxed text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> 2016-2018: MAX Super Speciality Hospital,
          Shalimar Bagh
        </p>

        <p className="text-justify leading-relaxed text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> 2018-till date: Bhagwati Hospital, Rohini
          Sec-13, Delhi
        </p>
      </div>

      {/** MEMBERSHIPS Section **/}
      <div className="mx-5 lg:mx-10 px-10 mt-5 rounded-xl">
        <div className="inline-block">
          <h1 className="text-3xl font-semibold">MEMBERSHIPS</h1>
          <div className="border border-lightgreen"></div>
        </div>

        <p className="text-justify leading-relaxed mt-2 text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> Lifetime Member of North Delhi Physician
          Forum
        </p>

        <p className="text-justify leading-relaxed text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> Lifetime Member of Cardiology Society of
          India (CSI)
        </p>

        <p className="text-justify leading-relaxed text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold />
          IMA DNZ
        </p>
      </div>

      {/** FELLOWSHIPS Section **/}
      <div className="mx-5 lg:mx-10 px-10 py-6 rounded-xl">
        <div className="inline-block">
          <h1 className="text-3xl font-semibold"> FELLOWSHIPS </h1>
          <div className="border border-lightgreen"></div>
        </div>

        <p className="text-justify leading-relaxed mt-2 text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> Fellow of the Society for Cardiovascular
          Angiography and Interventions (FSCAI)
        </p>

        <p className="text-justify leading-relaxed text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> Fellow of American College of Cardiology
          (FACC)
        </p>
      </div>
    </div>
  );
};

export default Drrohitsingla;

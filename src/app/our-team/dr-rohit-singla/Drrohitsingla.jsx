"use client";

import React from "react";
import { PiCaretCircleRightBold } from "react-icons/pi";
import Image from "next/image";
const Drrohitsingla = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white">
        <Image
          src="/team/dr5.jpg"
          width={1000}
          height={1000}
          className="w-full lg:px-10 lg:pt-12 pb-5"
          alt="dr-rishu-singal"
        />
        <div className="mx-10 leading-loose lg:mt-14">
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
              <h1 className="text-3xl mt-5 font-semibold dark:text-black">
                BRIEF PROFILE
              </h1>
              <div className="border border-lightgreen"></div>
            </div>
            <p className=" dark:text-black text-xl leading-8">
              Dr. Rohit Singla is one of the leading interventional cardiologist
              of Delhi with more than 11 years of experience in interventional
              cardiology. Dr. Rohit Singla is an alumnus from AIIMS, New Delhi.
              He received his cardiology training at SMS Medical College,
              Jaipur.
            </p>
          </div>
        </div>
      </div>

      <div className="px-10 py-4 rounded-xl">
        <p className="leading-relaxed text-black dark:text-black text-xl">
          Dr Rohit Singla has been performing complex interventional procedures
          for nearly a decade with highly successful outcomes. He is also
          trained in the trans-radial angioplasty and is one of the few doctors
          who perform it regularly.
        </p>

        <p className="leading-relaxed mt-2 text-black dark:text-black text-xl">
          Dr. Rohit Singla has been involved in academics and research from his
          days at AIIMS. He has more than 15 publications in various national
          and international journals. He is also a reviewer for many cardiology
          journals.
        </p>

        <p className="leading-relaxed mt-2 text-black dark:text-black text-xl">
          Dr. Rohit Singla is a life member of multiple national and
          international professional organizations in the field of cardiology
          such as SCAI.
        </p>
      </div>

      {/** EDUCATION Section **/}
      <div className=" ml-10 mr-5 lg:mr-0 rounded-xl pb-6">
        <div className="inline-block">
          <h1 className="text-3xl font-semibold dark:text-black">EDUCATION</h1>
          <div className="border border-lightgreen"></div>
        </div>

        <p className="leading-relaxed mt-2 text-gray-800 flex gap-2 text-xl">
          <span>
            <PiCaretCircleRightBold className="text-xl mt-[7px] lg:mt-[5px]" />
          </span>
          MBBS: All India Institute of Medical Sciences, New Delhi
        </p>

        <p className="leading-relaxed text-gray-800 flex gap-2 text-xl">
          <span>
            <PiCaretCircleRightBold className="text-xl mt-[7px] lg:mt-[5px]" />
          </span>{" "}
          MD (Medicine): All India Institute of Medical Sciences, New Delhi
        </p>

        <p className="leading-relaxed text-gray-800 flex gap-2 text-xl">
          <span>
            <PiCaretCircleRightBold className="text-xl mt-[7px] lg:mt-[5px]" />
          </span>{" "}
          DM Cardiology: SMS Hospital, Jaipur, Rajasthan
        </p>
      </div>

      {/** EXPERIENCE Section **/}
      <div className=" ml-10 mr-5 lg:mr-0 rounded-xl pb-8">
        <div className="inline-block">
          <h1 className="text-3xl font-semibold dark:text-black">
            WORK EXPERIENCE{" "}
          </h1>
          <div className="border border-lightgreen"></div>
        </div>

        <p className="leading-relaxed mt-2 text-gray-800 flex gap-2 text-xl">
          <span>
            <PiCaretCircleRightBold className="text-xl mt-[7px] lg:mt-[5px]" />
          </span>{" "}
          2013-2014: Delhi Heart & Lung Institute
        </p>

        <p className="leading-relaxed text-gray-800 flex gap-2 text-xl">
          <span>
            <PiCaretCircleRightBold className="text-xl mt-[7px] lg:mt-[5px]" />
          </span>{" "}
          2014-2015: Balaji Action Cancer Hospital
        </p>

        <p className="leading-relaxed text-gray-800 flex gap-2 text-xl">
          <span>
            <PiCaretCircleRightBold className="text-xl mt-[7px] lg:mt-[5px]" />
          </span>{" "}
          2016-2018: MAX Super Speciality Hospital, Shalimar Bagh
        </p>

        <p className="leading-relaxed text-gray-800 flex gap-2 text-xl">
          <span>
            <PiCaretCircleRightBold className="text-xl mt-[7px] lg:mt-[5px]" />
          </span>{" "}
          2018-till date: Bhagwati Hospital, Rohini Sec-13, Delhi
        </p>
      </div>

      {/** MEMBERSHIPS Section **/}
      <div className=" ml-10 mr-5 lg:mr-0 rounded-xl pb-8">
        <div className="inline-block">
          <h1 className="text-3xl font-semibold dark:text-black">
            MEMBERSHIPS
          </h1>
          <div className="border border-lightgreen"></div>
        </div>

        <p className="leading-relaxed mt-2 text-gray-800 flex gap-2 text-xl">
          <span>
            <PiCaretCircleRightBold className="text-xl mt-[7px] lg:mt-[5px]" />
          </span>{" "}
          Lifetime Member of North Delhi Physician Forum
        </p>

        <p className="leading-relaxed text-gray-800 flex gap-2 text-xl">
          <span>
            <PiCaretCircleRightBold className="text-xl mt-[7px] lg:mt-[5px]" />
          </span>{" "}
          Lifetime Member of Cardiology Society of India (CSI)
        </p>

        <p className="leading-relaxed text-gray-800 flex gap-2 text-xl">
          <span>
            <PiCaretCircleRightBold className="text-xl mt-[7px] lg:mt-[5px]" />
          </span>
          IMA DNZ
        </p>
      </div>

      {/** FELLOWSHIPS Section **/}
      <div className=" ml-10 mr-5 lg:mr-0 rounded-xl pb-8">
        <div className="inline-block">
          <h1 className="text-3xl font-semibold dark:text-black">
            {" "}
            FELLOWSHIPS{" "}
          </h1>
          <div className="border border-lightgreen"></div>
        </div>

        <p className="leading-relaxed mt-2 text-gray-800 flex gap-2 text-xl">
          <span>
            <PiCaretCircleRightBold className="text-xl mt-[7px] lg:mt-[5px]" />
          </span>{" "}
          Fellow of the Society for Cardiovascular Angiography and Interventions
          (FSCAI)
        </p>

        <p className="leading-relaxed text-gray-800 flex gap-2 text-xl">
          <span>
            <PiCaretCircleRightBold className="text-xl mt-[7px] lg:mt-[5px]" />
          </span>{" "}
          Fellow of American College of Cardiology (FACC)
        </p>
      </div>
    </div>
  );
};

export default Drrohitsingla;

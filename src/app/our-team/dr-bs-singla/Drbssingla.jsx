"use client";

import Image from "next/image";
import React from "react";
import { PiCaretCircleRightBold } from "react-icons/pi";

const Drbssingla = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white">
        <Image
          src="/team/dr1.jpg"
          width={1000}
          height={1000}
          className="w-full lg:px-10 lg:pt-12 pb-5"
          alt="dr-bs-singla"
        />

        <div className="mx-10 leading-loose lg:mt-10">
          <div>
            <h1 className="text-4xl font-extrabold text-black">
              Dr B. S. Singla
            </h1>
            <h3 className="text-blue-500 font-semibold text-lg">
              Senior Consultant Non Invasive Cardiologist
            </h3>
            <h4 className="text-blue-500 text-lg font-semibold">
              MBBS, MD (PGI CHANDIGARH)
            </h4>
          </div>
          <div>
            <div className="inline-block">
              <h1 className="text-3xl mt-5 font-semibold dark:text-black">
                BRIEF PROFILE
              </h1>
              <div className="border border-lightgreen"></div>
            </div>
            <p className="dark:text-black text-xl leading-8">
              Dr. B S Singla is one of the leading non invasive cardiologist of
              Delhi with more than 40 years of experience in cardiology. Dr. B S
              Singla is an alumnus from PGI Chandigarh.
            </p>
            <p className="dark:text-black text-xl leading-8 mt-3">
              He was previously associated with leading hospitals such as Apollo
              Clinics, Chandigarh, Oxford Hospitals Chandigarh and currently
              also working at HOD Ashok Vihar.
            </p>
          </div>
        </div>
      </div>

      <div className="px-10 py-4 rounded-xl">
        <p className="leading-relaxed mt-2 text-black dark:text-black text-xl">
          Dr B S Singla has been performing ECHO, TMT, HOLTER and ABPM for
          nearly four decades with highly accurate results.
        </p>

        <p className="leading-relaxed text-black dark:text-black text-xl">
          Dr. B S SIngla is a life member of multiple national professional
          organizations in the field of cardiology.
        </p>
      </div>

      <div className="ml-10 mr-5 lg:mr-0 rounded-xl mt-4">
        <div>
          <div className="inline-block">
            <h1 className="text-3xl font-semibold dark:text-black">
              EDUCATION
            </h1>
            <div className="border border-lightgreen"></div>
          </div>

          <p className="mt-2 text-gray-800 flex gap-2 text-xl">
            <span className="text-xl mt-[7px] lg:mt-[5px]">
              <PiCaretCircleRightBold />
            </span>
            MBBS: Government Medical College, Patiala
          </p>

          <p className="text-gray-800 flex gap-2 text-xl">
            <span className="text-xl mt-[7px] lg:mt-[5px]">
              <PiCaretCircleRightBold />
            </span>
            MD (Medicine): PGIMER, Chandigarh
          </p>
        </div>
      </div>

      <div className="ml-10 mr-5 lg:mr-0 rounded-xl mt-8">
        <div className="inline-block">
          <h1 className="text-3xl font-semibold dark:text-black">
            WORK EXPERIENCE
          </h1>
          <div className="border border-lightgreen"></div>
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-gray-800 flex gap-2 text-xl">
            <span className="text-xl mt-[7px] lg:mt-[5px]">
              <PiCaretCircleRightBold />
            </span>
            Non Invasive Cardiologist at Apollo Clinic, Chandigarh, Oxford
            Hospital, Chandigarh and PARK Hospital Mohali.
          </p>

          <p className="text-gray-800 flex gap-2 text-xl">
            <span className="text-xl mt-[7px] lg:mt-[5px]">
              <PiCaretCircleRightBold />
            </span>
            Non invasive Cardiologist at HOD Ashok Vihar and Madhu MRI, GTB
            Nagar, Delhi
          </p>
        </div>
      </div>

      {/** MEMBERSHIPS Section **/}
      <div className="ml-10 mr-5 lg:mr-0 rounded-xl py-8">
        <div className="inline-block">
          <h1 className="text-3xl font-semibold dark:text-black">
            MEMBERSHIPS
          </h1>
          <div className="border border-lightgreen"></div>
        </div>

        <p className="mt-2 text-gray-800 flex gap-2 text-xl">
          <span className="text-xl mt-[7px] lg:mt-[5px]">
            <PiCaretCircleRightBold />
          </span>
          Life Member Indian Medical Association
        </p>

        <p className="mt-2 text-gray-800 flex gap-2 text-xl">
          <span className="text-xl mt-[7px] lg:mt-[5px]">
            <PiCaretCircleRightBold />
          </span>
          Life Member IAE Delhi
        </p>

        <p className="mt-2 text-gray-800 flex gap-2 text-xl">
          <span className="text-xl mt-[7px] lg:mt-[5px]">
            <PiCaretCircleRightBold />
          </span>
          Life Member IAE NCR Chapter
        </p>
      </div>

      <div className="ml-10 mr-5 lg:mr-0 rounded-xl">
        <div className="inline-block">
          <h1 className="text-3xl font-semibold dark:text-black">
            FELLOWSHIPS
          </h1>
          <div className="border border-lightgreen"></div>
        </div>

        <div className="mt-2 space-y-2">
          <p className="text-gray-800 flex gap-2 text-xl mb-4">
            <span className="text-xl mt-[7px] lg:mt-[5px]">
              <PiCaretCircleRightBold />
            </span>
            Fellowship in Echocardiography of IAE Delhi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Drbssingla;

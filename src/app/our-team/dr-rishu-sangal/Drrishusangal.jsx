"use client";

import React from "react";
import Image from "next/image";
import { PiCaretCircleRightBold } from "react-icons/pi";

const Drrishusangal = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white">
        <Image
          src="/team/rishumam.jpg"
          width={1000}
          height={1000}
          className="w-full lg:px-20 lg:pt-5 pb-5"
          alt="dr-rishu-singal"
        />
        <div className="mx-10 leading-loose lg:mt-10">
          <div>
            <h1 className="text-4xl font-extrabold text-black">
              Dr Rishu Sangal
            </h1>
            <h3 className="text-blue-500 font-semibold text-lg">
              MBBS, MD (Radiology)
            </h3>
            <h4 className="text-blue-500 text-lg font-semibold">Senior Consultant Radiologist </h4>
            <h4 className="text-blue-500 text-lg font-semibold">
              Special Interests: Oncoradiology, Breast Imaging & Interventions
            </h4>
          </div>
          <div>
            <div className="inline-block">
              <h1 className="text-3xl mt-5 font-semibold">BRIEF PROFILE</h1>
              <div className="border border-lightgreen"></div>
            </div>
            <p className="dark:text-black text-xl">
              Dr. Rishu Sangal is dedicated radiologist and skilled practitioner
              with more than 13 years of experience.{" "}
              <strong>
                {" "}
                She is known for precise diagnostics and compassionate approach
                to patient well - being. She has special interest in the field
                of Oncology imaging, Breast Imaging and Interventions. She has
                previously worked in prestigious institutions such as Rajiv
                Gandhi Cancer Institute & BLK- MAX Delhi.
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-5 lg:mx-10 px-10 py-4 rounded-xl">
        <p className="text-justify leading-relaxed mt-2 text-black dark:text-black text-xl">
          She has been trained in Interventional radiology from Rajiv Gandhi
          Cancer Hospital, New Delhi and attended short training course on
          Vacuum assisted breast biopsy (VABB Masterclass) in Perth, Australia
          in Sep 2019.She has been performing minimally invasive interventional
          procedures for nearly a decade with highly successful outcomes.
        </p>

        <p className="text-justify leading-relaxed mt-2 text-black dark:text-black text-xl">
          She has extensive experience in breast imaging, specializing in
          mammography, digital breast tomosynthesis, contrast enhanced
          mammography, ultrasound, and breast MRI. She performs all kinds of
          breast interventions such as image guided breast biopsy, metallic
          marker placements, J wire insertions and vacuum assisted breast
          biopsy.
        </p>

        <p className="text-justify leading-relaxed mt-2 text-black dark:text-black text-xl">
          She has been involved in academics and research and has more than 30
          publications in various national and international indexed journals
          including original research papers.
        </p>
      </div>

      <div className="mx-5 lg:mx-10 px-10 rounded-xl mt-4">
        <div className="">
          <div className="inline-block">
            <h1 className="text-3xl font-semibold">EDUCATION</h1>
            <div className="border border-lightgreen"></div>
          </div>

          <p className="text-justify leading-relaxed mt-2 text-gray-800 flex gap-2 items-center text-xl">
            <PiCaretCircleRightBold /> MBBS: LLRM Medical College, Meerut, UP
          </p>

          <p className="text-justify leading-relaxed text-gray-800 flex gap-2 items-center text-xl">
            <PiCaretCircleRightBold /> MD (Radiology): LLRM Medical College,
            Meerut, UP
          </p>
        </div>
      </div>

      <div className="mx-5 lg:mx-10 px-10 rounded-xl mt-8">
        <div className="inline-block">
          <h1 className="text-3xl font-semibold">WORK EXPERIENCE</h1>
          <div className="border border-lightgreen"></div>
        </div>

        <p className="text-justify leading-relaxed mt-2 text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> <strong> July 2011-March 2012: </strong>
          Department of Radiology,{" "}
          <strong> Bhagwan Mahavir Cancer Hospital, Jaipur,</strong> Rajasthan,
          India
        </p>

        <p className="text-justify leading-relaxed text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> <strong> April 2012- July 2013:</strong>{" "}
          Department of Radiology,
          <strong> Fortis-Escorts Hospital, Jaipur, </strong>
          Rajasthan, India
        </p>

        <p className="text-justify leading-relaxed text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> <strong> August 2013-April 2015: </strong>{" "}
          Saral Diagnostic Centre, Pitampura, New Delhi, India
        </p>

        <p className="text-justify leading-relaxed text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> <strong> June 2016- May 2017: </strong>{" "}
          Department of Radiology, Rajiv Gandhi Cancer Institute, New Delhi,
          India
        </p>

        <p className="text-justify leading-relaxed text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold />{" "}
          <strong> June 2017- till June 2020: </strong> Department of Radiology,
          Rajiv Gandhi Cancer Institute, New Delhi, India
        </p>

        <p className="text-justify leading-relaxed text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold />{" "}
          <strong> July 2020- till Sep 2023: </strong> Department of Radiology,
          BLK MAX Hospital, New Delhi, India.
        </p>

        <p className="text-justify leading-relaxed text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> <strong> Sep 2023 till date: </strong>{" "}
          Director & Consultant Radiology, Health Vista Diagnostics, Delhi.
        </p>

        <p className="text-justify leading-relaxed text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> <strong> June 2024 till date: </strong>{" "}
          Senior Consultant Radiology, Andromeda Cancer Hospital, Kundli,
          Sonipat, Haryana.
        </p>
      </div>

      {/** MEMBERSHIPS Section **/}
      <div className="mx-5 lg:mx-10 px-10 rounded-xl py-8">
        <div className="inline-block">
          <h1 className="text-3xl font-semibold"> MEMBERSHIPS</h1>
          <div className="border border-lightgreen"></div>
        </div>

        <p className="text-justify leading-relaxed mt-2 text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> Lifetime Member- Indian Radiological &
          Imaging Association (IRIA)
        </p>

        <p className="text-justify leading-relaxed mt-2 text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> Lifetime Member- Breast Imaging Society of
          India (BISI)
        </p>

        <p className="text-justify leading-relaxed mt-2 text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> Member- European Society of Oncology
          Imaging (ESOI)
        </p>

        <p className="text-justify leading-relaxed mt-2 text-gray-800 flex gap-2 items-center text-xl">
          <PiCaretCircleRightBold /> Lifetime Member- Society of Oncologic
          Imaging India (SOII)
        </p>
      </div>
    </div>
  );
};

export default Drrishusangal;

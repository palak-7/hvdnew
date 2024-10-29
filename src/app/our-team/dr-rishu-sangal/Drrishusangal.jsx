"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { MdCastForEducation } from "react-icons/md";
import { FaPenFancy } from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";
// import { MdFolderSpecial } from "react-icons/md";
const Drrishusangal = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

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
            <h1 className="text-4xl font-extrabold text-white">
              Dr Rishu Sangal
            </h1>
            <h3 className="text-white font-semibold">MBBS, MD (Radiology)</h3>
            <h4 className="text-white">Senior Consultant Radiologist </h4>
            <h4 className="text-white">
              Special Interests: Oncoradiology, Breast Imaging & Interventions
            </h4>
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
            About Dr. Rishu Sangal{" "}
            <div className="border-t border-blue-700 my-2 font-extrabold"></div>
          </h2>
        </div>
        <p className="text-justify">
          Dr. Rishu Sangal is dedicated radiologist and skilled practitioner
          with more than 13 years of experience.{" "}
          <strong>
            {" "}
            She is known for precise diagnostics and compassionate approach to
            patient well - being. She has special interest in the field of
            Oncology imaging, Breast Imaging and Interventions. She has
            previously worked in prestigious institutions such as Rajiv Gandhi
            Cancer Institute & BLK- MAX Delhi.
          </strong>
        </p>

        {isExpanded && (
          <>
            <p className="text-justify leading-relaxed mt-2 text-black dark:text-black">
              She has been trained in Interventional radiology from Rajiv Gandhi
              Cancer Hospital, New Delhi and attended short training course on
              Vacuum assisted breast biopsy (VABB Masterclass) in Perth,
              Australia in Sep 2019.She has been performing minimally invasive
              interventional procedures for nearly a decade with highly
              successful outcomes.
            </p>

            <p className="text-justify leading-relaxed mt-2 text-black dark:text-black">
              She has extensive experience in breast imaging, specializing in
              mammography, digital breast tomosynthesis, contrast enhanced
              mammography, ultrasound, and breast MRI. She performs all kinds of
              breast interventions such as image guided breast biopsy, metallic
              marker placements, J wire insertions and vacuum assisted breast
              biopsy.
            </p>

            <p className="text-justify leading-relaxed mt-2 text-black dark:text-black">
              She has been involved in academics and research and has more than
              30 publications in various national and international indexed
              journals including original research papers.
            </p>
          </>
        )}

        <button
          onClick={toggleReadMore}
          className="mt-4 text-white bg-blue-800 px-6 py-2 rounded-3xl hover:bg-blue-700 transition-all duration-300"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      <div className="relative lg:mx-10  bg-white shadow-xl ring-1 ring-gray-900/5 rounded-md sm:px-6 px-4 mb-10 mt-10">
        <div className="w-full divide-y divide-neutral-200">
          {/** EDUCATION Section **/}
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium dark:text-black">
                <span className="flex gap-1 items-center">
                  {" "}
                  <MdCastForEducation className="text-lightgreen font-extrabold" />{" "}
                  EDUCATION
                </span>
                <span className="transition-transform duration-200 group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="group-open:animate-fadeIn mt-3 text-neutral-600 transition-all duration-300 ease-in-out">
                <ul className="list-disc list-inside dark:text-black">
                  <li>MBBS: LLRM Medical College, Meerut, UP</li>
                  <li>MD (Radiology): LLRM Medical College, Meerut, UP</li>
                </ul>
              </div>
            </details>
          </div>

          {/** WORK EXPERIENCE Section **/}
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium dark:text-black">
                <span className="flex gap-1 items-center">
                  {" "}
                  <FaPenFancy className="text-lightgreen font-extrabold" /> WORK
                  WORK EXPERIENCE
                </span>
                <span className="transition-transform duration-200 group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="group-open:animate-fadeIn mt-3 text-neutral-600 transition-all duration-300 ease-in-out">
                <ul className="list-disc list-inside dark:text-black">
                  <li>
                    {" "}
                    <strong> July 2011-March 2012: </strong>Department of
                    Radiology,{" "}
                    <strong> Bhagwan Mahavir Cancer Hospital, Jaipur,</strong>{" "}
                    Rajasthan, India
                  </li>

                  <li>
                    <strong> April 2012- July 2013:</strong> Department of
                    Radiology,
                    <strong> Fortis-Escorts Hospital, Jaipur, </strong>
                    Rajasthan, India
                  </li>
                  <li>
                    <strong> August 2013-April 2015: </strong> Saral Diagnostic
                    Centre, Pitampura, New Delhi, India
                  </li>
                  <li>
                    <strong> June 2016- May 2017: </strong> Department of
                    Radiology, Rajiv Gandhi Cancer Institute, New Delhi, India
                  </li>

                  <li>
                    <strong> June 2017- till June 2020: </strong> Department of
                    Radiology, Rajiv Gandhi Cancer Institute, New Delhi, India
                  </li>
                  <li>
                    <strong> July 2020- till Sep 2023: </strong> Department of
                    Radiology, BLK MAX Hospital, New Delhi, India.
                  </li>
                  <li>
                    <strong> Sep 2023 till date: </strong> Director & Consultant
                    Radiology, Health Vista Diagnostics, Delhi.
                  </li>
                  <li>
                    <strong> June 2024 till date: </strong> Senior Consultant
                    Radiology, Andromeda Cancer Hospital, Kundli, Sonipat,
                    Haryana.
                  </li>
                </ul>
              </div>
            </details>
          </div>

          {/** MEMBERSHIPS Section **/}
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium dark:text-black">
                <span className="flex gap-1 items-center">
                  {" "}
                  <MdCardMembership className="text-lightgreen font-extrabold" />{" "}
                  MEMBERSHIPS
                </span>
                <span className="transition-transform duration-200 group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="group-open:animate-fadeIn mt-3 text-neutral-600 transition-all duration-300 ease-in-out">
                <ul className="list-disc list-inside dark:text-black">
                  <li>
                    Lifetime Member- Indian Radiological & Imaging Association
                    (IRIA)
                  </li>
                  <li>
                    Lifetime Member- Breast Imaging Society of India (BISI)
                  </li>
                  <li>Member- European Society of Oncology Imaging (ESOI)</li>
                  <li>
                    Lifetime Member- Society of Oncologic Imaging India (SOII)
                  </li>
                </ul>
              </div>
            </details>
          </div>

          {/** FELLOWSHIPS Section **/}
          {/* <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium dark:text-black">
                <span className="flex gap-1 items-center">
                  {" "}
                  <MdFolderSpecial className="text-lightgreen font-extrabold" />{" "}
                  FELLOWSHIPS
                </span>
                <span className="transition-transform duration-200 group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="group-open:animate-fadeIn mt-3 text-neutral-600 transition-all duration-300 ease-in-out">
                <ul className="list-disc list-inside dark:text-black">
                  <li>
                    Fellow of the Society for Cardiovascular Angiography and
                    Interventions (FSCAI)
                  </li>
                  <li>Fellow of American College of Cardiology (FACC)</li>
                </ul>
              </div>
            </details>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Drrishusangal;

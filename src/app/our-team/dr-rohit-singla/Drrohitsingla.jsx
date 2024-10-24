"use client";

import React from "react";
import ImageGallery from "react-image-gallery";
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
      <div className="lg:grid grid-cols-2 lg:mx-20 lg:mt-10">
        <Image
          src="/team/dr5.jpg"
          width={1000}
          height={1000}
          className="w-full"
          alt="dr-rohit-singla"
        />
        <div className="mx-10 lg:mt-0 my-10 leading-loose">
          <div>
            <h1 className="text-4xl font-extrabold text-primary">
              Dr. Rohit Singla
            </h1>
            <h3 className="text-primary font-semibold leading-relaxed">
              MBBS (AIIMS), MD (AIIMS) <br /> DM Cardiology <br /> Senior
              Consultant Interventional Cardiologist
            </h3>

            <div className="border border-lightgreen"></div>

            <p className="text-justify leading-relaxed">
              Dr. Rohit Singla is one of the leading interventional cardiologist
              of Delhi with more than 11 years of experience in interventional
              cardiology. Dr. Rohit Singla is an alumnus from AIIMS, New Delhi.
              He received his cardiology training at SMS Medical College,
              Jaipur.
            </p>

            <p className="text-justify leading-relaxed mt-2">
              Dr Rohit Singla has been performing complex interventional
              procedures for nearly a decade with highly successful outcomes. He
              is also trained in the trans-radial angioplasty and is one of the
              few doctors who perform it regularly.
            </p>

            <p className="text-justify leading-relaxed mt-2">
              Dr. RohitS ingla has been involved in academics and research from
              his days at AIIMS. He has more than 15 publications in various
              national and international journals. He is also a reviewer for
              many cardiology journals.
            </p>

            <p className="text-justify leading-relaxed mt-2">
              Dr. Rohit Singla is a life member of multiple national and
              international professional organizations in the field of
              cardiology such as SCAI.
            </p>
          </div>
        </div>
      </div>

      <div className="relative lg:mx-10  bg-white shadow-xl ring-1 ring-gray-900/5 rounded-md sm:px-6 px-4 mb-10">
        <div className="w-full divide-y divide-neutral-200">
          {/** EDUCATION Section **/}
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>EDUCATION</span>
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
                <ul className="list-disc list-inside">
                  <li>
                    MBBS: All India Institute of Medical Sciences, New Delhi
                  </li>
                  <li>
                    MD (Medicine): All India Institute of Medical Sciences, New
                    Delhi
                  </li>
                  <li>DM Cardiology: SMS Hospital, Jaipur, Rajasthan</li>
                </ul>
              </div>
            </details>
          </div>

          {/** WORK EXPERIENCE Section **/}
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>WORK EXPERIENCE</span>
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
                <ul className="list-disc list-inside">
                  <li>2013-2014: Delhi Heart & Lung Institute</li>
                  <li>2014-2015: Balaji Action Cancer Hospital</li>
                  <li>
                    2016-2018: MAX Super Speciality Hospital, Shalimar Bagh
                  </li>
                  <li>
                    2018-till date: Bhagwati Hospital, Rohini Sec-13, Delhi
                  </li>
                </ul>
              </div>
            </details>
          </div>

          {/** MEMBERSHIPS Section **/}
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>MEMBERSHIPS</span>
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
                <ul className="list-disc list-inside">
                  <li>Lifetime Member of North Delhi Physician Forum</li>
                  <li>Lifetime Member of Cardiology Society of India (CSI)</li>
                  <li>IMA DNZ</li>
                </ul>
              </div>
            </details>
          </div>

          {/** FELLOWSHIPS Section **/}
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>FELLOWSHIPS</span>
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
                <ul className="list-disc list-inside">
                  <li>
                    Fellow of the Society for Cardiovascular Angiography and
                    Interventions (FSCAI)
                  </li>
                  <li>Fellow of American College of Cardiology (FACC)</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drrohitsingla;

"use client";

import React from "react";
import Image from "next/image";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Success = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <GrNext color="black" />,
    prevArrow: <GrPrevious color="black" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };
  return (
    <div className="relative">
      <Image
        src="/success/about.png"
        width={1000}
        height={1000}
        className="w-full"
      />
      <div className="bg-white absolute inset-0 opacity-80"></div>
      <div className="grid grid-cols-8 absolute inset-0">
        <div className="col-span-3 bg-white">
          <div className="mx-10">
            <h1 className="font-extrabold text-3xl text-primary mb-10 pt-10">
              Success Stories
            </h1>
            <Slider {...settings}>
              <div
                style={{
                  boxShadow:
                    "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                className="flex flex-col max-w-md align-center justify-between border border-solid border-gray-200 bg-white dark:bg-gray-800 rounded-xl"
              >
                <div className="flex flex-col px-6 pt-8 mb-10 space-y-5">
                  <div className="flex justify-center ">
                    <svg
                      width="36"
                      height="32"
                      viewBox="0 0 24 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-A400 text-bluelightest fill-current"
                    >
                      <path
                        d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                        fill="current"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="font-bold text-center text-primary">
                    Timely Diagnosis and Intervention
                  </h2>
                  <p
                    className="body-medium m-0 dark:text-gray-200"
                    style={{ hyphens: "auto" }}
                  >
                    A middle-aged patient came to Health Vista Diagnostics with
                    unexplained abdominal pain. Our advanced imaging technology
                    quickly identified a rare vascular condition. Thanks to our
                    inhouse interventional radiology services, we were able to
                    perform a minimally invasive procedure, preventing a
                    potentially life-threatening complication and ensuring a
                    swift recovery.
                  </p>
                </div>
                <div className=" border-8 border-bluelightest mx-8 my-7"></div>
              </div>
              <div
                style={{
                  boxShadow:
                    "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                className="flex flex-col max-w-md align-center justify-between border border-solid border-gray-200 bg-white dark:bg-gray-800 rounded-xl"
              >
                <div className="flex flex-col px-6 pt-8 mb-10 space-y-5">
                  <div className="flex justify-center ">
                    <svg
                      width="36"
                      height="32"
                      viewBox="0 0 24 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-A400 text-bluelightest fill-current"
                    >
                      <path
                        d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                        fill="current"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="font-bold text-center text-primary">
                    Diagnostic Imaging and Biopsy for Suspicious Breast Mass and
                    Axillary Node
                  </h2>
                  <p
                    className="body-medium m-0 dark:text-gray-200"
                    style={{ hyphens: "auto" }}
                  >
                    56 yr old female presented with breast lump for 2 months. It
                    was painless. She had another palpable lesion in left
                    axilla. Her ultrasound breast and mammography suggested
                    suspicious for malignancy BIRADS 4c with suspicious nodes.
                    She was advised biopsy from breast mass and fnac from node.
                    We did both under ultrasound guidance. The images depict
                    precise placement of needle within the mass and lymph node.
                  </p>
                </div>
                <div className=" border-8 border-bluelightest mx-8 my-7"></div>
              </div>
            </Slider>
          </div>
          <div className="border-r-4 border-bluelightest"></div>
        </div>
      </div>
    </div>
  );
};

export default Success;

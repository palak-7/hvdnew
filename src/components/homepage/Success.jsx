"use client";

import React from "react";
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
    <div className="">
      <div className="grid grid-cols-4">
        <div className="">
          <h1 className="font-extrabold text-3xl text-primary text-center pt-10">
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
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-A400 dark:text-gray-600 fill-current"
                >
                  <path
                    d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                    fill="current"
                  ></path>
                </svg>
                <p
                  className="body-medium m-0 dark:text-gray-200"
                  style={{ hyphens: "auto" }}
                >
                  These are high-quality courses. Trust me. I own around 10 and
                  the price is worth it for the content quality.{" "}
                  <a href="https://twitter.com/EducativeInc?ref_src=twsrc%5Etfw">
                    @EducativeInc
                  </a>{" "}
                  came at the right time in my career. I'm understanding topics
                  better than with any book or online video tutorial I've done.
                  Truly made for developers. Thanks{" "}
                  <a href="https://t.co/EeKruv5hxM">https://t.co/EeKruv5hxM</a>
                </p>
              </div>
              <div className="flex space-x-2 bg-gray-50 dark:bg-gray-900/60 dark:text-gray-200 px-6 pt-6 pb-5 rounded-b-xl">
                <div className="flex flex-col justify-center">
                  <p className="heading-six m-0">Anthony Walker</p>
                  <p className="body-small m-0 mt-1">@_webarchitect_</p>
                </div>
              </div>
            </div>
            <div
              style={{
                boxShadow:
                  "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              className="flex flex-col max-w-md align-center justify-between border border-solid border-gray-200 bg-white dark:bg-gray-800 rounded-xl"
            >
              <div className="flex flex-col px-6 pt-8 mb-10 space-y-5">
                <div className="-translate-y-1/2">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-A400 dark:text-gray-600 fill-current"
                  >
                    <path
                      d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                      fill="current"
                    ></path>
                  </svg>
                </div>
                <p
                  className="body-medium m-0 dark:text-gray-200"
                  style={{ hyphens: "auto" }}
                >
                  A middle-aged patient came to Health Vista Diagnostics with
                  unexplained abdominal pain. Our advanced imaging technology
                  quickly identified a rare vascular condition. Thanks to our
                  inhouse interventional radiology services, we were able to
                  perform a minimally invasive procedure, preventing a
                  potentially life-threatening complication and ensuring a swift
                  recovery.
                </p>
              </div>
              <div className="flex space-x-2 bg-gray-50 dark:bg-gray-900/60 dark:text-gray-200 px-6 pt-6 pb-5 rounded-b-xl">
                <div className="flex flex-col justify-center">
                  <p className="heading-six m-0">Anthony Walker</p>
                  <p className="body-small m-0 mt-1">@_webarchitect_</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="border-4 border-primary"></div>
      </div>
    </div>
  );
};

export default Success;

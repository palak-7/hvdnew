"use client";
import React from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";

import Link from "next/link";
import Slider from "react-slick";
const UpcomingEvent = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
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
    <div>
      <div className="text-center font-semibold text-primary p-10">
        <h1 className="text-3xl">Upcoming Events & Health Workshops</h1>
        <h3 className="text-xl pt-3">
          Join Us for Informative and Engaging Health Session
        </h3>
      </div>

      <div className="p-14">
        <Slider {...settings}>
          <Link href="/">
            <Link
              href="/"
              className="flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="events/workshops.jpeg"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <p className="mb-2 text-xl font-bold tracking-tight dark:text-white text-primary">
                  Health & Wellness Workshop
                </p>
                <p className="mb-3 font-normal dark:text-gray-400 flex gap-2">
                  <SlCalender className="text-xl text-primary font-bold" />
                  <span className="font-medium">
                    {" "}
                    August 15, 2024, 9:00 AM 4:00 PM{" "}
                  </span>
                </p>

                <p className="mb-3 font-normal dark:text-gray-400 flex gap-2">
                  <IoLocationSharp className="text-xl text-primary font-bold" />
                  <span className="font-medium">
                    {" "}
                    Diagnostic Center Main Hall{" "}
                  </span>
                </p>
              </div>
            </Link>
          </Link>

          <Link href="/">
            <Link
              href="/"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="events/diabetes.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white text-primary">
                  Free Diabetes Screening Day
                </h5>
                <p className="mb-3 font-normal dark:text-gray-400 flex gap-2">
                  <SlCalender className="text-xl text-primary font-bold" />
                  <span className="font-medium">
                    {" "}
                    August 15, 2024, 9:00 AM 4:00 PM{" "}
                  </span>
                </p>

                <p className="mb-3 font-normal dark:text-gray-400 flex gap-2">
                  <IoLocationSharp className="text-xl text-primary font-bold" />
                  <span className="font-medium">
                    {" "}
                    Diagnostic Center Main Hall{" "}
                  </span>
                </p>
              </div>
            </Link>
          </Link>

          <Link href="/">
            <Link
              href="/"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="events/diabetes.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </Link>
          </Link>
        </Slider>

        <div className="grid grid-cols-12">
          <div className="col-start-6 col-span-2">
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
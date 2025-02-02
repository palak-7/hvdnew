"use client";
import React from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
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
      <div className="text-center text-primary p-10">
        <h1 className="text-3xl font-extrabold">
          Upcoming Events & Health Workshops
        </h1>
        <h3 className="text-xl pt-3 font-semibold">
          Join Us for Informative and Engaging Health Session
        </h3>
      </div>

      <div className="p-10">
        <Slider {...settings} className="lg:pl-10">
          <Link href="/">
            <Link
              href="/"
              className="flex flex-col items-center bg-white rounded-3xl md:flex-row md:max-w-xl shadow-md dark:border-gray-700 h-60 dark:bg-white"
            >
              <Image
                width={1000}
                height={1000}
                className="object-cover w-full rounded-t-lg md:w-60 md:rounded-none md:rounded-s-lg h-60"
                src="/events/health-checkup.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <p className="mb-3 text-xl font-semibold tracking-tight text-primary">
                  health check up camp for health and fitness enthusiasts at
                  Anytime fitness
                </p>
                <p className="mb-3 font-normal dark:text-gray-400 flex gap-2">
                  <SlCalender className="text-xl text-primary font-bold mt-[3px]" />
                  <span className="font-medium opacity-70 dark:text-gray-900">
                    December 16, 2024, 9:00 AM 4:00 PM
                  </span>
                </p>

                <p className="mb-3 font-normal dark:text-gray-400 flex gap-2">
                  <IoLocationSharp className="text-xl text-primary font-bold mt-[3px]" />
                  <span className="font-medium opacity-70 dark:text-gray-900">
                    {" "}
                    Shakti Vihar, Pitampura on 16 December
                  </span>
                </p>
              </div>
            </Link>
          </Link>

          <Link href="/">
            <Link
              href="/"
              className="flex flex-col items-center bg-white rounded-3xl shadow-md md:flex-row md:max-w-xl   h-60 dark:bg-white"
            >
              <Image
                width={1000}
                height={1000}
                className="object-cover w-full rounded-t-2xl md:h-auto md:w-60 md:rounded-none md:rounded-s-lg h-60"
                src="/events/diabetes.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal mb-20">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-primary">
                  Another health check up camp
                </h5>
                <p className="mb-3 font-normal dark:text-gray-400 flex gap-2">
                  <SlCalender className="text-xl text-primary font-bold mt-[3px]" />
                  <span className="font-medium opacity-70 dark:text-gray-900">
                    December 22, 2024, 9:00 AM 4:00 PM
                  </span>
                </p>

                <p className="mb-3 font-normal dark:text-gray-400 flex gap-2">
                  <IoLocationSharp className="text-xl text-primary font-bold mt-[3px]" />
                  <span className="font-medium opacity-70 dark:text-gray-900">
                    BW Shalimar bagh
                  </span>
                </p>
              </div>
            </Link>
          </Link>
        </Slider>

        <div className="text-center mt-10 lg:mt-0">
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 lg:mt-10"
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;

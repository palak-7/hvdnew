"use client";
import React from "react";
import { story } from "@/data/success";
import { GrPrevious, GrNext } from "react-icons/gr";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Success = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <GrNext aria-label="Next slide" />,
    prevArrow: <GrPrevious aria-label="Previous slide" />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className="pb-9">
      <div className="bg-skyblue dark:text-black">
        <div className="lg:grid grid-cols-12 mx-3 lg:mx-28 flex flex-col-reverse">
          <div className="col-start-1 col-span-5 py-5 px-10 text-center items-center md:mt-14 mt-0">
            <h1 className="text-lightblue text-3xl font-extrabold mb-2">
              Success Stories
            </h1>

            <Slider {...settings}>
              {story.map((s) => (
                <div
                  key={s.id}
                  className="flex flex-col max-w-md align-center border border-gray-200 bg-white rounded-xl shadow-md"
                >
                  <div className="flex flex-col px-6 pt-8 mb-10 space-y-5">
                    <div className="flex justify-center">
                      <svg
                        width="36"
                        height="32"
                        fill="none"
                        className="text-gray-A400 text-bluelightest fill-current"
                      >
                        <path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z" />
                      </svg>
                    </div>
                    <h2 className="font-bold text-center text-primary">
                      {s.name}
                    </h2>
                    <p className="text-sm dark:text-black line-clamp-3">
                      {s.content}
                    </p>
                  </div>
                  <div className="border-8 border-bluelightest mx-8 my-7"></div>

                  <div className="flex justify-center pb-5">
                    <Link
                      href={`/successStories/${s.id}`}
                      className="bg-lightgreen py-2 text-white px-4 rounded-md"
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-start-7 mt-5 lg:mt-14 col-span-5 relative">
            <Image
              src="/success/happypatient.jpg"
              width={350}
              height={450}
              className="w-full rounded-bl-[30%] rounded-tr-[30%] p-2 pb-14"
              alt="success"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;

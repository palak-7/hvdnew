"use client";

import React from "react";
import { servicesdata } from "@/data/serviceData";
import Image from "next/image";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const Services = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
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
    <div className="bg-skyblue mt-[50px] overflow-x-clip">
      <div className="bg-skyblue">
        {/* Added container with bg-skyblue */}
        <h1 className="font-extrabold text-3xl pt-16 text-primary text-center">
          Our Services include
        </h1>
        <div className="mt-10">
          <Slider {...settings}>
            {servicesdata.map((s) => (
              <div key={s.id} className="">
                <div className="bg-white lg:mx-10 mx-2 h-[430px] mb-10 rounded-br-[30%] rounded-tl-[30%] border shadow-lg">
                  <Image
                    width={1000}
                    height={1000}
                    className="w-full h-[250px] object-cover rounded-tl-[30%]"
                    src={`/services/${s.image}`}
                  />
                  <div className="p-10">
                    <h2 className="text-lg text-primary font-bold">{s.name}</h2>
                    <p className="text-gray-700 line-clamp-3">{s.short_desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/services"
            className="bg-lightgreen text-white rounded-md py-2 px-9 mb-10"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

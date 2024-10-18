"use client";

import React from "react";
import Image from "next/image";
import { GrPrevious, GrNext } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };

  const services = [
    {
      title: "Dedicated Female Radiologist",
      description: "Female radiologist for ultrasound scans.",
      img: "/success/services.png",
      alt: "services",
    },
    {
      title: "Cardiology Care",
      description: "Comprehensive cardiology services available from 8 AM to 8 PM.",
      img: "/success/heart.png",
      alt: "heart",
    },
    {
      title: "Expert Breast Radiology",
      description: "Subspecialty experience in breast radiology with over 13 years of expertise.",
      img: "/success/radiology.png",
      alt: "radiology",
    },
    {
      title: "Advanced Obstetric Ultrasound",
      description: "Obstetric ultrasound 3D/4D/5D.",
      img: "/success/o-ultrasound.png",
      alt: "obstetric ultrasound",
    },
    {
      title: "Weekly Ultrasound Procedures",
      description: "Ultrasound-guided procedures available 7 days a week.",
      img: "/success/ultrasound.png",
      alt: "ultrasound procedures",
    },
  ];
const story = [
  {
    id: "1",
    name: "Timely Diagnosis and Intervention",
    content: "A middle-aged patient came to Health Vista Diagnostics with unexplained abdominal pain. Our advanced imaging technology quickly identified a rare vascular condition. Thanks to our inhouse interventional radiology services, we were able to perform a minimally invasive procedure, preventing a potentially life-threatening complication and ensuring a swift recovery."
  },
  {
    id: "2",
    name: "Diagnostic Imaging and Biopsy for Suspicious Breast Mass and Axillary Node",
    content: "56 yr old female presented with breast lump for 2 months. It was painless. She had another palpable lesion in left axilla. Her ultrasound breast and mammography suggested suspicious for malignancy BIRADS 4c with suspicious nodes. She was advised biopsy from breast mass and fnac from node. We did both under ultrasound guidance. The images depict precise placement of needle within the mass and lymph node."
  }
]
  return (
    <div className="lg:relative z-20">
      <Image
        src="/success/about.png"
        width={1000}
        height={1000}
        className="w-full lg:h-[800px] hidden lg:block"
        alt="about"
        priority
      />
      <div className="bg-white lg:absolute inset-0 opacity-60"></div>
      <div className="lg:grid grid-cols-8 lg:absolute inset-0">
        {/* Left Section */}
        <div className="col-span-3 bg-white border-r-bluelightest border-r-4 z-30">
          <div className="mx-10">
            <h1 className="font-extrabold text-3xl text-primary mb-10 pt-10">Success Stories</h1>
            <Slider {...settings}>
              {story.map((s) => (
                <div key={s.id} className="flex flex-col max-w-md align-center justify-between border border-gray-200 bg-white rounded-xl shadow-md">
                  <div className="flex flex-col px-6 pt-8 mb-10 space-y-5">
                    <div className="flex justify-center">
                      <svg width="36" height="32" fill="none" className="text-gray-A400 text-bluelightest fill-current">
                        <path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z" />
                      </svg>
                    </div>
                    <h2 className="font-bold text-center text-primary">{s.name}</h2>
                    <p className="text-sm dark:text-gray-200">
                      {s.content}
                    </p>
                  </div>
                  <div className="border-8 border-bluelightest mx-8 my-7"></div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/" className="bg-lightgreen py-2 text-white px-4 rounded-md">Know More</Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-5 z-10">
          <h1 className="font-extrabold text-3xl text-primary mb-10 pt-10 text-center">Why choose HVD ?</h1>
          <div>
            {services.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-4 mb-7 justify-around bg-white p-3 rounded-lg lg:mx-20 mx-3 shadow-2xl"
              >
                <div className="flex items-center">
                  <Image
                    src={service.img}
                    width={80}
                    height={80}
                    className="mr-10 object-contain"
                    alt={service.alt}
                    loading="lazy"
                  />
                </div>
                <div className="col-span-3 flex items-center lg:ml-0 ml-3">
                  <div>
                    <h2 className="text-primary font-bold">{service.title}</h2>
                    <p className="text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;

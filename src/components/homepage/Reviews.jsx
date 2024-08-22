"use client";

import React from "react";
import { LiaStarSolid } from "react-icons/lia";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
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
    <div className="lg:mx-10 overflow-x-clip">
      <Slider {...settings}>
        <div className="flex flex-col justify-between p-5">
          <div className="text-lightgreen flex gap-2">
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <div className="text-gray-600 text-sm ml-2">5 stars</div>
          </div>

          <p className="line-clamp-3 my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
            I have visited health vista for my mother in law check ups. My
            experience was very good as all the staff and the doctor was very
            coperative and polite. Dr Rohit singla is the one of the best
            cardiologist in delhi. VERY MUCH SATISFIED ... would highly
            recommend health vista...
          </p>

          <div className="flex flex-col justify-end mt-6">
            <div>
              <p className="leading-relaxed tracking-wide text-gray-600">
                Anchal Sangal
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5">
          <div className="text-lightgreen flex gap-2">
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <div className="text-gray-600 text-sm ml-2">5 stars</div>
          </div>

          <p className="line-clamp-3 my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
            As soon as I entered this centre, the vibes I felt were really
            positive. The staff was really polite and friendly. Dr. Rohit
            Singla&apos;s prescribed medicines recovered me very quickly. The
            test results here were quite accurate. I would really recommend
            visiting this centre to everyone.
          </p>

          <div className="flex flex-col justify-end mt-6">
            <div>
              <p className="leading-relaxed tracking-wide text-gray-600">
                Jyotika Gupta
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5">
          <div className="text-lightgreen flex gap-2">
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <div className="text-gray-600 text-sm ml-2">5 stars</div>
          </div>

          <p className="line-clamp-3 my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
            I highly recommend health vista Diagnostic for their professionalism
            and accuracy. The staff made me feel comfortable during the tests,
            and the results were delivered in a timely manner. A reliable choice
            for health vista diagnostics.
          </p>

          <div className="flex flex-col justify-end mt-6">
            <div>
              <p className="leading-relaxed tracking-wide text-gray-600">
                Ritu Buttan
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5">
          <div className="text-lightgreen flex gap-2">
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <div className="text-gray-600 text-sm ml-2">5 stars</div>
          </div>

          <p className="line-clamp-3 my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
            Excellent centre with state of art equipment. Love the way Dr. Rishu
            speaks to her patients, with warmth and compassion. And of course
            her expertise in interventions is par excellence!
          </p>

          <div className="flex flex-col justify-end mt-6">
            <div>
              <p className="leading-relaxed tracking-wide text-gray-600">
                Abinav Vats
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Reviews;

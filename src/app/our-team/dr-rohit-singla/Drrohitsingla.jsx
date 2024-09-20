"use client";

import React from "react";
import ImageGallery from "react-image-gallery";
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
        <ImageGallery
          items={data}
          thumbnailPosition="bottom"
          showNav={false}
          showPlayButton={false}
          showFullscreenButton={false}
        />
        <div className="mx-10 lg:mt-0 my-10 leading-loose">
          <div>
            <h1 className="text-4xl font-extrabold text-primary">
              Dr Rohit Singla
            </h1>
            <h3 className="text-primary font-semibold">
              Director & Senior Consultant
            </h3>
            <h4 className="text-lightblue">
              (Interventional Cardiology MBBS, MD (AIIMS) DM (CARDIOLOGY)){" "}
            </h4>
            <div className="border border-lightgreen"></div>

            <p className="text-justify">
              Dr Rohit Singla is dedicated cardiologist with a wealth of
              experience and a passion for patient centered care. He is an
              alumnus of AIIMS, Delhi, a premier medical Institute in India. He
              has more than 10 years of experience in interventional cardiology.
              He has performed more than 5000 percutaneous angioplasty
              procedures and has proven track record in managing complex cases.
              He actively engages in ongoing medical education to provide the
              highest standard of care to the patients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drrohitsingla;

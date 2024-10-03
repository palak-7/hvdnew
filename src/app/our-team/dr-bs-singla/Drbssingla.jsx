"use client";

import Image from "next/image";
import React from "react";
import ImageGallery from "react-image-gallery";
const Drbssingla = () => {
  const data = [
    {
      original: "/team/dr1.jpg",
      thumbnail: "/team/dr1.jpg",
    },
    {
      original: "/team/dr2.jpg",
      thumbnail: "/team/dr2.jpg",
    },
    {
      original: "/team/dr3.jpg",
      thumbnail: "/team/dr3.jpg",
    },
    {
      original: "/team/dr4.jpg",
      thumbnail: "/team/dr4.jpg",
    },
  ];
  return (
    <div>
      <div className="lg:grid grid-cols-2 lg:mx-20 lg:mt-10">
        <Image
          src="/team/dr1.jpg"
          width={1000}
          height={1000}
          className="w-full"
          alt="dr-bs-singla"
        />
        {/* <ImageGallery
          items={data}
          thumbnailPosition="bottom"
          showNav={false}
          showPlayButton={false}
          showFullscreenButton={false}
        /> */}
        <div className="lg:mt-0 my-10 mx-10 leading-loose">
          <div>
            <h1 className="text-4xl font-extrabold text-primary">
              Dr B. S. Singla
            </h1>
            <h3 className="text-primary font-semibold">
              Consultant Physician & Non Invasive Cardiologist
            </h3>
            <h4 className="text-lightblue">
              ( MBBS, MD (Medicine), FIAE (Echocardiography)){" "}
            </h4>
            <div className="border border-lightgreen"></div>

            <p className="text-justify">
              Dr B.S.Singla is an eminent physician and detail oriented doctor
              with expertise in a range of medical disciplines, from acute care
              to chronic disease management. He has vast experience of over 40
              years and is an alumnus of prestigious medical institute PGI
              Chandigarh. He is an avid reader and keeps updating himself with
              latest advances in the field of medicine and actively engages in
              ongoing medical education to provide the highest standard of care
              to patients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drbssingla;

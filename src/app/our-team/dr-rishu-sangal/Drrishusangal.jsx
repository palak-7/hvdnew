"use client";

import React from "react";
import ImageGallery from "react-image-gallery";
const Drrishusangal = () => {
  const data = [
    {
      original: "/team/dr10.png",
      thumbnail: "/team/dr10.png",
    },
    {
      original: "/team/dr9.png",
      thumbnail: "/team/dr9.png",
    },
    {
      original: "/team/dr11.jpg",
      thumbnail: "/team/dr11.jpg",
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
        <div className="mx-10 leading-loose lg:mt-0 my-10">
          <div>
            <h1 className="text-4xl font-extrabold text-primary">
              Dr Rishu Sangal
            </h1>
            <h3 className="text-primary font-semibold">
              Director & Senior Consultant Radiology
            </h3>
            <h4 className="text-lightblue">(MBBS, MD ( Radiology )) </h4>
            <div className="border border-lightgreen"></div>

            <p className="text-justify">
              Dr. Rishu is a skilled practitioner known for precise diagnostics
              and compassionate approach to patient well - being. She has more
              than 12 yrs of experience in Diagnostic radiology and has special
              interest in the field of Oncology imaging, Breast Imaging and
              Interventions. She has previously worked in prestigious
              institutions such as Rajiv Gandhi Cancer Institute & BLK- MAX
              Delhi. She is the member of various national and international
              radiology societies - IRIA, BISI, ESOI, RSNA, SOII.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drrishusangal;

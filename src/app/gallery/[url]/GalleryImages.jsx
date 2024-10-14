import React from "react";
import Image from "next/image";
import { allImages } from "@/data/gallery";
const GalleryImages = ({ url }) => {
  let findImages = allImages.find((a) => a.categroy === url);
  const arrayImages = findImages.images;

  return (
    <div className="mx-4 lg:mx-20 my-10">
      <h1 className="text-center font-extrabold text-5xl my-4 text-primary underline">
        <span className="uppercase">{findImages.categroy[0]}</span>
        {findImages.categroy.slice(1)} Images
      </h1>
      <div className="grid lg:grid-cols-3 gap-3">
        {arrayImages.map((i, index) => (
          <div key={index}>
            <Image
              src={`/gallery/${i}`}
              width={1000}
              height={1000}
              alt={findImages}
              className="h-[300px] object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryImages;

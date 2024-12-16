"use client";

import React from "react";
import Image from "next/image";
import { allImages } from "@/data/gallery";
import { useState } from "react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
const GalleryImages = ({ url }) => {
  let findImages = allImages.find((a) => a.categroy === url);
  const arrayImages = findImages.images;

  const bread = [
    { id: "1", name: "Home", url: "/", next: true },
    { id: "2", name: "Gallery", url: "/gallery", next: false },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className="mx-4 lg:mx-20 my-10">
      <Breadcrumbs bread={bread} />
      <h1 className="text-center font-extrabold text-5xl my-4 text-primary underline">
        <span className="uppercase">{findImages.categroy[0]}</span>
        {findImages.categroy.slice(1)}
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
        {arrayImages.map((i, index) => (
          <div key={index}>
            {i.endsWith(".mp4") ? ( // Check if the file is a video
              <video
                style={{ width: "100%", height: "450px", borderRadius: "10px" }}
                controls
              >
                <source src={`/gallery/${i}`} type="video/mp4" />
              </video>
            ) : (
              // Render an image if it's not a video
              <Image
                src={`/gallery/${i}`}
                width={1000}
                height={1000}
                alt="Gallery Image"
                className="cursor-pointer h-[300px] object-cover rounded-md"
                onClick={() => openImage(`/gallery/${i}`)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected"
              width={750}
              height={750}
              className="max-w-[90vw] max-h-[90vh] object-contain" // Set max width/height and maintain aspect ratio
            />

            <button
              className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full dark:bg-black"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryImages;

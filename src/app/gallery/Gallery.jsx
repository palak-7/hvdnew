import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCameraOutline } from "react-icons/io5";
import { FaImages } from "react-icons/fa";
import { allImages } from "@/data/gallery";

const Gallery = () => {
  return (
    <div>
      <div className="lg:mx-32 my-5 mx-4">
        <div>
          <h1 className="text-primary text-6xl font-extrabold text-center py-7">
            Our Gallery
          </h1>
          <div className="lg:grid grid-cols-4 grid-rows-4 gap-3">
            {/* First Image with "All images" text covering full width */}
            <Link
              href="/gallery/all"
              className="relative hover:scale-[1.02] duration-300 col-span-3 row-span-3"
            >
              <Image
                src="/gallery/interior/1.jpg"
                width={1000}
                height={1000}
                className="h-full object-cover rounded-md"
                alt="gallery images"
              />
              <div className="text-xl font-bold absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white py-3 rounded-b-md">
                <span className="ml-3 flex">
                  <IoCameraOutline size={20} className="font-bold mt-1 mr-1" />
                  View All images
                </span>
              </div>
            </Link>

            {/* Map through the images, but skip the category "all" */}
            {allImages
              .filter((d) => d.categroy !== "all") // Skip "all" category
              .map((d, index) => (
                <div key={index} className="lg:mt-0 mt-4">
                  <Link
                    href={d.url}
                    className="relative hover:scale-105 duration-300"
                  >
                    <Image
                      src={`/gallery${d.image}`} // Assuming you want the first image from the category
                      width={1000}
                      height={1000}
                      className="rounded-md h-full object-cover"
                      alt="gallery images"
                    />
                    <div className="text-xl font-bold absolute inset-0 w-full bg-black bg-opacity-60 text-white py-3 rounded-b-md">
                      <div className="flex h-full items-center justify-center">
                        <div className="ml-3">
                          <div className="flex justify-center">
                            <FaImages
                              className="border-2 border-white rounded-full p-1"
                              size={40}
                            />
                          </div>
                          <div>
                            {d.categroy.charAt(0).toUpperCase() +
                              d.categroy.slice(1)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

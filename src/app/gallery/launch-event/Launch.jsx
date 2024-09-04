import Image from "next/image";
import React from "react";

const Launch = () => {
  const images = [
    {
      id: 1,
      name: "one.jpg",
    },
    {
      id: 2,
      name: "two.jpg",
    },
    {
      id: 3,
      name: "three.jpg",
    },
    {
      id: 4,
      name: "four.jpg",
    },
    {
      id: 5,
      name: "five.jpg",
    },
    {
      id: 6,
      name: "six.jpg",
    },
    {
      id: 7,
      name: "seven.jpg",
    },
    {
      id: 8,
      name: "eight.jpg",
    },
    {
      id: 9,
      name: "nine.jpg",
    },
    {
      id: 10,
      name: "ten.jpg",
    },
    {
      id: 12,
      name: "twelve.jpg",
    },
    {
      id: 13,
      name: "thirteen.jpg",
    },
  ];
  return (
    <div className="m-10">
      <div className="flex justify-center">
        <h1 className="font-bold text-5xl text-center rounded-xl bg-primary p-3 bg-gradient-to-r from-white to-lightgreen/90">
          Launch Event Images
        </h1>
      </div>
      <div className="lg:grid grid-cols-4">
        {images?.map((i) => (
          <div key={i.id} className="mt-6 flex justify-center">
            <Image
              src={`/gallery/launch_photos/${i.name}`}
              width={1000}
              height={1000}
              className="w-[300px] h-[300px] rounded-lg object-cover hover:scale-105"
              alt={i.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Launch;

import Image from "next/image";
import React from "react";

const Center = () => {
  const images = [
    {
      id: 1,
      name: "1.jpg",
    },
    {
      id: 2,
      name: "2.jpg",
    },
    {
      id: 3,
      name: "3.png",
    },
    {
      id: 4,
      name: "4.jpg",
    },
    {
      id: 5,
      name: "5.jpg",
    },
    {
      id: 6,
      name: "6.jpg",
    },
    {
      id: 7,
      name: "7.jpg",
    },
    {
      id: 8,
      name: "8.jpg",
    },
    {
      id: 9,
      name: "9.jpg",
    },
    {
      id: 10,
      name: "10.png",
    },
    {
      id: 11,
      name: "11.jpeg",
    },
    {
      id: 12,
      name: "12.png",
    },
    {
      id: 13,
      name: "13.png",
    },
    {
      id: 14,
      name: "14.png",
    },
    {
      id: 15,
      name: "15.jpeg",
    },
    {
      id: 16,
      name: "16.png",
    },
    {
      id: 17,
      name: "17.jpeg",
    },
  ];
  return (
    <div className="m-10">
      <div className="flex justify-center">
        <h1 className="font-bold text-5xl text-center rounded-xl bg-primary p-3 bg-gradient-to-r from-white to-lightgreen/90">
          Center Images
        </h1>
      </div>
      <div className="grid grid-cols-4">
        {images?.map((i) => (
          <div key={i.id} className="mt-6 flex justify-center">
            <Image
              src={`/gallery/center/${i.name}`}
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

export default Center;

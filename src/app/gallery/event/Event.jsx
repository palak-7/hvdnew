import Image from "next/image";
import React from "react";

const Event = () => {
  const images = [
    {
      id: 1,
      name: "1.jpeg",
    },
    {
      id: 2,
      name: "2.png",
    },
    {
      id: 3,
      name: "3.png",
    },
    {
      id: 4,
      name: "4.png",
    },
    {
      id: 5,
      name: "5.jpeg",
    },
    {
      id: 6,
      name: "6.png",
    },
    {
      id: 7,
      name: "7.jpeg",
    },
    {
      id: 8,
      name: "8.jpeg",
    },
    {
      id: 9,
      name: "9.png",
    },
  ];
  return (
    <div className="m-10">
      <div className="flex justify-center">
        <h1 className="font-bold text-5xl text-center rounded-xl bg-primary p-3 bg-gradient-to-r from-white to-lightgreen/90">
          Event Images
        </h1>
      </div>
      <div className="grid grid-cols-4">
        {images?.map((i) => (
          <div key={i.id} className="mt-6 flex justify-center">
            <Image
              src={`/gallery/event/${i.name}`}
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

export default Event;

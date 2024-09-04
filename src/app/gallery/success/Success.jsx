import Image from "next/image";
import React from "react";

const Success = () => {
  const images = [
    {
      id: 1,
      name: "1.jpeg",
    },
    {
      id: 2,
      name: "2.jpeg",
    },
    {
      id: 3,
      name: "3.jpeg",
    },
  ];
  return (
    <div className="m-10">
      <div className="flex justify-center">
        <h1 className="font-bold text-5xl text-center rounded-xl bg-primary p-3 bg-gradient-to-r from-white to-lightgreen/90">
          Success Stories
        </h1>
      </div>
      <div className="grid grid-cols-4">
        {images?.map((i) => (
          <div key={i.id} className="mt-6 flex justify-center">
            <Image
              src={`/gallery/success-story/${i.name}`}
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

export default Success;

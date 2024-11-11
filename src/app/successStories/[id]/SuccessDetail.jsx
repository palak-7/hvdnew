import React from "react";
import { story } from "@/data/success";
import Image from "next/image";
import Link from "next/link";
const SuccessDetail = ({ id }) => {
  const obj = story.find((item) => item.id === id);
  return (
    <div>
      <div className="grid grid-cols-5">
        <div className="col-start-2 col-span-3">
          <h1 className="font-extrabold text-3xl text-primary mb-10 pt-10 text-center">
            Success Stories
          </h1>
        </div>
      </div>

      <div className="px-10 pb-10">
        <div
          className="shadow-md rounded-lg bg-skyblue"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <div className="md:grid grid-cols-12 gap-4">
            {/* Image Section */}
            <div className="col-start-2 col-span-3 justify-center md:items-center">
              
              <Image
                src={obj.img}
                alt="successImage"
                className="p-4 rounded-3xl"
                width={350}
                height={250}
              />
            </div>

            {/* Text Section */}
            <div className="col-span-6 flex flex-col justify-center p-4">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                {obj.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-800">
                {obj.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessDetail;

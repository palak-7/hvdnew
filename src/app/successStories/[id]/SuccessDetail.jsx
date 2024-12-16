import React from "react";
import { story } from "@/data/success";

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
            <div className="col-start-2 col-span-3 flex justify-center items-center p-4">
              <video controls width="100%" height="auto" className="rounded">
                <source src={obj.vid} type="video/mp4" />
              </video>
            </div>

            <div className="col-span-6 flex flex-col justify-center p-4">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                <div className="inline-block">
                  {obj.name}
                  <div className="border border-blue-700"></div>
                </div>
              </h5>
              <p className="font-normal text-gray-900 dark:text-gray-800 mt-2">
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

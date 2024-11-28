import React from "react";
import { servicesdata } from "@/data/serviceData";
import Head from "@/components/common/head/Head";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
const Color = () => {
  return (
    <div>
      <Head service={servicesdata[2]} />

      {/* ques 2 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 my-10 lg:ml-[-50%] lg:h-[400px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue dark:text-black">
          <div className="lg:flex items-center justify-center h-full">
            <div className="lg:grid grid-cols-12 items-center flex flex-col-reverse lg:0">
              <div className="col-span-4 col-start-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  What is Color Doppler?
                </h1>

                <p className="text-lg mt-2 flex">
                  Color Doppler is an advanced ultrasound imaging technique used
                  to visualize blood flow in the body. It combines traditional
                  ultrasound imaging with Doppler ultrasound, using color coding
                  to display the direction and speed of blood flow. This
                  technique helps doctors assess blood circulation in arteries
                  and veins, detect blockages, identify abnormalities, and
                  monitor conditions affecting blood vessels. Commonly, Color
                  Doppler is used for examining blood flow in the heart,
                  kidneys, arms, legs, and neck arteries.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/colordoppler/colordoppler.jpg"
                  className="rounded-md lg:-ml-10"
                  width={1000}
                  height={1000}
                  alt="color-doppler"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[570px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/colordoppler/colordoppler2.jpg"
                  className="rounded-md lg:ml-10 lg:mt-10"
                  width={1000}
                  height={1000}
                  alt="color-doppler"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for a Color Doppler:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Follow Fasting Instructions:
                    </span>
                    For certain Doppler exams, especially abdominal scans, you
                    may be asked to avoid eating or drinking for 6-8 hours
                    beforehand.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Wear Comfortable Clothing:
                    </span>
                    Wear loose-fitting clothes, as it makes it easier to access
                    the area being examined. You might also be asked to wear a
                    gown.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Inform About Medications:
                    </span>
                    Share any medications or supplements you’re taking with your
                    doctor; some may affect blood flow and influence the
                    results.
                  </div>
                </p>

                <p className="text-lg flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold"> Stay Relaxed:</span>
                    Arrive a little early to relax before the exam. Stress or
                    anxiety can sometimes affect blood flow readings.
                  </div>
                </p>
              </div>
            </div>

            <div className="lg:grid grid-cols-12 -mt-4">
              <div className="col-start-4 col-span-6">
                <p className="text-lg flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Hydrate if Required:</span>
                    For certain exams, you may need to have a full bladder.
                    Follow any specific hydration instructions provided by your
                    healthcare provider.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5 lg:pb-0 pb-3">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Smoking Beforehand:
                    </span>
                    Smoking can constrict blood vessels, which might impact the
                    accuracy of the results.
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;

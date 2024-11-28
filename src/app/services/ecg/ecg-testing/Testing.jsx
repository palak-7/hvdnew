import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
const Testing = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/services/ecg.png`}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
          alt="ecg-testing"
        />
        <div className="bg-lightblue absolute inset-0 opacity-70"></div>
        <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
          <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
            ECG Testing
          </div>
          <div className="row-start-5 flex justify-center">
            <Link
              href={"/contact"}
              className="bg-lightgreen shadow-white text-xl duration-300 hover:scale-105 shadow-md text-white rounded-md flex items-center px-9"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* ques 2 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 my-10 lg:ml-[-50%] lg:h-[400px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue dark:text-black">
          <div className="lg:flex items-center justify-center h-full">
            <div className="lg:grid grid-cols-12 items-center flex flex-col-reverse lg:0">
              <div className="col-span-4 col-start-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  What is ECG Testing?
                </h1>

                <p className="text-lg mt-2 flex">
                  An Electrocardiogram (ECG or EKG) is a medical test that
                  records the electrical activity of the heart. It helps detect
                  heart issues like arrhythmias, heart attacks, and other
                  cardiac conditions by showing the heart's rhythm and
                  electrical impulses on a graph. ECG testing is a non-invasive,
                  quick, and painless procedure commonly used as a part of
                  routine health checks, especially for individuals with heart
                  disease risk factors.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/ecg.png"
                  className="rounded-md lg:-ml-10"
                  width={1000}
                  height={1000}
                  alt="ecg-testing"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[520px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/ecg-testing2.jpg"
                  className="rounded-md lg:ml-10 lg:mt-10"
                  width={1000}
                  height={1000}
                  alt="ecg-testing"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for ECG Testing:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Caffeinated Beverages:{" "}
                    </span>
                    Avoid coffee, tea, and energy drinks before the test, as
                    caffeine can increase heart rate and affect the results.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Do Not Apply Lotions or Creams:{" "}
                    </span>
                    Refrain from applying lotions, creams, or oils to your chest
                    area on the day of the test, as they can interfere with the
                    electrodes' ability to adhere to your skin.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Wear Comfortable, Loose Clothing:{" "}
                    </span>
                    This makes it easier to place electrodes on the chest, arms,
                    and legs. You might also be asked to change into a gown.
                  </div>
                </p>

                <p className="text-lg flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Inform About Medications:{" "}
                    </span>
                    Let the technician know if you are on any heart-related
                    medications, as they can influence heart rhythm and may be
                    noted for interpretation.
                  </div>
                </p>

                <p className="text-lg flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Stay Relaxed: </span>
                    Try to remain calm during the test; anxiety can cause
                    changes in heart rate, which might affect the test results.
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:grid grid-cols-12 bg-skyblue mb-4">
        <div className="col-span-12 md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-4 py-4">
          <div
            className="relative"
            style={{ paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full p-5 lg:p-0 rounded-2xl"
              src="https://www.youtube.com/embed/qfmWoOkKHB8?si=SwstEAdAprTmTH5d"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing;

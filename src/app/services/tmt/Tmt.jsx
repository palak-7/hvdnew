import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
const Tmt = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/services/tmt.png`}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
          alt="tmt"
        />
        <div className="bg-lightblue absolute inset-0 opacity-70"></div>
        <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
          <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
            TMT
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
                  What is TMT?
                </h1>

                <p className="text-lg mt-2 flex">
                  TMT (Treadmill Test), also known as a stress test, is a
                  diagnostic procedure used to assess how well the heart
                  functions during physical exertion. During the test, the
                  patient walks on a treadmill while their heart rate, blood
                  pressure, and ECG (electrocardiogram) are continuously
                  monitored. The treadmill gradually increases in speed and
                  incline, simulating exercise to stress the heart. TMT is
                  commonly used to detect coronary artery disease, abnormal
                  heart rhythms, and other cardiovascular conditions. It helps
                  doctors evaluate how well the heart responds to physical
                  stress, providing valuable information about heart health and
                  the risk of heart-related problems.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/tmt.png"
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  alt="tmt"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[780px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/tmt1.jpg"
                  className="rounded-md mt-10"
                  width={1000}
                  height={1000}
                  alt="tmt"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for TMT:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                    Wear Comfortable Clothing and Footwear:{" "}
                    </span>
                    Choose loose, comfortable clothes and wear proper athletic
                    shoes or sneakers suitable for walking. This will help you
                    move comfortably during the test.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                    Avoid Eating Heavy Meals Before the Test:{" "}
                    </span>
                    It is recommended to avoid eating a heavy meal 2-3 hours
                    before the test to prevent discomfort while exercising. A
                    light snack is okay, but avoid greasy or spicy foods.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Stay Hydrated: </span>
                    Drink water before the test, but avoid excessive consumption
                    right before the procedure to avoid feeling bloated.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                    Refrain from Caffeine and Alcohol:{" "}
                    </span>
                    Avoid consuming caffeine (coffee, tea, energy drinks) or
                    alcohol at least 24 hours before the test, as these can
                    affect your heart rate and blood pressure, potentially
                    influencing the test results.
                  </div>
                </p>
              </div>
            </div>

            <div className="lg:grid grid-cols-12 lg:-mt-11">
              <div className="col-start-4 col-span-6">
                <p className="text-lg flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                    Inform Your Doctor About Medications:{" "}
                    </span>
                    Inform your healthcare provider about any medications you're
                    currently taking, especially heart or blood pressure
                    medications. Some medications may need to be temporarily
                    adjusted before the test.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Avoid Smoking: </span>
                    Refrain from smoking for at least 2 hours before the test,
                    as nicotine can affect your heart rate and blood pressure.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                    Be Prepared for Mild Discomfort:{" "}
                    </span>
                    The treadmill test may make you feel fatigued, out of
                    breath, or slightly dizzy due to the increased physical
                    activity.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                    Arrive Early and Relax:{" "}
                    </span>
                    Arrive at the testing center a few minutes early to complete
                    any required paperwork and allow yourself time to relax
                    before the test begins.
                  </div>
                </p>

                <p className="text-lg mt-5 font-semibold px-5">
                  TMT is a safe and effective method to evaluate heart health
                  and identify potential cardiovascular problems by monitoring
                  how the heart performs under stress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tmt;

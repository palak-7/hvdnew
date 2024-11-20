import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
const Exercise = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/services/`}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
          alt="excercise"
        />
        <div className="bg-lightblue absolute inset-0 opacity-70"></div>
        <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
          <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
            Exercise Stress ECHO
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
                  What is Exercise Stress Echo?
                </h1>

                <p className="text-lg mt-2 flex">
                  An Exercise Stress Echo is a diagnostic test that combines an
                  echocardiogram (ultrasound of the heart) with exercise. It is
                  used to assess how your heart performs under physical stress,
                  typically while walking on a treadmill or pedaling a
                  stationary bike. The test helps detect heart conditions like
                  coronary artery disease, heart valve problems, and abnormal
                  heart rhythms that may not be apparent when the heart is at
                  rest. During the test, your heart is monitored with ultrasound
                  images while you exercise, and the images are compared before
                  and after physical activity to evaluate heart function and
                  detect any abnormalities.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/"
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  alt="excercise"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[850px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className=" h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/"
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  alt="excercise"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for Exercise Stress Echo:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Wear Comfortable Clothing:
                    </span>
                    Choose loose, comfortable clothing and shoes that are
                    suitable for exercise, such as sneakers, as you will be
                    required to walk on a treadmill or pedal a stationary bike.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Eating Heavy Meals Before the Test:
                    </span>
                    It’s generally recommended to avoid large meals 3-4 hours
                    before the test. Eating a heavy meal can make you feel
                    uncomfortable while exercising.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Limit Caffeine and Alcohol:
                    </span>
                    Avoid consuming caffeinated beverages and alcohol for 24
                    hours before the test, as they can affect your heart rate
                    and potentially interfere with the test results.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Inform Your Doctor About Medications:
                    </span>
                    Notify your healthcare provider about any medications you're
                    taking, especially those related to the heart or blood
                    pressure. Some medications may need to be adjusted before
                    the test.
                  </div>
                </p>
              </div>
            </div>

            <div className="lg:grid grid-cols-12">
              <div className="col-start-4 col-span-6">
                <p className="text-lg flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Stay Hydrated:</span>
                    Drink plenty of water before the test, but avoid drinking
                    large amounts right before you begin the exercise, as it
                    could make you feel bloated during the test.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Wearing Lotions or Oils:
                    </span>
                    On the day of the test, avoid applying lotions, oils, or
                    creams to your chest area. These can interfere with the
                    placement of the electrodes or ultrasound gel.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Arrive Early and Relax:
                    </span>
                    Arrive at the clinic or hospital early to complete any
                    necessary paperwork and give yourself time to relax. Stress
                    or anxiety may affect your heart rate and influence the test
                    results.
                  </div>
                </p>

                <p className="ml-10 font-semibold text-xl mt-5">
                  An Exercise Stress Echo is a valuable tool for evaluating
                  heart health and detecting potential heart problems. The test
                  is generally safe and provides vital insights into how your
                  heart functions during physical activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;

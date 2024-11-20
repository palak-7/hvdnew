import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
const Dobutamine = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/services/`}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
          alt="dobutamine-stress-echo"
        />
        <div className="bg-lightblue absolute inset-0 opacity-70"></div>
        <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
          <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
            Dobutamine Stress Echo
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
                  What is Dobutamine Stress Echo?
                </h1>

                <p className="text-lg mt-2 flex">
                  A Dobutamine Stress Echo is a type of stress test used to
                  assess the heart's function by simulating the effects of
                  exercise. Unlike traditional exercise stress tests, which
                  involve physical activity, a Dobutamine Stress Echo uses a
                  medication called dobutamine to increase your heart rate and
                  mimic the effect of exercise on the heart. During the test,
                  the patient is given dobutamine through an IV, which causes
                  the heart to beat faster and harder. Meanwhile,
                  echocardiography (ultrasound of the heart) is used to capture
                  real-time images of the heart's structure and function. This
                  test is commonly used for patients who are unable to exercise
                  due to medical conditions or physical limitations. It helps
                  detect coronary artery disease, heart valve issues, and other
                  cardiac conditions.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/"
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  alt="dobutamine-stress-echo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[850px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/"
                  className="rounded-md mt-10"
                  width={1000}
                  height={1000}
                  alt="dobutamine-stress-echo"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for Dobutamine Stress Echo:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Wear Comfortable Clothing:{" "}
                    </span>
                    Wear loose, comfortable clothing, and avoid tight-fitting
                    garments around your chest area. You may be asked to change
                    into a gown for easy access to the heart for imaging.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      {" "}
                      Avoid Eating or Drinking Before the Test:{" "}
                    </span>
                    It is generally recommended to avoid eating or drinking for
                    3-4 hours before the test to prevent discomfort or
                    complications during the procedure.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Inform Your Doctor About Medications:{" "}
                    </span>
                    Tell your healthcare provider about any medications you are
                    currently taking, especially heart medications, blood
                    pressure medications, or any other drugs that might affect
                    your heart's response to dobutamine.
                  </div>
                </p>

                <p className="text-lg flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold"> Avoid Caffeine: </span>
                    Refrain from consuming caffeine (coffee, tea, energy drinks)
                    for at least 24 hours before the test, as caffeine can
                    interfere with the test by affecting heart rate and blood
                    pressure.
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
                    <span className="font-semibold">
                      Be Prepared for a Contrast Injection:{" "}
                    </span>
                    In some cases, contrast agents may be used to enhance the
                    images from the ultrasound. Inform your doctor if you have
                    any allergies, particularly to contrast dyes or medications.
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
                    Arrive at the clinic or hospital early to complete any
                    necessary paperwork. Being calm and relaxed before the test
                    will help ensure accurate results.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Stay Still During the Test:{" "}
                    </span>
                    During the procedure, it’s essential to remain still while
                    the images are being taken to provide clear and accurate
                    results.
                  </div>
                </p>

                <p className="text-xl flex px-5 font-semibold mt-5">
                  A Dobutamine Stress Echo is a safe and effective way to
                  evaluate heart function under stress, providing valuable
                  insights into heart health and the diagnosis of heart disease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dobutamine;

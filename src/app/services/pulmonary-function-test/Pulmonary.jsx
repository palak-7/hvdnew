import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
const Pulmonary = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/services/pulmunory.png`}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
          alt="prp"
        />
        <div className="bg-lightblue absolute inset-0 opacity-70"></div>
        <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
          <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
            Pulmonary Function Test (PFT)
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
                  What is a Pulmonary Function Test (PFT)?
                </h1>

                <p className="text-lg mt-2 flex">
                  A Pulmonary Function Test (PFT) is a set of non-invasive tests
                  used to measure how well your lungs are functioning. These
                  tests assess lung volume, capacity, rates of flow, and gas
                  exchange. PFTs help diagnose lung diseases such as asthma,
                  chronic obstructive pulmonary disease (COPD), and pulmonary
                  fibrosis, and evaluate the impact of certain treatments or
                  surgeries on lung function.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/pulmunory.png"
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  alt="prp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[680px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/pulmunory1.jpg"
                  className="rounded-md mt-10"
                  width={1000}
                  height={1000}
                  alt="prp"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for a Pulmonary Function Test:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Consultation with Your Doctor:{" "}
                    </span>
                    Discuss your medical history and any current medications
                    with your healthcare provider. Certain medications, like
                    bronchodilators, may need to be adjusted before the test.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Avoid Smoking: </span>
                    Do not smoke for at least 4-6 hours before the test. Smoking
                    can affect the results by temporarily reducing lung
                    function.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Avoid Heavy Meals: </span>
                    It’s best to avoid eating large meals right before the test
                    as a full stomach can interfere with your ability to take
                    deep breaths.
                  </div>
                </p>

                <p className="text-lg flex mt-2">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Wear Comfortable Clothing:{" "}
                    </span>
                    Choose loose, comfortable clothing that does not restrict
                    your breathing. Tight-fitting clothes can make it difficult
                    to breathe deeply during the test.
                  </div>
                </p>
              </div>
            </div>

            <div className="lg:grid grid-cols-12 lg:-mt-11 -mt-3">
              <div className="col-start-4 col-span-6">
                <p className="text-lg flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Stop Using Certain Inhalers:{" "}
                    </span>
                    If you use inhalers, your doctor may ask you to stop using
                    them for a period of time before the test. This is to ensure
                    accurate results, as some inhalers can temporarily improve
                    lung function.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Rest Before the Test:{" "}
                    </span>
                    Try to avoid vigorous physical activity on the day of the
                    test. This ensures your body is rested and ready for
                    accurate measurements.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Bring a List of Medications:{" "}
                    </span>
                    Bring a list of any medications you are currently taking, as
                    these may affect your test results. This includes
                    prescription, over-the-counter medications, and supplements.
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
              src="https://www.youtube.com/embed/p9jmlCDOf40?si=_xPLnqsYTuU6kkuv"
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

export default Pulmonary;

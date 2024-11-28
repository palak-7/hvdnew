import React from "react";
import Image from "next/image";
import { servicesdata } from "@/data/serviceData";
import Head from "@/components/common/head/Head";
import { MdArrowRightAlt } from "react-icons/md";
const Emg = () => {
  return (
    <div>
      <Head service={servicesdata[15]} />

      {/* ques 2 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 my-10 lg:ml-[-50%] lg:h-[400px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue dark:text-black">
          <div className="lg:flex items-center justify-center h-full">
            <div className="lg:grid grid-cols-12 items-center flex flex-col-reverse lg:0">
              <div className="col-span-4 col-start-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  What is Electromyography (EMG)?
                </h1>

                <p className="text-lg mt-2 flex">
                  Electromyography (EMG) is a diagnostic procedure used to
                  assess the health and functionality of muscles and the nerve
                  cells that control them. This technique involves the
                  measurement of electrical activity produced by skeletal
                  muscles, providing valuable insights into muscle disorders,
                  nerve disorders, and conditions affecting the connection
                  between nerves and muscles. EMG can help diagnose conditions
                  such as muscular dystrophy, myasthenia gravis, carpal tunnel
                  syndrome, peripheral neuropathy, and radiculopathies.
                </p>

                <p className="text-lg mt-2 flex">
                  During an EMG, a needle electrode is inserted through the skin
                  into the muscle tissue. This electrode detects electrical
                  activity while the muscle is at rest and during contraction.
                  The recorded electrical signals are then analyzed by a
                  healthcare provider to determine the presence of
                  abnormalities.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/emg.png"
                  className="rounded-md lg:-ml-10"
                  width={1000}
                  height={1000}
                  alt="emg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[620px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/emg2.jpg"
                  className="rounded-md lg:ml-10 lg:mt-10"
                  width={1000}
                  height={1000}
                  alt="emg"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for Electromyography (EMG):
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Clothing: </span>
                    Wear comfortable, loose-fitting clothing to your
                    appointment. This will make it easier for the healthcare
                    provider to access the areas where electrodes need to be
                    placed.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Lotions and Oils:{" "}
                    </span>
                    Do not apply any lotions, oils, or creams on your skin on
                    the day of the test. These substances can interfere with the
                    electrode's ability to adhere to the skin and obtain
                    accurate readings.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Medication Disclosure:{" "}
                    </span>
                    Inform your doctor about all the medications you are taking,
                    including over-the-counter drugs and supplements. Some
                    medications can affect muscle and nerve function and may
                    need to be adjusted or temporarily discontinued before the
                    test.
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
                    <span className="font-semibold"> Medical History: </span>
                    Be prepared to discuss your medical history with the
                    healthcare provider. This includes any known nerve or muscle
                    conditions, recent surgeries, and other relevant health
                    issues. Providing complete information will help the doctor
                    interpret the test results accurately.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5 lg:pb-0 pb-3">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold"> Relaxation: </span>
                    Try to stay relaxed before and during the procedure. Stress
                    and anxiety can cause muscle tension, which might affect the
                    test results.
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
              src="https://www.youtube.com/embed/GalU9SWiYic?si=vzssMYOkTfWCO4qG"
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

export default Emg;

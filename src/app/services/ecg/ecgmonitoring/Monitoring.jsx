import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
const Monitoring = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/services/ecgmonitoring1.jpg`}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
          alt="ecg-monitoring"
        />
        <div className="bg-lightblue absolute inset-0 opacity-70"></div>
        <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
          <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
            ECG Monitoring (At Home)
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
                  What is ECG Monitoring (At Home)?
                </h1>

                <p className="text-lg mt-2 flex">
                  ECG monitoring at home is a way to continuously track the
                  heart’s electrical activity while you go about your daily
                  activities. This monitoring typically involves wearing a
                  small, portable ECG device like a Holter monitor or event
                  monitor, which records heart rhythms over an extended period,
                  usually 24-48 hours, or even longer. Home ECG monitoring is
                  beneficial for identifying intermittent heart issues, such as
                  arrhythmias, palpitations, or dizziness, that may not appear
                  in a brief, in-clinic ECG test. The recorded data is later
                  reviewed by healthcare providers to assess heart health and
                  detect potential problems.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/ecgmonitoring1.jpg"
                  className="rounded-md lg:-ml-10"
                  width={1000}
                  height={1000}
                  alt="ecg-monitoring"
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
                  src="/services/ecgmonitoring2.jpg"
                  className="rounded-md lg:ml-10 lg:mt-10"
                  width={1000}
                  height={1000}
                  alt="ecg-monitoring"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for ECG Monitoring (At Home):
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Wear Comfortable, Loose Clothing:{" "}
                    </span>
                    Before the procedure, consult your healthcare provider to
                    Choose loose, comfortable clothing to make it easier to
                    attach and wear the monitor throughout the day. Button-up
                    shirts are especially helpful for easy access to the chest
                    area.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      {" "}
                      Avoid Lotions or Creams on Your Chest :{" "}
                    </span>
                    Before applying the monitor, avoid using any lotions,
                    creams, or oils on the chest, as they can prevent the
                    electrodes from sticking properly to your skin.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Discuss Medications with Your Doctor:{" "}
                    </span>
                    Inform your healthcare provider of any medications you are
                    currently taking, especially heart medications, as they may
                    impact heart rhythm and interpretation of the results.
                  </div>
                </p>
              </div>
            </div>

            <div className="lg:grid grid-cols-12 lg:-mt-12 -mt-3">
              <div className="col-start-4 col-span-6">
                <p className="text-lg flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Caffeine and Alcohol:{" "}
                    </span>
                    On the day of the test, avoid caffeine and alcohol unless
                    directed otherwise, as these substances can increase heart
                    rate and may affect the readings.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Follow Instructions for Daily Activities:{" "}
                    </span>
                    Generally, you’ll be encouraged to go about your normal
                    routine. However, check with your provider if there are
                    specific activities, like intense exercise, that you should
                    avoid, as excessive sweating might affect the electrodes’
                    adherence.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Keep a Symptom Diary:{" "}
                    </span>
                    During monitoring, keep a diary to note any symptoms like
                    chest pain, dizziness, or palpitations, along with the time
                    they occur. This helps doctors correlate symptoms with
                    recorded ECG data for more accurate diagnosis.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Electromagnetic Interference:{" "}
                    </span>
                    Stay away from high-power electronics like microwave ovens
                    or electric blankets, as these can interfere with the signal
                    of some ECG monitors.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Do Not Tamper with the Device:{" "}
                    </span>
                    Avoid adjusting or removing the monitor yourself unless
                    instructed. If there is discomfort or device malfunction,
                    contact your healthcare provider for guidance.
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
              src="https://www.youtube.com/embed/iitRJd1gc5g?si=b1_6qR9YxlcvSL3w"
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

export default Monitoring;

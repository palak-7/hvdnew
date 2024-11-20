import React from "react";
import { servicesdata } from "@/data/serviceData";
import Head from "@/components/common/head/Head";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
const Holter = () => {
  return (
    <div>
      <Head service={servicesdata[6]} />

      {/* ques 2 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 my-10 lg:ml-[-50%] lg:h-[400px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue dark:text-black">
          <div className="lg:flex items-center justify-center h-full">
            <div className="lg:grid grid-cols-12 items-center flex flex-col-reverse lg:0">
              <div className="col-span-4 col-start-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  What is 24-Hour Holter Monitoring?
                </h1>

                <p className="text-lg mt-2 flex">
                  24-hour Holter monitoring is a type of continuous ECG
                  (electrocardiogram) that records the electrical activity of
                  your heart over a full 24-hour period. It involves wearing a
                  small, portable device with electrodes attached to your chest.
                  The device monitors your heart’s rhythm, detecting
                  irregularities such as arrhythmias, palpitations, or other
                  issues that may not show up during a standard ECG test. Holter
                  monitoring is useful for diagnosing heart conditions and
                  evaluating symptoms like dizziness, chest pain, or fainting.
                  The data collected during the 24 hours is later analyzed by a
                  doctor to assess heart health.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/holter.png"
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  alt="holter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[1000px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className=" h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/holter2.jpg"
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  alt="holter"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for 24-Hour Holter Monitoring:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    {" "}
                    <span className="font-semibold">
                      {" "}
                      Wear Comfortable, Loose Clothing:{" "}
                    </span>{" "}
                    Choose clothing that allows easy access to your chest area.
                    Avoid tight or restrictive clothes, as they can make it
                    difficult for the electrodes to stay in place.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    {" "}
                    <span className="font-semibold">
                      Avoid Skin Products on the Chest:{" "}
                    </span>{" "}
                    On the day of your monitoring, refrain from using lotions,
                    oils, or creams on your chest, as they can prevent the
                    electrodes from sticking properly to your skin.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    {" "}
                    <span className="font-semibold">
                      Discuss Medications with Your Doctor:{" "}
                    </span>{" "}
                    Let your healthcare provider know about any medications
                    you're taking, especially those related to the heart, as
                    these may affect the heart's rhythm and the interpretation
                    of results.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    {" "}
                    <span className="font-semibold">
                      Avoid Caffeine and Alcohol:{" "}
                    </span>{" "}
                    Try to avoid caffeine and alcohol during the 24-hour
                    monitoring period, as they can cause fluctuations in heart
                    rate, which could affect the readings.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    {" "}
                    <span className="font-semibold">
                      Keep a Log of Your Activities and Symptoms:{" "}
                    </span>{" "}
                    It can be helpful to keep a record of any symptoms (such as
                    headaches, dizziness, or chest pain) and note the times you
                    are resting or active. This information helps your doctor
                    correlate your symptoms with the BP readings.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    {" "}
                    <span className="font-semibold">
                      Follow Daily Activity Guidelines:{" "}
                    </span>
                    During the 24 hours, go about your usual activities, but
                    avoid vigorous exercise that could dislodge the electrodes
                    or cause excessive sweating. Your doctor may provide
                    specific activity restrictions.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    {" "}
                    <span className="font-semibold">Keep a Symptom Diary:</span>
                    Record any symptoms you experience during the monitoring
                    period, such as chest pain, dizziness, or palpitations. Note
                    the time they occur, which helps your doctor correlate
                    symptoms with the ECG data.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    {" "}
                    <span className="font-semibold">Keep a Symptom Diary:</span>
                    Avoid removing or adjusting the Holter monitor yourself. If
                    you experience discomfort or problems with the device,
                    contact your healthcare provider immediately.
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

export default Holter;

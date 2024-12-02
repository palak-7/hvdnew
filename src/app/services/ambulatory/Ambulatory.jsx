import React from "react";
import { servicesdata } from "@/data/serviceData";
import Head from "@/components/common/head/Head";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";

const Ambulatory = () => {
  return (
    <div>
      <Head service={servicesdata[9]} />

      {/* ques 2 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 my-10 lg:ml-[-50%] lg:h-[400px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue dark:text-black">
          <div className="lg:flex items-center justify-center h-full">
            <div className="lg:grid grid-cols-12 items-center flex flex-col-reverse lg:0">
              <div className="col-span-4 col-start-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  What is Ambulatory BP Monitoring?
                </h1>

                <p className="text-lg mt-2 flex">
                  Ambulatory blood pressure monitoring (ABPM) is a method used
                  to measure blood pressure over a 24-hour period while a
                  patient goes about their normal daily activities. This is done
                  using a small, portable device that automatically takes blood
                  pressure readings at regular intervals throughout the day and
                  night. ABPM provides a more accurate picture of a person's
                  blood pressure compared to single readings taken in a doctor's
                  office. It is especially useful in diagnosing conditions like
                  white coat hypertension (high blood pressure in a clinical
                  setting) or masked hypertension (normal readings in the clinic
                  but high readings outside). ABPM helps healthcare providers
                  assess how blood pressure behaves during sleep, activity, and
                  periods of stress.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/abpm.jpeg"
                  className="rounded-md lg:-ml-10"
                  width={1000}
                  height={1000}
                  alt="bp-monitoring"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[830px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className=" h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/abmp2.jpg"
                  className="rounded-md lg:ml-10 lg:mt-14"
                  width={1000}
                  height={1000}
                  alt="bp-monitoring"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for Ambulatory BP Monitoring:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    {" "}
                    <span className="font-semibold">
                      {" "}
                      Avoid Caffeinated Beverages and Alcohol:{" "}
                    </span>{" "}
                    For accurate results, refrain from consuming caffeinated
                    drinks (coffee, tea, soda) or alcohol for 24 hours before
                    the test. These substances can affect your blood pressure.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    {" "}
                    <span className="font-semibold"> Avoid Smoking: </span>{" "}
                    Refrain from smoking at least 2 hours before the test.
                    Nicotine can temporarily increase blood pressure, affecting
                    the readings.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    {" "}
                    <span className="font-semibold">
                      Continue Normal Activities:{" "}
                    </span>{" "}
                    While wearing the device, you should go about your usual
                    routine. However, avoid strenuous physical activities or
                    excessive movements that could interfere with the readings
                    or dislodge the device.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    {" "}
                    <span className="font-semibold">
                      Keep the Arm Still When the Cuff Inflates:{" "}
                    </span>{" "}
                    During measurement intervals, try to remain as still and
                    relaxed as possible to get an accurate reading. If you feel
                    uncomfortable or notice the cuff inflating, avoid moving
                    your arm or body.
                  </div>
                </p>
              </div>
            </div>

            <div className="lg:grid grid-cols-12 lg:-mt-14 -mt-3">
              <div className="col-start-4 col-span-6">
                <p className="text-lg mt-2 flex px-5">
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

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    {" "}
                    <span className="font-semibold">
                      Be Aware of the Cuff Inflating:{" "}
                    </span>
                    The blood pressure cuff will inflate at regular intervals,
                    typically every 15-30 minutes during the day and every hour
                    at night. It may cause slight discomfort but should not be
                    painful.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    {" "}
                    <span className="font-semibold">
                      Bring Your Device Back for Evaluation:{" "}
                    </span>
                    After 24 hours, return the monitoring device to your
                    healthcare provider for evaluation and analysis of the
                    collected data.
                  </div>
                </p>

                <p className="mx-5 font-semibold text-xl mt-5 pb-5 lg:pb-0">
                  Ambulatory BP monitoring provides an accurate and
                  comprehensive assessment of blood pressure patterns, helping
                  doctors diagnose and manage hypertension more effectively.
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
              src="https://www.youtube.com/embed/waOXya_Tr98?si=oSEnrsY6izMtOd8O"
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

export default Ambulatory;

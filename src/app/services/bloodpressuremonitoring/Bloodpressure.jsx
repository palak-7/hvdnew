import React from "react";
import { servicesdata } from "@/data/serviceData";
import Head from "@/components/common/head/Head";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
const Bloodpressure = () => {
  return (
    <div>
      <Head service={servicesdata[17]} />

      {/* ques 2 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 my-10 lg:ml-[-50%] lg:h-[400px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue dark:text-black">
          <div className="lg:flex items-center justify-center h-full">
            <div className="lg:grid grid-cols-12 items-center flex flex-col-reverse lg:0">
              <div className="col-span-4 col-start-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  What is Blood Pressure Monitoring?
                </h1>

                <p className="text-lg mt-2 flex">
                  Blood pressure monitoring is the process of measuring the
                  force of blood against the walls of your arteries as your
                  heart pumps it through your body. Blood pressure readings are
                  taken using a device called a sphygmomanometer, which consists
                  of an inflatable cuff that wraps around your upper arm, a
                  pressure gauge, and a stethoscope (for manual readings). The
                  test is used to assess the health of your cardiovascular
                  system and to diagnose conditions such as hypertension (high
                  blood pressure) or hypotension (low blood pressure).
                </p>
                <p className="text-lg mt-2 flex">
                  Blood pressure is recorded in two numbers: systolic (the
                  pressure when the heart beats) and diastolic (the pressure
                  when the heart is at rest between beats).Consistently high or
                  low readings may indicate underlying health problems.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/bloodpressuremonitoring.png"
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  alt="BPmonitoring"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[800px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/bpmonitoring.jpg"
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  alt="BPmonitoring"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for Blood Pressure Monitoring?
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Caffeine, Smoking, and Alcohol:
                    </span>
                    For accurate results, it’s important to avoid consuming
                    caffeine, smoking, or drinking alcohol at least 30 minutes
                    before your blood pressure is measured. These substances can
                    temporarily raise blood pressure and affect the reading.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Rest Before the Test:</span>
                    Sit quietly for about 5 minutes before the test. Avoid any
                    physical activity or stress that could elevate your blood
                    pressure. It’s essential to relax and remain calm during the
                    measurement for the most accurate results.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Choose Proper Clothing:
                    </span>
                    Wear loose-fitting clothing, preferably with sleeves that
                    can easily be rolled up above your elbow. The cuff needs to
                    fit snugly around your upper arm, so tight clothing may
                    interfere with an accurate reading.
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
                      Sit in the Correct Position:
                    </span>
                    When having your blood pressure measured, sit with your back
                    supported, legs uncrossed, and feet flat on the floor. Rest
                    your arm on a flat surface at heart level. This posture
                    helps ensure an accurate reading.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Relax and Stay Still:</span>
                    During the test, remain still and avoid talking. Movement
                    can cause an incorrect reading, so it's important to stay
                    relaxed and focused.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Inform the Healthcare Provider:
                    </span>
                    Let the person measuring your blood pressure know if you’ve
                    recently experienced any stress, anxiety, or unusual
                    physical activity. These factors can influence the readings.
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

export default Bloodpressure;

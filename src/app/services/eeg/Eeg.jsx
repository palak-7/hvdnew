import React from "react";
import Image from "next/image";
import { servicesdata } from "@/data/serviceData";
import Head from "@/components/common/head/Head";
import { MdArrowRightAlt } from "react-icons/md";
const Eeg = () => {
  return (
    <div>
      <Head service={servicesdata[13]} />

      {/* ques 2 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 my-10 lg:ml-[-50%] lg:h-[400px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue dark:text-black">
          <div className="lg:flex items-center justify-center h-full">
            <div className="lg:grid grid-cols-12 items-center flex flex-col-reverse lg:0">
              <div className="col-span-4 col-start-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  What is an Electroencephalogram (EEG)?
                </h1>

                <p className="text-lg mt-2 flex">
                  An Electroencephalogram (EEG) is a diagnostic test that
                  measures the electrical activity of the brain. It records
                  brain wave patterns through small electrodes placed on the
                  scalp. EEG is commonly used to diagnose neurological
                  conditions such as epilepsy, seizures, sleep disorders, brain
                  injuries, and even certain psychiatric conditions. The test
                  provides valuable information about brain function by
                  detecting abnormalities in electrical activity.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/eeg.png"
                  className="rounded-md lg:-ml-10"
                  width={1000}
                  height={1000}
                  alt="eeg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[750px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/eeg1.jpg"
                  className="rounded-md lg:ml-10 lg:mt-10"
                  width={1000}
                  height={1000}
                  alt="eeg"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for an Electroencephalogram (EEG):
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Consult Your Doctor: </span>
                    Discuss any symptoms you are experiencing, such as seizures,
                    headaches, or confusion. It’s also important to inform your
                    doctor about any medications you are taking, as some drugs
                    can affect brain activity.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Caffeine and Stimulants:{" "}
                    </span>
                    Refrain from consuming caffeine, nicotine, or other
                    stimulants for at least 12 hours before the test. These
                    substances can interfere with the brain's electrical
                    activity and potentially affect the results.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Wash Your Hair: </span>
                    Make sure your hair is clean and free from any oils, hair
                    products, or styling gels on the day of the test. Avoid
                    using any hair products on the day of the test.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Eat and Sleep Normally:{" "}
                    </span>
                    Unless instructed otherwise by your doctor, you can eat and
                    drink as usual. If you are undergoing a sleep-deprived EEG
                    (often used to detect sleep-related seizures), you may be
                    asked to stay awake the night before the test.
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
                    <span className="font-semibold">Prepare for Comfort: </span>
                    Wear loose, comfortable clothing, as you will be sitting or
                    lying down during the test. The procedure typically does not
                    involve pain, but you may be asked to relax and stay still
                    to ensure accurate readings.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Inform About Seizures:{" "}
                    </span>
                    If you have had seizures or episodes of abnormal brain
                    activity, inform the technician. This helps them prepare for
                    potential seizure activity during the test, allowing for
                    better monitoring.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5 lg:pb-0 pb-3">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Be Prepared for Electrodes Placement:{" "}
                    </span>
                    During the procedure, electrodes will be attached to your
                    scalp with a gel-like substance. This may feel slightly cold
                    or sticky but is generally painless.
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
              src="https://www.youtube.com/embed/p38nzOGJZtI?si=u9jtbIOtFNkY7PEF"
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

export default Eeg;

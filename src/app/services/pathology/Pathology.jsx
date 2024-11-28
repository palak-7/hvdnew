import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
const Pathology = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/services/pathology.png`}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
          alt="service"
        />
        <div className="bg-lightblue absolute inset-0 opacity-70"></div>
        <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
          <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
            Pathology (Blood Test)
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
                  What is a Pathology (Blood Test)?
                </h1>

                <p className="text-lg mt-2 flex">
                  Blood tests are important diagnostic tools that assess overall
                  health, detect diseases, and monitor various health
                  conditions. They provide critical information about blood
                  cells, organs, and bodily functions, helping to diagnose
                  infections, anemia, clotting disorders, immune system issues,
                  and chronic conditions like diabetes and kidney disease. To
                  ensure the most accurate results, it’s important to follow the
                  right preparation steps. Here’s how to prepare effectively for
                  a blood test:
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/pathology.png"
                  className="rounded-md lg:-ml-10"
                  width={1000}
                  height={1000}
                  alt="pathology"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[900px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/pathology1.jpg"
                  className="rounded-md lg:ml-10 lg:mt-10"
                  width={1000}
                  height={1000}
                  alt="pathology"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  Preparing for a Blood Test:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Fasting Guidelines: </span>
                    Certain blood tests, like glucose tests or lipid profiles,
                    require fasting for 8-12 hours. Be sure to check with your
                    healthcare provider to see if fasting is necessary for your
                    test. During this fasting period, only water is allowed, as
                    food or drink could interfere with test accuracy.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Disclose Medications:{" "}
                    </span>
                    Before your test, inform your healthcare provider about all
                    medications, supplements, or herbal products you are
                    currently taking. Some of these can affect the results, so
                    your provider might recommend stopping or continuing certain
                    treatments before the test.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Stay Hydrated: </span>
                    Drink plenty of water before the test to help with blood
                    circulation. Hydration can make the blood draw easier and
                    ensure more accurate results.
                  </div>
                </p>
              </div>
            </div>

            <div className="lg:grid grid-cols-12 lg:-mt-10 -mt-3">
              <div className="col-start-4 col-span-6">
                <p className="text-lg  flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Certain Activities:{" "}
                    </span>
                    Refrain from intense exercise, smoking, or alcohol
                    consumption prior to your test. These factors can alter your
                    test outcomes. Your healthcare provider may give you
                    specific instructions on what to avoid for the best results.
                  </div>
                </p>
                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Share Your Medical History:
                    </span>
                    Let your healthcare provider know about any medical
                    conditions, allergies, or past reactions to blood draws.
                    This will help them ensure your safety and improve the
                    accuracy of the test results. Don’t forget to mention any
                    recent illnesses or infections, as they can influence the
                    results.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Stay Calm: </span>
                    Feeling anxious can affect your vital signs and,
                    consequently, the results of your blood test. Try relaxation
                    techniques like deep breathing to keep calm before and
                    during the procedure.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Follow Instructions: </span>
                    Adhere to any additional instructions from your healthcare
                    provider or the laboratory. These instructions are specific
                    to your test and help ensure that the results are as
                    accurate as possible.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Dress Appropriately: </span>
                    Choose short-sleeved or loose clothing to make it easier for
                    the healthcare provider to access your arm for the blood
                    draw.
                  </div>
                </p>

                <p className="text-lg mt-5 font-semibold px-5 lg:pb-0 pb-3">
                  By following these steps, you can help ensure that your blood
                  test results are precise and reliable, aiding in the accurate
                  diagnosis and monitoring of your health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pathology;

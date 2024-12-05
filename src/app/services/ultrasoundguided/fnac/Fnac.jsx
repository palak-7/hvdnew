import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
const Fnac = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/services/ultrasoundguided/ultrasound-guided-fnac.jpeg`}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
          alt="fnac"
        />
        <div className="bg-lightblue absolute inset-0 opacity-70"></div>
        <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
          <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
            Fine Needle Aspiration Cytology (FNAC)
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
        <div className="bottom-0 my-10 lg:ml-[-50%] lg:h-[480px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue dark:text-black">
          <div className="lg:flex items-center justify-center h-full">
            <div className="lg:grid grid-cols-12 items-center flex flex-col-reverse lg:0">
              <div className="col-span-4 col-start-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  What is Fine Needle Aspiration Cytology?
                </h1>

                <p className="text-lg mt-2 flex">
                  Fine Needle Aspiration Cytology (FNAC) is a diagnostic
                  procedure used to investigate lumps or abnormalities in the
                  body by collecting a small sample of tissue or fluid using a
                  thin, hollow needle. The needle is typically inserted into a
                  suspicious area such as a lump, cyst, or mass, often in the
                  breast, thyroid, lymph nodes, or other soft tissues. Once the
                  sample is collected, it is examined under a microscope to
                  check for signs of disease, including cancer, infections, or
                  benign conditions. FNAC is minimally invasive, relatively
                  quick, and provides valuable information about the nature of
                  the abnormality.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/ultrasoundguided/ultrasound-guided-fnac.jpeg"
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  alt="fnac"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[880px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className=" h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/ultrasoundguided/ultrasound-guided-fnac-2.jpg"
                  className="rounded-md lg:ml-10 lg:mt-14"
                  width={1000}
                  height={1000}
                  alt="fnac"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for Fine Needle Aspiration Cytology:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Wear Comfortable Clothing:
                    </span>
                    On the day of the procedure, wear loose, comfortable
                    clothing, especially around the area being tested (e.g.,
                    neck, breast, or underarm).
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
                    Let your healthcare provider know if you are taking any
                    blood-thinning medications (such as aspirin, warfarin, or
                    clopidogrel). You may need to temporarily stop these
                    medications before the procedure to reduce the risk of
                    bleeding.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Eating (if necessary):
                    </span>
                    If the FNAC is to be performed on the neck or any area near
                    your throat, and if sedation or anesthesia is required, you
                    may be instructed to fast for several hours before the test.
                    Follow your doctor’s specific instructions regarding food
                    and drink.
                  </div>
                </p>
              </div>
            </div>

            <div className="lg:grid grid-cols-12 lg:-mt-11 -mt-3">
              <div className="col-start-4 col-span-6">
                <p className="text-lg px-5 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Stay Relaxed:</span>
                    FNAC is a relatively simple procedure that usually takes
                    only a few minutes. Try to remain calm and relaxed during
                    the test to ensure the needle is positioned accurately for
                    sample collection.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Discuss Allergies or Sensitivities:
                    </span>
                    If you have any allergies (especially to local anesthetics
                    or iodine), inform your doctor ahead of time to avoid any
                    adverse reactions.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Bring Someone with You:
                    </span>
                    While FNAC is typically a quick outpatient procedure, it’s
                    helpful to bring a friend or family member to provide
                    support, especially if you feel anxious about the procedure.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Post-Procedure Care:</span>
                    After the procedure, you may experience mild bruising,
                    swelling, or tenderness at the site. It is advisable to
                    avoid strenuous activities for a few days to allow the area
                    to heal.
                  </div>
                </p>

                <p className="mx-5 font-semibold text-xl mt-5 lg:pb-0 pb-4">
                  FNAC is a safe and effective method for diagnosing various
                  conditions. It provides a quick and minimally invasive way to
                  obtain a tissue sample, aiding in the diagnosis and treatment
                  planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fnac;

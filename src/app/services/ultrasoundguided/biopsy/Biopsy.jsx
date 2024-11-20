import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
const Biopsy = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/services/`}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
          alt="service"
        />
        <div className="bg-lightblue absolute inset-0 opacity-70"></div>
        <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
          <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
            Biopsy
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
                  What is a Biopsy?
                </h1>

                <p className="text-lg mt-2 flex">
                  A biopsy is a medical procedure used to remove a small sample
                  of tissue from the body for examination under a microscope. It
                  is primarily used to diagnose diseases such as cancer,
                  infections, or other abnormal conditions. There are several
                  types of biopsies, including needle biopsy, skin biopsy,
                  surgical biopsy, and endoscopic biopsy, depending on the
                  location of the tissue to be sampled. The procedure helps
                  doctors to identify whether abnormal growths, lumps, or other
                  changes in the body are benign or malignant. Biopsies provide
                  crucial information that helps guide treatment decisions.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/"
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  alt="biopsy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[1200px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className=" h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/"
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  alt="biopsy"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for a Biopsy:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Wear Comfortable Clothing:
                    </span>
                    Choose loose and comfortable clothing on the day of the
                    procedure, especially if the biopsy site is on the chest,
                    abdomen, or limbs, to make the process easier.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Discuss Medications with Your Doctor:
                    </span>
                    Inform your doctor about any medications you are taking,
                    especially blood-thinning medications like aspirin,
                    warfarin, or clopidogrel. Your doctor may advise you to stop
                    these medications for a few days before the procedure to
                    reduce the risk of bleeding.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Follow Fasting Instructions (if applicable):
                    </span>
                    If your biopsy involves anesthesia or sedation (particularly
                    for procedures involving the abdomen or internal organs),
                    you may be instructed to fast for a few hours before the
                    procedure. Follow your doctor’s specific fasting guidelines
                    carefully.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Coagulation profile:</span>
                    Coagulation tests, also known as blood clotting tests, are
                    often performed before a biopsy to check if blood is
                    clotting properly and to assess the risk of bleeding. It
                    includes Prothrombin time (PT), Activated partial
                    thromboplastin time (aPTT) and International normalized
                    ratio (INR).
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Arrange for Transportation:
                    </span>
                    If sedation or general anesthesia is required, arrange for
                    someone to drive you home after the procedure, as you may
                    feel drowsy or unsteady afterward.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Prepare for Local Anesthesia:
                    </span>
                    Most biopsies are performed using local anesthesia to numb
                    the area. You may feel some pressure or mild discomfort, but
                    the procedure itself is typically not painful.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Smoking and Alcohol:
                    </span>
                    Refrain from smoking or consuming alcohol for at least 24
                    hours before the biopsy, as both can affect the healing
                    process or interfere with anesthesia.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Bring a List of Your Medical History:
                    </span>
                    It’s important to bring a list of any medical conditions or
                    allergies you have, especially if you’ve had previous
                    surgeries or treatments. This will help the medical team
                    assess your suitability for the biopsy.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Post-Procedure Care:</span>
                    After the biopsy, you may experience slight swelling,
                    bruising, or tenderness at the site. It’s advisable to rest
                    and avoid heavy activities for a few days, depending on the
                    type of biopsy.
                  </div>
                </p>
              </div>
            </div>

            <div className="lg:grid grid-cols-12">
              <div className="col-start-4 col-span-6">
                <p className="ml-10 font-semibold text-xl">
                  Biopsy is a vital diagnostic tool that provides essential
                  information about your health, allowing doctors to make
                  informed decisions about treatment and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biopsy;

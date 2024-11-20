import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
const Breast = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <Image
            src={`/services/`}
            width={1000}
            height={1000}
            className="w-full h-[300px] object-cover"
            alt="Breast Biopsy"
          />
          <div className="bg-lightblue absolute inset-0 opacity-70"></div>
          <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
            <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
              Breast Biopsy
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
                    What is a Breast Biopsy?
                  </h1>

                  <p className="text-lg mt-2 flex">
                    A breast biopsy is a medical procedure used to remove a
                    small sample of tissue from a breast lump or abnormal area
                    for examination under a microscope. This test helps doctors
                    determine if a growth or lump is benign (non-cancerous) or
                    malignant (cancerous). There are different types of breast
                    biopsy procedures, including fine needle aspiration (FNA),
                    core needle biopsy, and surgical biopsy. The type of biopsy
                    chosen depends on factors such as the location and size of
                    the lump, as well as other clinical considerations. A breast
                    biopsy is often recommended if an abnormality is detected
                    during a mammogram, ultrasound, or physical examination.
                  </p>
                </div>
                <div className="col-span-2 lg:p-10 p-5">
                  <Image
                    src="/services/"
                    className="rounded-md"
                    width={1000}
                    height={1000}
                    alt="aspiration"
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
                    src="/services/"
                    className="rounded-md"
                    width={1000}
                    height={1000}
                    alt="Breast Biopsy"
                  />
                </div>
                <div className="col-span-4 p-5 lg:p-14">
                  <h1 className="text-primary font-extrabold text-4xl">
                    How to Prepare for a Breast Biopsy:
                  </h1>
                  <p className="text-lg mt-2 flex">
                    <div>
                      <MdArrowRightAlt className="mr-2 mt-1" />
                    </div>
                    <div>
                      <span className="font-semibold">
                        Wear Comfortable Clothing:
                      </span>
                      Wear a loose, comfortable outfit on the day of the
                      procedure, as you may need to partially undress depending
                      on the biopsy location.
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
                      Inform your healthcare provider about any medications you
                      are taking, particularly blood thinners (such as aspirin,
                      warfarin, or clopidogrel). You may need to temporarily
                      stop taking them to reduce the risk of bleeding.
                    </div>
                  </p>

                  <p className="text-lg mt-2 flex">
                    <div>
                      <MdArrowRightAlt className="mr-2 mt-1" />
                    </div>
                    <div>
                      <span className="font-semibold">
                        Avoid Caffeine (if recommended):
                      </span>
                      In some cases, doctors recommend avoiding caffeine for
                      24-48 hours before the biopsy, as it can affect breast
                      tissue and potentially complicate the procedure.
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
                      Most breast biopsies are performed under local anesthesia,
                      which numbs the biopsy site.
                    </div>
                  </p>

                  <p className="text-lg mt-2 flex">
                    <div>
                      <MdArrowRightAlt className="mr-2 mt-1" />
                    </div>
                    <div>
                      <span className="font-semibold">
                        Arrange for Transportation (if necessary):
                      </span>
                      If your biopsy involves sedation or if you feel anxious
                      about the procedure, consider having a friend or family
                      member drive you to and from the appointment.
                    </div>
                  </p>

                  <p className="text-lg mt-2 flex">
                    <div>
                      <MdArrowRightAlt className="mr-2 mt-1" />
                    </div>
                    <div>
                      <span className="font-semibold">
                        Avoid Wearing Lotions, Deodorants, or Powders:
                      </span>
                      On the day of the procedure, do not apply lotions,
                      deodorants, or powders on the breast area, as these
                      products can interfere with the biopsy process and
                      imaging.
                    </div>
                  </p>

                  <p className="text-lg mt-2 flex">
                    <div>
                      <MdArrowRightAlt className="mr-2 mt-1" />
                    </div>
                    <div>
                      <span className="font-semibold">
                        Prepare for Mild Discomfort:
                      </span>
                      After the biopsy, you may experience mild discomfort,
                      bruising, or swelling at the site. Your doctor may
                      recommend over-the-counter pain medication for relief.
                    </div>
                  </p>

                  <p className="text-lg mt-2 flex">
                    <div>
                      <MdArrowRightAlt className="mr-2 mt-1" />
                    </div>
                    <div>
                      <span className="font-semibold">
                        Post-Procedure Care:
                      </span>
                      Follow any aftercare instructions provided by your doctor,
                      such as keeping the biopsy site clean and dry, and
                      avoiding strenuous activities for a few days.
                    </div>
                  </p>
                </div>
              </div>

              <div className="lg:grid grid-cols-12">
                <div className="col-start-4 col-span-6">
                  <p className="ml-10 font-semibold text-xl">
                    A breast biopsy is a valuable tool for diagnosing breast
                    conditions, providing essential information to guide
                    treatment decisions and manage potential health concerns
                    effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breast;

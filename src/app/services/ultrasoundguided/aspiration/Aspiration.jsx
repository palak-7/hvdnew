import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
const Aspiration = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/services/ultrasoundguided/aspiration.jpg`}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
          alt="service"
        />
        <div className="bg-lightblue absolute inset-0 opacity-70"></div>
        <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
          <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
            Aspiration
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
                  What is Aspiration?
                </h1>

                <p className="text-lg mt-2 flex">
                  Aspiration is a medical procedure used to remove fluid or
                  tissue from the body using a needle or syringe. It is commonly
                  used to drain abscesses, cysts, or other fluid-filled masses,
                  as well as to obtain samples for diagnostic tests. <br />
                  Aspiration can be performed under local anesthesia or
                  sedation, depending on the location and type of aspiration.
                  The procedure is often guided by ultrasound or other imaging
                  techniques to ensure precise targeting of the fluid or tissue.
                  Aspiration helps relieve symptoms, such as pain or pressure,
                  and allows healthcare providers to analyze the sample for
                  infection, inflammation, or other underlying conditions.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/ultrasoundguided/aspiration.jpg"
                  className="rounded-md lg:-ml-10"
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
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[800px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/ultrasoundguided/aspiration2.webp"
                  className="rounded-md lg:ml-10 lg:mt-14"
                  width={1000}
                  height={1000}
                  alt="aspiration"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for Aspiration:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Wear Comfortable Clothing:
                    </span>
                    On the day of the procedure, wear loose-fitting clothes that
                    allow easy access to the area being treated, such as the
                    neck, abdomen, or joints.
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
                    medications, especially blood thinners like aspirin,
                    warfarin, or clopidogrel.
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
                    If the aspiration is being performed on an area that
                    requires sedation or anesthesia (such as the abdomen), your
                    doctor may ask you to fast for several hours before the
                    procedure. Follow the fasting guidelines given by your
                    doctor.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Discuss Any Allergies:
                    </span>
                    If you have allergies to medications, contrast dyes, or
                    local anesthetics, inform your doctor before the procedure
                    to avoid potential allergic reactions.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Expect Mild Discomfort:
                    </span>
                    Aspiration typically involves inserting a needle into the
                    area of interest. While the procedure is generally not
                    painful, you may feel some discomfort, pressure, or a mild
                    sting when the needle is inserted.
                  </div>
                </p>
              </div>
            </div>

            <div className="lg:grid grid-cols-12 lg:-mt-16">
              <div className="col-start-4 col-span-6">
                <p className="text-lg  lg:mt-14 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Post-Procedure Care:</span>
                    After the aspiration, the treated area may be sore, bruised,
                    or swollen. You may be advised to apply ice or take
                    over-the-counter pain relievers to manage discomfort. Avoid
                    heavy physical activity for a few days to allow the area to
                    heal.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Arrange for Transportation (if necessary):
                    </span>
                    If sedation is used, arrange for someone to drive you home
                    after the procedure, as you may feel drowsy afterward.
                  </div>
                </p>

                <p className="mx-5 font-semibold text-xl lg:pb-0 pb-3 mt-5">
                  Aspiration is a minimally invasive and effective way to
                  diagnose and treat various conditions, offering relief from
                  symptoms and enabling better treatment planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aspiration;

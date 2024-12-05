import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
const Catheter = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/services/ultrasoundguided/catheter-drainage.png`}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
          alt="catheter-drainage"
        />
        <div className="bg-lightblue absolute inset-0 opacity-70"></div>
        <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
          <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
            Catheter Drainage
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
                  What is Catheter Drainage?
                </h1>

                <p className="text-lg mt-2 flex">
                  Catheter drainage is a medical procedure used to remove fluids
                  (such as urine, blood, or other bodily fluids) from the body
                  through a tube called a catheter. This tube is inserted into a
                  body cavity or organ, like the bladder, to help drain excess
                  fluid. The procedure is commonly used in cases where the body
                  is unable to naturally expel fluids due to medical conditions,
                  surgery, or injury.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/ultrasoundguided/catheter-drainage.png"
                  className="rounded-md lg:-ml-10"
                  width={1000}
                  height={1000}
                  alt="catheter-drainage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[630px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/ultrasoundguided/catheter-drainage2.jpg"
                  className="rounded-md lg:ml-10 lg:mt-14"
                  width={1000}
                  height={1000}
                  alt="catheter-drainage"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for Catheter Drainage:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Consultation with Your Doctor:{" "}
                    </span>
                    Before the procedure, consult your healthcare provider to
                    discuss the need for catheter drainage, potential risks, and
                    expected outcomes. Your doctor will also inform you about
                    any medical conditions that may affect the procedure, like
                    allergies or infections.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold"> Fasting: </span>
                    You may be asked to fast for a few hours before the
                    procedure, especially if it involves general anesthesia or
                    sedation.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Pre-Procedure Tests: </span>
                    Depending on the type of drainage, you may need to undergo
                    some tests like blood work (coagulation profile), imaging to
                    assess your condition.
                  </div>
                </p>
              </div>
            </div>

            <div className="lg:grid grid-cols-12 lg:-mt-24 -mt-3">
              <div className="col-start-4 lg:mt-16 col-span-6">
                <p className="text-lg flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Explain Concerns: </span>
                    Share any concerns or fears with your healthcare provider.
                    They can explain what to expect and provide reassurance,
                    especially if you feel anxious about the procedure.
                  </div>
                </p>

                <p className="text-lg flex px-5 mt-2">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Shaving or Cleaning the Area:{" "}
                    </span>
                    You may be asked to shave or clean the area where the
                    catheter will be inserted, ensuring a sterile environment
                    for the procedure.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5 lg:pb-0 pb-3">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Arrange Support: </span>:
                    Arrange for a friend or family member to accompany you for
                    transportation after the procedure, especially if anesthesia
                    is used. This ensures your safety during recovery.
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

export default Catheter;

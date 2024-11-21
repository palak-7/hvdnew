import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
const Pain = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/services/`}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
          alt="pain-injection"
        />
        <div className="bg-lightblue absolute inset-0 opacity-70"></div>
        <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
          <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
            Pain Injection
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
                  What is a Pain Injection?
                </h1>

                <p className="text-lg mt-2 flex">
                  A pain injection, under ultrasound guidance, is a medical
                  procedure used to deliver medication directly to specific
                  areas of the body to treat pain. This technique involves using
                  ultrasound imaging to precisely locate the target area, such
                  as joints, muscles, nerves, or the spine, and guide the
                  injection accurately. Pain injections can contain local
                  anesthetics, corticosteroids, or other pain-relieving
                  medications. This treatment is commonly used for conditions
                  like joint pain, back pain, sciatica, and inflammation,
                  providing relief from acute or chronic pain. The ultrasound
                  guidance ensures the injection is placed in the right
                  location, increasing the effectiveness of the treatment and
                  minimizing risks.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/"
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  alt="pain-injection"
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
                  src="/services/"
                  className="rounded-md mt-10"
                  width={1000}
                  height={1000}
                  alt="pain-injection"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for a Pain Injection:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                     Wear Comfortable Clothing:{" "}
                    </span>
                    On the day of the procedure, wear loose and comfortable
                    clothes, allowing easy access to the area being treated
                    (e.g., back, neck, shoulder, or knee).
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                     Discuss Medications with Your Doctor:{" "}
                    </span>
                    Inform your doctor about any medications you are taking,
                    especially blood thinners (like aspirin, warfarin) or
                    anti-inflammatory drugs.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                     Avoid Eating (if necessary):{" "}
                    </span>
                    If the pain injection is being done near the neck, spine, or
                    under sedation, your doctor may instruct you to fast for a
                    few hours prior to the procedure. Follow the fasting
                    instructions carefully.
                  </div>
                </p>

                <p className="text-lg flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Arrive Early: </span>
                    Arrive at the clinic or hospital ahead of time to fill out
                    any necessary paperwork and allow time to relax before the
                    procedure.
                  </div>
                </p>
              </div>
            </div>

            <div className="lg:grid grid-cols-12 lg:-mt-14 -mt-4">
              <div className="col-start-4 col-span-6">
                <p className="text-lg flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                    Explain Any Allergies:
                    </span>
                    Inform your doctor if you have any allergies to medications,
                    particularly anesthetics, or contrast dyes used during
                    imaging.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                    Expect Mild Discomfort:{" "}
                    </span>
                    You may feel some pressure or discomfort when the needle is
                    inserted, but the procedure is generally well-tolerated. The
                    ultrasound guidance ensures the needle is positioned
                    accurately, reducing discomfort.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                    Arrange for Someone to Drive You (if necessary):{" "}
                    </span>
                    If sedation is used, arrange for a friend or family member
                    to drive you home, as you may feel drowsy afterward.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                    Post-Procedure Care:{" "}
                    </span>
                    After the injection, you may experience temporary soreness
                    or swelling at the injection site. Follow any post-procedure
                    instructions, such as applying ice or resting the area.
                  </div>
                </p>

                <p className="text-lg mt-5 font-semibold px-5 lg:pb-0 pb-5">
                  A pain injection guided by ultrasound offers a highly targeted
                  approach to pain management, helping to improve mobility and
                  quality of life for patients suffering from localized pain or
                  inflammation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pain;

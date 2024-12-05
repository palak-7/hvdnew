import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
const Pediatric = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/services/echo/peditric-echo/pediatric-echo-new.png`}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
          alt="pediatric-echo"
        />
        <div className="bg-lightblue absolute inset-0 opacity-70"></div>
        <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
          <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
            Pediatric Echo
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
                  What is Pediatric Echo?
                </h1>

                <p className="text-lg mt-2 flex">
                  A Pediatric Echo, or pediatric echocardiogram, is a
                  specialized ultrasound of the heart designed to evaluate the
                  structure and function of a child's heart. It uses
                  high-frequency sound waves to create images of the heart,
                  allowing doctors to assess the size, shape, and movement of
                  the heart chambers and valves. Pediatric echo is commonly used
                  to diagnose congenital heart defects, heart murmurs, valve
                  problems, and other cardiac conditions in children. The
                  procedure is non-invasive, safe, and painless, making it an
                  ideal choice for children, including infants and toddlers. It
                  provides valuable information to doctors for diagnosing and
                  planning treatment for heart-related issues.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/echo/peditric-echo/pediatric-echo-new.png"
                  className="rounded-md lg:-ml-10"
                  width={1000}
                  height={1000}
                  alt="pediatric-echo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[830px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/echo/peditric-echo/pediatric-echo2.jpg"
                  className="rounded-md lg:ml-10 lg:mt-14"
                  width={1000}
                  height={1000}
                  alt="pediatric-echo"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for Pediatric Echo:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Explain the Procedure to Your Child:{" "}
                    </span>
                    If your child is old enough to understand, explain the
                    procedure in simple terms to help them feel more
                    comfortable. Let them know it is a painless and quick test.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Wear Comfortable Clothing:{" "}
                    </span>
                    Dress your child in loose, comfortable clothing, especially
                    with easy access to the chest area. This makes it easier for
                    the technician to attach the electrodes needed for the test.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Eating Before the Test (if instructed):{" "}
                    </span>
                    In some cases, your doctor may advise you to avoid feeding
                    your child for 1-2 hours before the procedure, especially
                    for infants. Follow the doctor's instructions for feeding
                    before the test.
                  </div>
                </p>
              </div>
            </div>

            <div className="lg:grid grid-cols-12 lg:-mt-11 -mt-4">
              <div className="col-start-4 col-span-6">
                <p className="text-lg lg:mt-9 mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Inform the Doctor About Medical History:
                    </span>
                    Provide your child’s healthcare provider with a complete
                    medical history, including any known heart conditions,
                    medications, or previous surgeries. This helps the
                    technician understand how to perform the test and interpret
                    the results.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Stay Calm and Reassuring:
                    </span>
                    Children may feel anxious about medical tests, so it’s
                    important to remain calm and reassuring throughout the
                    procedure. Your presence will help keep them at ease.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Prepare for the Duration:{" "}
                    </span>
                    The pediatric echo usually takes around 30-60 minutes,
                    depending on the complexity of the heart condition being
                    assessed. Be prepared for the test to take this amount of
                    time.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Lotions or Oils:{" "}
                    </span>
                    On the day of the test, avoid applying lotions, oils, or
                    creams to your child’s chest area, as they can interfere
                    with the ultrasound gel and affect the quality of the
                    images.
                  </div>
                </p>
                <p className="text-lg mt-5 font-semibold px-5">
                  Pediatric echo is a safe, effective diagnostic tool that
                  provides critical insights into your child’s heart health,
                  ensuring early detection and treatment of heart conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pediatric;

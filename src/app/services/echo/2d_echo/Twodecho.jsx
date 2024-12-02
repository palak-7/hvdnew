import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

const Twodecho = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/services/echo.jpeg`}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
          alt="2d-echo"
        />
        <div className="bg-lightblue absolute inset-0 opacity-70"></div>
        <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
          <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
            2D ECHO
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
                  What is 2D ECHO?
                </h1>

                <p className="text-lg mt-2 flex">
                  2D ECHO, also known as 2D Echocardiography, is a non-invasive
                  ultrasound test that uses sound waves to create real-time
                  images of the heart. This test helps doctors evaluate the
                  heart's structure and function, including the heart chambers,
                  valves, and blood flow. Unlike a standard X-ray, 2D ECHO
                  provides a detailed view of the heart’s anatomy, allowing
                  healthcare providers to diagnose various heart conditions such
                  as valve problems, heart failure, and congenital heart
                  defects. The procedure is painless, safe, and typically takes
                  about 30-60 minutes.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/echo.jpeg"
                  className="rounded-md lg:-ml-10"
                  width={1000}
                  height={1000}
                  alt="2d-echo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[700px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className=" h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 lg:ml-5 p-4">
                <Image
                  src="/services/2d-echo2.jpg"
                  className="rounded-md lg:mt-10"
                  width={1000}
                  height={1000}
                  alt="2d-echo"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for 2D ECHO:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Wear Comfortable Clothing:
                    </span>
                    Wear loose, comfortable clothing that allows easy access to
                    your chest area. You may be asked to change into a gown
                    during the procedure.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Eating or Drinking Before the Test:
                    </span>
                    In some cases, you may be asked to avoid eating or drinking
                    for 3-4 hours before the procedure, especially if it
                    involves the use of a contrast agent. Check with your doctor
                    for specific instructions.
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
                    Let your healthcare provider know about any medications
                    you're taking, especially heart-related medications. Some
                    medications may need to be adjusted or temporarily stopped
                    before the test.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Discuss Pre-existing Conditions:
                    </span>
                    Inform the technician or doctor if you have any pre-existing
                    heart conditions, such as a pacemaker or a history of heart
                    surgeries. This information helps them to adjust the
                    procedure accordingly.
                  </div>
                </p>
              </div>
            </div>

            <div className="lg:grid grid-cols-12 lg:-mt-12 -mt-3">
              <div className="col-start-4 col-span-6">
                <p className="text-lg flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Stay Relaxed During the Procedure:
                    </span>
                    While undergoing the 2D ECHO, you’ll need to lie down on
                    your back or left side. It’s essential to stay still and
                    relaxed to get clear images of your heart.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Applying Lotions or Oils:
                    </span>
                    On the day of the test, avoid using lotions, oils, or creams
                    on your chest area, as they may interfere with the
                    ultrasound gel used during the procedure.
                  </div>
                </p>

                <p className="ml-10 font-semibold text-xl mt-5 lg:pb-0 pb-5">
                  2D ECHO is a safe, effective diagnostic tool that provides
                  vital information about your heart health. The procedure is
                  quick, painless, and plays a crucial role in detecting and
                  managing various heart conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twodecho;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
const Uroflowmetry = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/services/uroflowmetry.png`}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
          alt="uroflowmetry"
        />
        <div className="bg-lightblue absolute inset-0 opacity-70"></div>
        <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
          <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
            Uroflowmetry
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
                  What is Uroflowmetry?
                </h1>

                <p className="text-lg mt-2 flex">
                  Uroflowmetry is a diagnostic test that measures the flow rate
                  and pattern of urine as it is passed from the bladder through
                  the urethra. This test helps doctors evaluate how well the
                  urinary system is functioning and can help diagnose conditions
                  such as urinary tract obstructions, bladder dysfunction, or
                  prostate issues in men. The results of uroflowmetry provide
                  information about the speed of urination, the volume of urine,
                  and whether the bladder is emptying properly.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/uroflowmetry.png"
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  alt="uroflowmetry"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[730px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/"
                  className="rounded-md mt-10"
                  width={1000}
                  height={1000}
                  alt="uroflowmetry"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for Uroflowmetry:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Consult Your Doctor: </span>
                    Before the test, discuss any symptoms you are experiencing,
                    such as difficulty urinating or pain. Inform your doctor
                    about any medications or health conditions that may affect
                    the test, especially those that impact the urinary system.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Hydration: </span>
                    You may be asked to drink fluids before the test to ensure
                    your bladder is full enough for an accurate reading. Avoid
                    excessive intake, as overhydration may cause discomfort.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Empty Your Bladder: </span>
                    In some cases, you may be asked to empty your bladder just
                    before the test to ensure it starts at a typical level of
                    fullness, allowing the measurement to be accurate.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Using Diuretics:{" "}
                    </span>
                    If you are taking medications such as diuretics, your doctor
                    may advise you to stop taking them temporarily before the
                    test. These medications can increase urine production and
                    affect the results.
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
                    <span className="font-semibold">
                      Wear Comfortable Clothing:{" "}
                    </span>
                    Wear clothing that is easy to remove, as you will be
                    required to urinate into a special device. This helps ensure
                    ease and privacy during the procedure.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Plan for Privacy:</span>
                    Uroflowmetry is typically performed in a private setting
                    where you will urinate into a measuring device. You may be
                    asked to void in a private bathroom while the equipment
                    records the data.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5 lg:pb-0 pb-3">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Caffeine and Alcohol:{" "}
                    </span>
                    These substances can affect bladder function and may alter
                    the results. It is best to avoid consuming caffeine or
                    alcohol for at least 24 hours before the test.
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
              src="https://www.youtube.com/embed/5VmMUG0TDlA?si=mqvLqmh7wnmmk6r1"
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

export default Uroflowmetry;

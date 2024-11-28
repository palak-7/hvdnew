import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
const Ncv = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/services/ncv.png`}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
          alt="service"
        />
        <div className="bg-lightblue absolute inset-0 opacity-70"></div>
        <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
          <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
            Nerve Conduction Velocity (NCV)
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
                  What is Nerve Conduction Velocity (NCV)?
                </h1>

                <p className="text-lg mt-2 flex">
                  Nerve Conduction Velocity (NCV) is a diagnostic test that
                  measures the speed at which electrical signals travel along a
                  nerve. The test evaluat During the test, small electrodes are
                  placed on the skin over the nerve being testedes the function
                  of the peripheral nerves, which are responsible for
                  transmitting signals from the brain and spinal cord to the
                  rest of the body. NCV is commonly used to diagnose conditions
                  such as neuropathy, carpal tunnel syndrome, herniated discs,
                  and nerve damage due to injury or diseases like diabetes.
                </p>

                <p className="text-lg mt-2 flex">
                  A mild electrical impulse is applied, and the time it takes
                  for the nerve to respond is measured. The results help doctors
                  assess nerve health, detect abnormalities, and determine the
                  cause of symptoms such as numbness, weakness, or pain.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/ncv.png"
                  className="rounded-md lg:-ml-10"
                  width={1000}
                  height={1000}
                  alt="ncv"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[770px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/ncv2.jpg"
                  className="rounded-md lg:ml-10 lg:mt-10"
                  width={1000}
                  height={1000}
                  alt="ncv"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for Nerve Conduction Velocity (NCV)?
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Consult Your Doctor: </span>
                    Before the test, inform your doctor about any medical
                    conditions, allergies, or medications you are taking. Some
                    conditions or medications may affect the test results, and
                    your doctor might ask you to temporarily adjust your
                    medication.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Applying Lotion or Creams:{" "}
                    </span>
                    Do not apply lotions, oils, or creams on the skin where the
                    electrodes will be placed. These substances can interfere
                    with the electrode’s ability to make good contact with the
                    skin, affecting the accuracy of the test.
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
                    Choose loose and comfortable clothing that allows easy
                    access to the areas being tested. You may be asked to remove
                    clothing in the test area to ensure proper electrode
                    placement.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Inform About Nerve Pain:{" "}
                    </span>
                    If you experience nerve pain, tingling, or any unusual
                    sensations, inform the healthcare provider conducting the
                    test. This information helps them understand your symptoms
                    and choose the appropriate nerve for testing.
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
                    <span className="font-semibold">Avoid Stimulants:</span>
                    It’s best to avoid consuming caffeine or nicotine prior to
                    the test, as these can affect the nerve’s responsiveness and
                    alter the results of the NCV.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Be Prepared for Sensory Sensations:{" "}
                    </span>
                    The test involves mild electrical impulses that may cause a
                    tingling or mild shock-like sensation. This is normal and
                    should not cause significant discomfort, but let your
                    healthcare provider know if it becomes painful.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5 lg:pb-0 pb-3">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Follow Post-Test Instructions:{" "}
                    </span>
                    After the test, you may be given specific guidelines for
                    recovery or to manage any temporary discomfort. Generally,
                    there are no restrictions, but it’s important to follow your
                    doctor’s advice.
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

export default Ncv;

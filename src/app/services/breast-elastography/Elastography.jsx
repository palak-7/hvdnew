import React from "react";
import { servicesdata } from "@/data/serviceData";
import Head from "@/components/common/head/Head";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
const Elastography = () => {
  return (
    <div>
      <Head service={servicesdata[4]} />

      {/* ques 2 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 my-10 lg:ml-[-50%] lg:h-[400px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue dark:text-black">
          <div className="lg:flex items-center justify-center h-full">
            <div className="lg:grid grid-cols-12 items-center flex flex-col-reverse lg:0">
              <div className="col-span-4 col-start-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  What is Elastography?
                </h1>

                <p className="text-lg mt-2 flex">
                  Elastography is a specialized ultrasound technique used to
                  measure the stiffness or elasticity of tissue, often used to
                  detect abnormalities in organs like the liver, breast, and
                  thyroid. In breast elastography, it helps differentiate
                  between benign and potentially malignant lumps by assessing
                  the stiffness of the breast tissue. Malignant tumors often
                  feel firmer than benign lumps, so elastography provides
                  valuable diagnostic information. It’s a non-invasive, painless
                  procedure that can support early diagnosis and reduce the need
                  for invasive biopsies.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/breastelastography.png"
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  alt="color-doppler"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[500px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/"
                  className="rounded-md mt-10"
                  width={1000}
                  height={1000}
                  alt="breast-elastography"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for Breast Elastography:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                     Wear Comfortable, Loose-Fitting Clothing: </span>
                    This makes it easier to access the breast area. You may also
                    be asked to wear a hospital gown during the procedure.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                       Avoid Using Deodorants or Creams: </span>
                    On the day of your appointment, avoid applying deodorants,
                    powders, or lotions on the chest area, as these can
                    interfere with imaging.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                       Provide Medical History: </span>
                    Inform your healthcare provider about any previous breast
                    surgeries, implants, or known issues, as these can affect
                    the results.
                  </div>
                </p>

                <p className="text-lg flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Discuss Medications and Health Conditions: </span>
                    Share any medications you are taking and any current health
                    conditions with your doctor to ensure a smooth and safe
                    procedure.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Stay Relaxed: </span>
                    Arriving a few minutes early to relax can be helpful, as
                    calmness aids in accurate imaging.
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

export default Elastography;

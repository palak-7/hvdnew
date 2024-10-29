import React from "react";
import { servicesdata } from "@/data/serviceData";
import Head from "@/components/common/head/Head";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";

const Fibroscan = () => {
  return (
    <div className="dark:bg-white">
      <Head service={servicesdata[3]} />
      {/* <div className="lg:relative">
        <Image
          src="/services/xray/overview2.png"
          width={10000}
          height={10000}
          className="w-full"
          alt="overview2"
        />
        <div className="lg:absolute inset-0 lg:grid grid-cols-12 dark:text-black">
          <div className="flex items-center -mt-10 col-start-2 col-span-6">
            <div className="lg:bg-white p-4 bg-opacity-70 rounded-md">
              <h1 className="font-extrabold text-4xl">
                {servicesdata[0].content[0].ques}
              </h1>
              <p className="lg:text-xl font-semibold leading-relaxed">
                {servicesdata[0].content[0].ans}
              </p>
              <div className="mt-3">
                <Link
                  className="bg-lightgreen py-2 px-3 rounded-md text-white shadow-sm shadow-gray-400"
                  href="/"
                >
                  Contact us for best Digital X-Ray Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* ques 2 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 my-10 lg:ml-[-50%] lg:h-[400px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue dark:text-black">
          <div className="lg:flex items-center justify-center h-full">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-4 col-start-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  What is Fibroscan?
                </h1>
                <p className="text-lg mt-3">
                  The FibroScan is a noninvasive way to gauge the health of your
                  liver and determine what stage of liver disease you and your
                  care team might be up against. Earlier, there was only
                  invasive biopsy to measure the liver stiffness. With the
                  FibroScan, liver stiffness is measured, which indicates
                  whether or not scarring is present, and which can also
                  indicate the extent of the scarring.{" "}
                </p>

                <p className="text-lg mt-3">
                  Scarring of the liver in the initial stages is called
                  fibrosis, and more severe scarring is cirrhosis. The FibroScan
                  is like a fibrosis scan that can use scarring measurements to
                  provide a diagnosis or to track the progression of liver
                  disease.
                </p>
              </div>
              <div className="col-span-2 p-4">
                <div>
                  <Image
                    src="/services/fabroscan/fabroscan.jpg"
                    className="rounded-md"
                    width={1000}
                    height={1000}
                    alt="fabroscan"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[450px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="lg:flex items-center justify-center h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4">
                <div>
                  <Image
                    src="/services/fabroscan/fabroscan1.jpg"
                    className="rounded-md"
                    width={1000}
                    height={1000}
                    alt="xray"
                  />
                </div>
              </div>
              <div className="col-span-4 p-5">
                <h1 className="text-primary font-extrabold text-4xl">
                  How do I prepare for my FibroScan?
                </h1>
                <p className="text-lg mt-2">
                  FibroScan preparation is simple and straightforward. On the
                  day of your procedure, do not eat or drink anything 3 hours
                  before your test. You should wear comfortable clothes (e.g.
                  shirt, loose dress) that can be moved/repositioned to allow
                  the nurse to examine your right upper abdomen. Please do not
                  wear any tight clothing to your appointment.
                  <br />
                  <strong>GOOD NEWS: FIBROSCAN IS PAINLESS TEST</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ques 4 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 my-10 lg:ml-[-50%] lg:h-[400px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue dark:text-black">
          <div className="lg:flex items-center justify-center h-full">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-4 col-start-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  What should I expect during the FibroScan?
                </h1>
                <p className="text-lg mt-2">
                  During the exam, you will be lying down on your back with the
                  right arm raised and tucked behind your head. Preparation
                  includes no food or drink three hours before the exam and you
                  may wish to wear a looser fitting shirt as the skin covering
                  your right rib cage area will need to be exposed in order to
                  complete the exam. A doctor will place a probe, on your side
                  near where your liver is. That probe sends painless sound
                  vibration through your body and into your liver. The probe
                  measures how fast it takes the vibration to travel through the
                  liver. The faster it takes the vibration to travel through the
                  liver, the stiffer the liver is. The examination itself takes
                  about 10-15 minutes. You should plan to spend about 45 minutes
                  at the clinic total. You may drive yourself to and from the
                  test.
                </p>
              </div>
              <div className="col-span-2 p-4">
                <div>
                  <Image
                    src="/services/fabroscan/fabroscan2.jpg"
                    className="rounded-md"
                    width={1000}
                    height={1000}
                    alt="xray"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Oues 5 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[500px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="lg:flex items-center justify-center h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <div>
                  <Image
                    src="/services/liver-fibroscan.jpg"
                    className="rounded-md"
                    width={1000}
                    height={1000}
                    alt="xray"
                  />
                </div>
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-2xl">
                  Your physician may recommend a FibroScan test if you have one
                  of the following chronic liver conditions:
                </h1>

                <table className="text-lg mt-3 w-full">
                  <tbody>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        Autoimmune Hepatitis
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">Cirrhosis</td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        Genetic Diseases (such as Hemochromatosis and Wilson’s
                        Disease)
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">Hepatitis B</td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">Hepatitis C</td>
                    </tr>

                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        Alcoholic Liver Disease
                      </td>
                    </tr>

                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        Non-Alcoholic Steatohepatitis (NASH)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ques 6 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[200px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="lg:flex items-center justify-center h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-start-3 col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-2xl">
                  What Should I expect after the FibroScan?
                </h1>
                <p className="text-lg mt-2">
                  The FibroScan computer will analyze the information from your
                  test.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fibroscan;

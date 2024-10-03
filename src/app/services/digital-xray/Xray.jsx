import React from "react";
import { servicesdata } from "@/data/serviceData";
import Head from "@/components/common/head/Head";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

const Xray = () => {
  return (
    <div>
      <Head service={servicesdata[0]} />
      <div className="lg:relative">
        <Image
          src="/services/xray/overview2.png"
          width={10000}
          height={10000}
          className="w-full"
        />
        <div className="lg:absolute inset-0 lg:grid grid-cols-12">
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
      </div>
      {/* ques 2 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 my-10 lg:ml-[-50%] lg:h-[400px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="lg:flex items-center justify-center h-full">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-4 col-start-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  {servicesdata[0].content[1].ques}
                </h1>
                <p className="text-lg mt-3">{servicesdata[0].content[1].ans}</p>
              </div>
              <div className="col-span-2 p-4">
                <div>
                  <Image
                    src="/services/xray/xray-1.png"
                    className="rounded-md"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[600px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="lg:flex items-center justify-center h-full">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <div>
                  <Image
                    src="/services/xray/xray-2.png"
                    className="rounded-md"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  {servicesdata[0].content[2].ques}
                </h1>
                <p className="text-lg mt-2">
                  Preparation for an X-ray depends on the type of X-ray you’re
                  getting. Your provider may ask you to:
                </p>
                <table className="text-lg mt-3 w-full">
                  <tbody>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        Avoid using lotions, creams, or perfume. These can cause
                        shadows on your X-rays and make the results inaccurate.
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        Remove metal objects like jewelry, hairpins, or hearing
                        aids. Metal can interfere with X-rays and make the
                        results inaccurate.
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        Stop eating or drinking several hours beforehand.
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        Wear comfortable clothing or change into a gown before
                        the X-ray.
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        Tell your healthcare provider about your health history,
                        allergies, and any medications you’re taking. If you’re
                        pregnant, think you might be pregnant, or are
                        breastfeeding (chestfeeding), tell your provider before
                        getting an X-ray. If you’re getting an X-ray with
                        contrast, let your provider know if you have a kidney
                        condition.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xray;

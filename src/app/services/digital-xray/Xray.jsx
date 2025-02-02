import React from "react";
import { servicesdata } from "@/data/serviceData";
import Head from "@/components/common/head/Head";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";

const Xray = () => {
  return (
    <div className="dark:bg-white">
      <Head service={servicesdata[0]} />
      {/* ques 2 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 my-10 lg:ml-[-50%] lg:h-[400px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue dark:text-black">
          <div className="lg:flex items-center justify-center h-full">
            <div className="lg:grid grid-cols-12 items-center flex flex-col-reverse lg:0">
              <div className="col-span-4 col-start-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  {servicesdata[0].content[1].ques}
                </h1>
                <p className="text-lg mt-3">{servicesdata[0].content[1].ans}</p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/digital-xray.jpeg"
                  className="rounded-md lg:-ml-10"
                  width={1000}
                  height={1000}
                  alt="xray"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[600px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="lg:flex items-center justify-center h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <div>
                  <Image
                    src="/services/digi-xray.jpg"
                    className="rounded-md lg:ml-10 lg:mt-10"
                    width={1000}
                    height={1000}
                    alt="xray"
                  />
                </div>
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  {servicesdata[0].content[2].ques}
                </h1>
                <p className="text-lg mt-2">
                  Preparation for an X-ray depends on the type of X-ray
                  you&apos;re getting. Your provider may ask you to:
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

      <div className="grid grid-cols-12 bg-skyblue mb-4">
        <div className="col-span-12 md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-4 py-4">
          <div
            className="relative"
            style={{ paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full p-5 lg:p-0 rounded-2xl"
              src="https://www.youtube.com/embed/fdwI5AzTDQQ?si=04B-ZDjrfMjGeJ7v"
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

export default Xray;

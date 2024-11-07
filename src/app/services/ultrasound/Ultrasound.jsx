import React from "react";
import { servicesdata } from "@/data/serviceData";
import Head from "@/components/common/head/Head";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
const Ultrasound = () => {
  return (
    <div className=" dark:bg-white">
      <Head service={servicesdata[1]} />
      <div className="lg:relative">
        <Image
          src="/services/ultrasound/overview.png"
          width={10000}
          height={10000}
          className="w-full"
          alt="overview2"
        />
        <div className="lg:absolute inset-0 lg:grid grid-cols-12">
          <div className="flex items-center -mt-10 col-start-2 col-span-6">
            <div className="lg:bg-white p-4 bg-opacity-70 rounded-md dark:text-black lg:mt-0 mt-10">
              <h1 className="font-extrabold text-4xl">
                {servicesdata[1].content[0].ques}
              </h1>
              <p className="lg:text-xl font-semibold leading-relaxed">
                {servicesdata[1].content[0].ans}
              </p>
              <div className="mt-3">
                <Link
                  className="bg-lightgreen py-2 px-3 rounded-md text-white shadow-sm shadow-gray-400"
                  href="/contact"
                >
                  Contact us for best Liver fibroscan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 2 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[550px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="lg:flex items-center justify-center h-full">
            <div className="lg:grid grid-cols-12 items-center dark:text-black">
              <div className="col-span-2 col-start-4 p-4">
                <div>
                  <Image
                    src="/services/ultrasound/ultrasound-2.png"
                    className="rounded-md"
                    width={1000}
                    height={1000}
                    alt="ultrasound"
                  />
                </div>
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary text-lg font-bold">
                  Ultrasound is highly effective so can be used for a range of
                  medical concerns:
                </h1>
                <table className="text-lg mt-3 w-full">
                  <tbody>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        The urinary tract or KUB (kidneys, ureters and bladder)
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        Upper / lower abdomen and pelvis
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        Fetal well being (Obstetrics scan)
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">Anomaly scan</td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        Gynaecological (female pelvis)
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">Neck</td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">Thyroid</td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        Prostate and testicular
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        Musculoskeletal (MSK)
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">Soft tissue</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[400px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="lg:flex items-center justify-center h-full">
            <div className="lg:grid grid-cols-12 items-center dark:text-black flex flex-col-reverse">
              <div className="col-span-4 col-start-4 p-5 lg:p-14">
                <h1 className="text-primary text-lg font-bold mb-5">
                  An ultrasound is also a helpful way to guide interventinal
                  radiologist/surgeon’ movements during certain medical
                  procedures, such as biopsies.
                </h1>
                <h1 className="text-primary text-4xl font-bold">
                  Advantages of Ultrasounds:
                </h1>
                <table className="text-lg mt-3 w-full">
                  <tbody>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        Ultrasound captures highly detailed images of the soft
                        tissues that do not usually appear well on X-rays
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        They also enable real-time imaging
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        They have no risk of radiation
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-span-2 p-4">
                <div>
                  <Image
                    src="/services/ultrasound/ultrasound-3.png"
                    className="rounded-md"
                    width={1000}
                    height={1000}
                    alt="ultrasound"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 4 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[500px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="lg:flex items-center justify-center h-full">
            <div className="lg:grid grid-cols-12 items-center dark:text-black">
              <div className="col-span-2 col-start-4 p-4">
                <div>
                  <Image
                    src="/services/ultrasound/ultrasound-4.png"
                    className="rounded-md"
                    width={1000}
                    height={1000}
                    alt="ultrasound"
                  />
                </div>
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary text-4xl font-bold">
                  How do I prepare for an ultrasound?
                </h1>
                <table className="text-lg mt-3 w-full">
                  <tbody>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        The steps you will take to prepare for an ultrasound
                        will depend on the area or organ that is being examined.
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        Your doctor may tell you to fast for 4 to 6 hours before
                        your ultrasound, especially if your abdomen is being
                        examined. Undigested food can block the sound waves,
                        making it difficult for the technician to get a clear
                        picture.
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top">
                        <MdArrowRightAlt className="mr-2 mt-3" />
                      </td>
                      <td className="flex items-start p-2">
                        For an examination of the gallbladder, liver, pancreas,
                        or spleen, you may be told to eat a fat-free meal the
                        evening before your test and then to fast until the
                        procedure. However, you can continue to drink water and
                        take any medications as instructed. For other
                        examinations, you may be asked to drink a lot of water
                        and to hold your urine so that your bladder is full and
                        better visualized.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="lg:grid grid-cols-12 bg-skyblue mb-4">
        <div className="col-start-2 col-span-4 py-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0RL2QgdGK7o?si=-IF-DQ88hqx7BcCR"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div> */}

      <div className="lg:grid grid-cols-12 bg-skyblue mb-4">
        <div className="col-span-12 md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-4 py-4">
          <div
            className="relative"
            style={{ paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full p-5 lg:p-0 rounded-2xl"
              src="https://www.youtube.com/embed/0RL2QgdGK7o?si=-IF-DQ88hqx7BcCR"
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

export default Ultrasound;

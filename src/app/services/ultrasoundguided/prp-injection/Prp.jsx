import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
const Prp = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/services/ultrasoundguided/prp-injection1.jpg`}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
          alt="prp"
        />
        <div className="bg-lightblue absolute inset-0 opacity-70"></div>
        <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
          <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
            PRP Injection
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
                  What is PRP Injection?
                </h1>

                <p className="text-lg mt-2 flex">
                  PRP (Platelet-Rich Plasma) injection is a medical treatment
                  that uses a patient’s own blood to promote healing and tissue
                  regeneration. The process involves drawing a small amount of
                  blood from the patient, which is then processed in a
                  centrifuge to concentrate the platelets, which are rich in
                  growth factors. The concentrated plasma is injected into the
                  area needing treatment, such as joints, muscles, tendons, or
                  ligaments. PRP injections are commonly used to treat
                  conditions like tendonitis, osteoarthritis, muscle injuries,
                  and hair loss.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/ultrasoundguided/prp-injection1.jpg"
                  className="rounded-md lg:-ml-10"
                  width={1000}
                  height={1000}
                  alt="prp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[790px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className="h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/ultrasoundguided/prp-injection2.png"
                  className="rounded-md lg:ml-10 lg:mt-14"
                  width={1000}
                  height={1000}
                  alt="prp"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for PRP Injection:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Wear Comfortable Clothing:{" "}
                    </span>
                    On the day of the procedure, wear loose, comfortable
                    clothing, especially around the area being treated (e.g.,
                    knee, shoulder, or scalp).
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Stay Hydrated: </span>
                    Drink plenty of water before the procedure to help ensure a
                    smooth blood draw and optimal PRP concentration.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Avoid Blood Thinners:{" "}
                    </span>
                    Inform your doctor if you are taking blood-thinning
                    medications like aspirin, warfarin, or anti-inflammatory
                    drugs. You may need to stop taking these medications for a
                    few days prior to the procedure to reduce the risk of
                    bruising or bleeding.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Fasting Guidelines (if required):{" "}
                    </span>
                    If your PRP injection involves anesthesia, you may be asked
                    to fast for several hours before the procedure
                  </div>
                </p>
              </div>
            </div>

            <div className="lg:grid grid-cols-12 lg:-mt-12">
              <div className="col-start-4 col-span-6">
                <p className="text-lg flex px-5 -mt-3">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Inform Your Doctor About Health Conditions:{" "}
                    </span>
                    Share your medical history, including any allergies, chronic
                    conditions, or ongoing treatments. This will help ensure the
                    procedure is safe for you.
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
                    The procedure involves a blood draw and an injection into
                    the target area.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">Post-Procedure Care: </span>
                    After the injection, you may experience swelling, redness,
                    or mild soreness at the injection site. You should rest the
                    treated area and avoid strenuous activities for a few days.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                      Arrange for Transportation (if necessary):{" "}
                    </span>
                    If sedation or local anesthesia is used, arrange for someone
                    to drive you home, as you may feel drowsy after the
                    procedure.
                  </div>
                </p>

                <p className="text-lg mt-5 font-semibold px-5 lg:pb-0 pb-3">
                  PRP injections offer an effective, minimally invasive
                  treatment option for various musculoskeletal conditions and
                  promote natural healing. By using your body’s own healing
                  factors, PRP helps stimulate recovery without the need for
                  surgery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prp;

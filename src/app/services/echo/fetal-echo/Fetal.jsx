import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
const Fetal = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/services/`}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
          alt="fetal-echo"
        />
        <div className="bg-lightblue absolute inset-0 opacity-70"></div>
        <div className=" absolute inset-0 text-center text-white  grid grid-rows-8">
          <div className="row-start-2 mt-6 font-bold font-serif text-5xl">
            Fetal ECHO
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
                  What is Fetal Echo?
                </h1>

                <p className="text-lg mt-2 flex">
                  A Fetal Echo, or fetal echocardiogram, is a specialized
                  ultrasound procedure used to assess the heart of an unborn
                  baby (fetus). It uses high-frequency sound waves to create
                  detailed images of the baby’s heart, allowing doctors to check
                  for congenital heart defects or abnormalities in the heart's
                  structure and function. This procedure is often performed when
                  there is a concern about the baby's heart, such as if a parent
                  has a family history of heart disease, if an earlier
                  ultrasound has shown abnormalities, or if the mother has
                  medical conditions that could affect the baby’s heart. A fetal
                  echo is non-invasive, safe, and typically performed during the
                  second trimester, usually around 18-22 weeks of pregnancy.
                </p>
              </div>
              <div className="col-span-2 lg:p-10 p-5">
                <Image
                  src="/services/"
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  alt="fetal-echo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ques 3 */}
      <div className="overflow-x-hidden">
        <div className="bottom-0 mb-10 lg:ml-[-50%] lg:h-[800px] lg:w-[200%] lg:rounded-t-[100%] lg:rounded-b-[100%] bg-skyblue">
          <div className=" h-full dark:text-black">
            <div className="lg:grid grid-cols-12 items-center">
              <div className="col-span-2 col-start-4 p-4">
                <Image
                  src="/services/"
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  alt="fetal-echo"
                />
              </div>
              <div className="col-span-4 p-5 lg:p-14">
                <h1 className="text-primary font-extrabold text-4xl">
                  How to Prepare for Fetal Echo:
                </h1>
                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                       Consult Your Doctor:
                    </span>
                    Discuss with your healthcare provider whether a fetal echo
                    is necessary. They may refer you for this test based on risk
                    factors or if they detect potential issues during routine
                    ultrasounds.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                     Wear Comfortable Clothing:
                    </span>
                    On the day of the test, wear loose and comfortable clothing.
                    You may be asked to expose your abdomen for the ultrasound
                    procedure.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                       Ensure a Full Bladder (if instructed):
                    </span>
                    In some cases, you may be asked to drink water before the
                    test to ensure a full bladder, which helps provide clearer
                    images of the fetus during the procedure. Follow your
                    doctor’s instructions carefully.
                  </div>
                </p>

                <p className="text-lg mt-2 flex">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                       Avoid Eating (if necessary):
                    </span>
                    You may be advised to avoid eating for 1-2 hours before the
                    procedure to ensure optimal imaging, although this is
                    typically not required for fetal echo.
                  </div>
                </p>
              </div>
            </div>

            <div className="lg:grid grid-cols-12">
              <div className="col-start-4 col-span-6">
                <p className="text-lg flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                       Prepare for a Longer Appointment:
                    </span>
                    Fetal echocardiograms can take 30-60 minutes or longer,
                    depending on the baby’s position and the complexity of the
                    test. Bring any necessary support and be prepared for the
                    test to take time.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                       Relax During the Test:
                    </span>
                    Stay relaxed, as it may take some time to get clear images
                    of the heart. The technician may ask you to shift positions
                    to help get the best possible view.
                  </div>
                </p>

                <p className="text-lg mt-2 flex px-5">
                  <div>
                    <MdArrowRightAlt className="mr-2 mt-1" />
                  </div>
                  <div>
                    <span className="font-semibold">
                       Do Not Apply Lotion or Oils:
                    </span>
                    On the day of the procedure, avoid applying lotions, oils,
                    or creams on your abdomen, as they may interfere with the
                    ultrasound gel used during the test.
                  </div>
                </p>

                <p className="ml-10 font-semibold text-xl">
                  Fetal echo is a valuable tool to identify heart conditions in
                  unborn babies, ensuring early diagnosis and treatment if
                  necessary, and providing peace of mind to expecting parents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fetal;

import React from "react";
import Image from "next/image";
const Testimonials = () => {
  return (
    <div>
      <div className="bg-skyblue pb-3">
        <div className="text-center pt-10">
          <h1 className="text-lightblue text-3xl font-extrabold mb-2">
            Testimonials
          </h1>
          <p className="text-lightblue text-lg">What our customers say</p>
        </div>
        <div className="lg:grid grid-cols-3 mx-5 space-x-4 ">
          <section className="bg-white mb-10 mt-5 dark:bg-gray-900 border-lightgreen border-2 rounded-[10%]">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-6 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto text-lightgreen dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <figcaption className="flex items-center justify-center my-2 space-x-3">
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      Ritu Battan
                    </div>
                    <div className="flex pl-3">
                      <Image
                        width={100}
                        height={100}
                        src="/testimonials/star.png"
                        className="w-[30px] h-[30px]"
                        alt="star"
                      />
                      <Image
                        width={100}
                        height={100}
                        src="/testimonials/star.png"
                        className="w-[30px] h-[30px]"
                        alt="star"
                      />
                      <Image
                        width={100}
                        height={100}
                        src="/testimonials/star.png"
                        className="w-[30px] h-[30px]"
                        alt="star"
                      />
                      <Image
                        width={100}
                        height={100}
                        src="/testimonials/star.png"
                        className="w-[30px] h-[30px]"
                        alt="star"
                      />
                      <Image
                        width={100}
                        height={100}
                        src="/testimonials/star.png"
                        className="w-[30px] h-[30px]"
                        alt="star"
                      />
                    </div>
                  </div>
                </figcaption>
                <blockquote>
                  <p className=" font-medium text-gray-500 dark:text-white">
                    I highly recommend health vista Diagnostic for their
                    professionalism and accuracy. The staff made me feel
                    comfortable during the tests, and the results were delivered
                    in a timely manner. A reliable choice for health vista
                    diagnostics
                  </p>
                </blockquote>
              </figure>
            </div>
          </section>
          <section className="bg-white mb-10 mt-5 dark:bg-gray-900 border-lightgreen border-2 rounded-[10%]">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-6 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto text-lightgreen dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <figcaption className="flex items-center justify-center my-2 space-x-3">
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      Vani Kucchal
                    </div>
                    <div className="flex pl-3">
                      <Image
                        width={100}
                        height={100}
                        src="/testimonials/star.png"
                        className="w-[30px] h-[30px]"
                        alt="star"
                      />
                      <Image
                        width={100}
                        height={100}
                        src="/testimonials/star.png"
                        className="w-[30px] h-[30px]"
                        alt="star"
                      />
                      <Image
                        width={100}
                        height={100}
                        src="/testimonials/star.png"
                        className="w-[30px] h-[30px]"
                        alt="star"
                      />
                      <Image
                        width={100}
                        height={100}
                        src="/testimonials/star.png"
                        className="w-[30px] h-[30px]"
                        alt="star"
                      />
                      <Image
                        width={100}
                        height={100}
                        src="/testimonials/star.png"
                        className="w-[30px] h-[30px]"
                        alt="star"
                      />
                    </div>
                  </div>
                </figcaption>
                <blockquote>
                  <p className=" font-medium text-gray-500 dark:text-white">
                    We had a very good experience at HVD. The doctors and staff
                    were very helpful and attentive to our queries!! Good job
                    Team HVD !
                  </p>
                </blockquote>
              </figure>
            </div>
          </section>
          <section className="bg-white mb-10 mt-5 dark:bg-gray-900 border-lightgreen border-2 rounded-[10%]">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-6 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto text-lightgreen dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <figcaption className="flex items-center justify-center my-2 space-x-3">
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      Nitesh Gupta
                    </div>
                    <div className="flex pl-3">
                      <Image
                        width={100}
                        height={100}
                        src="/testimonials/star.png"
                        className="w-[30px] h-[30px]"
                        alt="star"
                      />
                      <Image
                        width={100}
                        height={100}
                        src="/testimonials/star.png"
                        className="w-[30px] h-[30px]"
                        alt="star"
                      />
                      <Image
                        width={100}
                        height={100}
                        src="/testimonials/star.png"
                        className="w-[30px] h-[30px]"
                        alt="star"
                      />
                      <Image
                        width={100}
                        height={100}
                        src="/testimonials/star.png"
                        className="w-[30px] h-[30px]"
                        alt="star"
                      />
                      <Image
                        width={100}
                        height={100}
                        src="/testimonials/star.png"
                        className="w-[30px] h-[30px]"
                        alt="star"
                      />
                    </div>
                  </div>
                </figcaption>
                <blockquote>
                  <p className=" font-medium text-gray-500 dark:text-white">
                    Excellent infrastructure and the staff is extremely helpful
                    and polite... Doctors are very polite and highly competent..
                    I would highly recommend HEALTH VISTA DIAGNOSTICS to each
                    and everyone.
                  </p>
                </blockquote>
              </figure>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

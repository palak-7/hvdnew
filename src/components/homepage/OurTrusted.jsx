import React from "react";
import Image from "next/image";

const OurTrusted = () => {
  return (
    <div className="bg-bgclr">
      <div className="text-center">
        <h1 className="text-primary text-4xl pt-12">
          <strong>Our Trusted Suppliers</strong>
        </h1>
        <h3 className="text-primary text-2xl font-semibold pt-3 px-5">
          Partnering with Industry Leaders for Quality and Innovation
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 lg:mx-32 px-5 lg:py-10">
        <div className="flex items-center justify-center">
          <div className="p-5 rounded-3xl shadow-transparent w-full max-w-[200px] sm:max-w-[250px] lg:max-w-none">
            <Image
              src="/ourtrusted/samsung-logo.png"
              width={1000}
              height={1000}
              className="h-auto w-full"
              alt="Samsung Logo"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="p-5 rounded-3xl shadow-transparent w-full max-w-[200px] sm:max-w-[250px] lg:max-w-none">
            <Image
              src="/ourtrusted/fujifilmlogo.png"
              width={1000}
              height={1000}
              className="h-auto w-full"
              alt="fujifilm Logo"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="p-5 rounded-3xl shadow-transparent w-full max-w-[200px] sm:max-w-[250px] lg:max-w-none">
            <Image
              src="/ourtrusted/schiller.png"
              width={1000}
              height={1000}
              className="h-auto w-full lg:w-[150px]"
              alt="Schiller America Logo"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="p-5 rounded-3xl shadow-transparent w-full max-w-[200px] sm:max-w-[250px] lg:max-w-none">
            <Image
              src="/ourtrusted/transasia.png"
              width={1000}
              height={1000}
              className="h-auto w-full"
              alt="Transasia Logo"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="p-5 rounded-3xl shadow-transparent w-full max-w-[200px] sm:max-w-[250px] lg:max-w-none">
            <Image
              src="/ourtrusted/allengers.png"
              width={1000}
              height={1000}
              className="h-auto w-full"
              alt="Allengers Logo"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="p-5 rounded-3xl shadow-transparent w-full max-w-[200px] sm:max-w-[250px] lg:max-w-none">
            <Image
              src="/ourtrusted/cardio-vision.png"
              width={1000}
              height={1000}
              className="h-auto w-full"
              alt="Cardio Vision Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTrusted;

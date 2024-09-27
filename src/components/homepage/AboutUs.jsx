import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";
const AboutUs = () => {
  return (
    <div className="bg-skyblue mt-[1000px] lg:mt-0">
      <div className="lg:grid grid-cols-12 mx-3 lg:mx-28 pt-10">
        <div className="col-start-1 col-span-4">
          <h1 className="text-lightblue text-2xl font-extrabold mb-6">
            About Us
          </h1>
          <p className="text-gray-600 text-sm mb-6">
            At Health Vista Diagnostics, your well-being is our top priority. We
            are a trusted, family-owned diagnostic center committed to providing
            compassionate and comprehensive care. Our team believes in listening
            to our patients and addressing their concerns with empathy and
            clarity. We go beyond standard diagnostics by offering in-house
            interventional radiology services and collaborating closely with
            your doctors to support your treatment and management. With a focus
            on integrity and personalized care, we strive to guide you toward
            optimal health outcomes.
          </p>
          <Link
            href="/"
            className="bg-lightgreen rounded-lg text-white py-2 px-3"
          >
            Know More
          </Link>
        </div>
        <div className="col-start-6 mt-5 lg:mt-0 col-span-8 relative mb-10">
          <Image
            src="/success/about.png"
            width={1000}
            height={1000}
            className="w-full rounded-bl-[30%] rounded-tr-[30%]"
            alt="success"
          />
          {/* <div className="absolute inset-0 flex justify-center mt-24">
            <FaRegPlayCircle className="text-white w-[150px] h-[150px]" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

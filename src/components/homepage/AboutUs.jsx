import Image from "next/image";
import Link from "next/link";
import React from "react";
const AboutUs = () => {
  return (
    <div className="bg-skyblue dark:text-black">
      <div className="lg:grid grid-cols-12 mx-3 lg:mx-28 lg:pt-10 pt-5 lg:pb-10 pb-5 flex flex-col-reverse">
        <div className="col-start-1 col-span-5 pb-10 pt-3">
          <h1 className="text-lightblue text-3xl font-extrabold mb-2">
            About Us
          </h1>
          <p className="mb-6 mr-5">
            At Health Vista Diagnostics, your well-being is our top priority. We
            are a trusted, family-owned diagnostics center committed to providing
            compassionate and comprehensive care. Our team believes in listening
            to our patients and addressing their concerns with empathy and
            clarity. We go beyond standard diagnostics by offering in-house
            interventional radiology services and collaborating closely with
            your doctors to support your treatment and management. With a focus
            on integrity and personalized care, we strive to guide you toward
            optimal health outcomes.
          </p>
          <Link
            href="/our-team"
            className="bg-lightgreen rounded-lg text-white py-2 px-3"
          >
            Know More
          </Link>
        </div>
        <div className="col-start-6 lg:mt-0 col-span-8 relative mb-1">
          <Image
            src="/about/about.jpg"
            width={1000}
            height={1000}
            className="w-full rounded-bl-[30%] rounded-tr-[30%] p-2"
            alt="success"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

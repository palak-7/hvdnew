import React from "react";
import { RiHomeHeartLine } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";
import { FaFileMedicalAlt } from "react-icons/fa";
import Link from "next/link";
const Booking = () => {
  return (
    <div className="m-10">
      <h1 className="font-extrabold text-3xl text-primary text-center">
        Enhanced Patient Services
      </h1>
      <p className="text-center text-xl text-primary">for Your Convenience</p>
      <div className="lg:grid grid-cols-3 gap-10 mt-16">
        <div className="rounded-lg mx-auto shadow-3xl">
          <div className="flex justify-center -translate-y-1/2">
            <RiHomeHeartLine
              className="bg-primary rounded-full p-3 text-white"
              size={70}
            />
          </div>
          <div className="text-center -mt-4 px-14 pb-5">
            <h1 className="text-primary font-bold text-lg">
              Home Sample Collection
            </h1>
            <p className="text-justify text-gray-500 leading-tight mb-4">
              Enjoy the convenience of free home sample collection, ensuring a
              hassle-free process from the comfort of your home.
            </p>
            <Link
              href="/contact"
              className="bg-lightgreen text-white py-2 px-4 rounded-md"
            >
              Book Online
            </Link>
          </div>
        </div>
        <div className="mt-14 rounded-lg mx-auto shadow-3xl">
          <div className="flex justify-center -translate-y-1/2">
            <RiHomeHeartLine
              className="bg-primary rounded-full p-3 text-white"
              size={70}
            />
          </div>
          <div className="text-center -mt-4 px-14 pb-5">
            <h1 className="text-primary font-bold text-lg">
              Home Sample Collection
            </h1>
            <p className="text-justify text-gray-500 leading-tight mb-4">
              Enjoy the convenience of free home sample collection, ensuring a
              hassle-free process from the comfort of your home.
            </p>
            <Link
              href="/contact"
              className="bg-lightgreen text-white py-2 px-4 rounded-md"
            >
              Book Online
            </Link>
          </div>
        </div>
        <div className="mt-14 rounded-lg mx-auto shadow-3xl">
          <div className="flex justify-center -translate-y-1/2">
            <RiHomeHeartLine
              className="bg-primary rounded-full p-3 text-white"
              size={70}
            />
          </div>
          <div className="text-center -mt-4 px-14 pb-5">
            <h1 className="text-primary font-bold text-lg">
              Home Sample Collection
            </h1>
            <p className="text-justify text-gray-500 leading-tight mb-4">
              Enjoy the convenience of free home sample collection, ensuring a
              hassle-free process from the comfort of your home.
            </p>
            <Link
              href="/contact"
              className="bg-lightgreen text-white py-2 px-4 rounded-md"
            >
              Book Online
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

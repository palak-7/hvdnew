import React from "react";
import { RiHomeHeartLine } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";
import { FaFileMedicalAlt } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";

import Link from "next/link";
const Booking = () => {
  return (
    <div className="m-10">
      <h1 className="font-extrabold text-3xl text-primary text-center">
        Enhanced Patient Services
      </h1>
      <p className="text-center text-xl text-primary font-semibold">for Your Convenience</p>
      <div className="lg:grid grid-cols-4 gap-10 mt-16">
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
            <p className="text-gray-500 leading-tight mb-4">
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
        <div className="lg:mt-0 mt-14 rounded-lg mx-auto shadow-3xl">
          <div className="flex justify-center -translate-y-1/2">
            <FaHeartbeat
              className="bg-primary rounded-full p-3 text-white"
              size={70}
            />
          </div>
          <div className="text-center -mt-4 px-14 pb-5">
            <h1 className="text-primary font-bold text-lg">
              Cardiologist Consultation
            </h1>
            <p className="text-gray-500 leading-tight mb-4">
              Schedule a consultation with our cardiologists by phone, ensuring
              timely and expert care for your heart health.
            </p>
            <Link
              href="/contact"
              className="bg-lightgreen text-white py-2 px-4 rounded-md"
            >
              Book Online
            </Link>
          </div>
        </div>
        <div className="lg:mt-0 mt-14 rounded-lg mx-auto shadow-3xl">
          <div className="flex justify-center -translate-y-1/2">
            <FaFileMedicalAlt
              className="bg-primary rounded-full p-3 text-white"
              size={70}
            />
          </div>
          <div className="text-center -mt-4 px-14 pb-5">
            <h1 className="text-primary font-bold text-lg">Test Booking</h1>
            <p className="text-gray-500 leading-tight mb-4">
              Easily book your tests by calling our center, where our team will
              assist you with scheduling & any questions you may have.
            </p>
            <Link
              href="/contact"
              className="bg-lightgreen text-white py-2 px-4 rounded-md"
            >
              Book Online
            </Link>
          </div>
        </div>

        <div className="lg:mt-0 mt-14 rounded-lg mx-auto shadow-3xl">
          <div className="flex justify-center -translate-y-1/2">
          
            <RiServiceFill className="bg-primary rounded-full p-3 text-white"
              size={70} />

          </div>
          <div className="text-center -mt-4 px-14 pb-5">
            <h1 className="text-primary font-bold text-lg">Free Pick and Drop for Senior Citizens ( Within 2km)</h1>
            <p className="text-gray-500 leading-tight mb-4">
            Our free pick-and-drop service for senior citizens ensures safe and convenient transportation within a 2 km radius.
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

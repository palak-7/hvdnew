"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import React from "react";
import Image from "next/image";
import { sendFormData } from "@/services/form";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { IoMail } from "react-icons/io5";

import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileData = new FormData();

    fileData.append("myFile", file);

    // Append other form data fields to fileData
    Object.entries(formData).forEach(([key, value]) => {
      fileData.append(key, value);
    });

    const response = await sendFormData(fileData);

    if (response.success) {
      Swal.fire({
        title: "Success",
        text: "Enquiry Form Sent!",
        icon: "success",
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setFile(null);
      router.push("/");
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Can't send enquiry form",
        icon: "error",
      });
    }
  };
  return (
    <div className="dark:bg-white dark:text-black overflow-x-hidden">
      <div className="relative">
        <Image
          src={`/contact/contactmedical.jpeg`}
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover hidden lg:block"
          alt="service"
        />
        <div className="absolute inset-0 bg-[#07a496] opacity-70 z-10"></div>
        
          <h1 className="text-gray-800 font-sans text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
            Contact Us
          </h1>
        
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mx-4 lg:mx-10 mt-10 p-5">
        <div className="rounded-md">
          <div className="p-5 rounded-md shadow-lg shadow-lightgreen">
            <h1 className="font-bold text-xl">Our Address</h1>
            <Link
              href="https://www.google.com/maps/place/Health+Vista+Diagnostics+-+Best+Diagnostic+centre+in+Pitampura+%7C+Interventional+Radiology+%7C+Cardiology+%7C+ECG+in+Pitampura/@28.700161,77.126535,16z/data=!4m6!3m5!1s0x390d03a69dcf1acd:0x46473ecd32974e35!8m2!3d28.7001605!4d77.1265346!16s%2Fg%2F11y1m4m_hx?hl=en&entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex text-primary hover:text-lightgreen"
            >
              <div>
                <IoLocationSharp className="mt-1 mr-1" />
              </div>
              <p className="font-semibold flex ">
                C 546, Upper Ground floor, near Pitampura, Block C, Saraswati
                Vihar, Pitampura, Delhi, 110034
              </p>
            </Link>
          </div>
        </div>
        <div className="rounded-md shadow-lg shadow-lightgreen">
          <div className="p-5 rounded-md translate-x-3 translate-y-3">
            <h1 className="font-bold text-xl mb-2">Phone Number</h1>

            <Link
              href="tel:+91 9311883059"
              target="__blank"
              className="flex hover:text-lightgreen font-semibold text-primary duration-300"
            >
              <IoCall className="mt-1 mr-1" />
              +91 9311883059
            </Link>
            <Link
              href="tel:+011 46536898"
              target="__blank"
              className="flex hover:text-lightgreen font-semibold text-primary duration-300"
            >
              <IoCall className="mt-1 mr-1" />
              +011 46536898
            </Link>
          </div>
        </div>
        <div className="rounded-md shadow-lg shadow-lightgreen">
          <div className="py-5 rounded-md translate-x-3 translate-y-3">
            <h1 className="font-bold text-xl mb-2">Email Address</h1>
            <Link
              href="mailto:healthvista.diagnostics@gmail.com"
              className="text-primary hover:text-lightgreen duration-300 font-semibold object-cover flex"
            >
              <IoMdMail className="mt-1 mr-1" />
              healthvista.diagnostics@gmail.com
            </Link>
          </div>
        </div>

        <div className="rounded-md shadow-lg shadow-lightgreen">
          <div className="p-5 rounded-md translate-x-3 translate-y-3">
            <h1 className="font-bold text-xl mb-2">Opening Hours</h1>
            <p className="font-semibold text-primary hover:text-lightgreen duration-300">
              8AM - 8PM (Mon to Sat)
            </p>
            <p className="font-semibold text-primary hover:text-lightgreen duration-300">
              8AM - 4PM (Sunday)
            </p>
          </div>
        </div>
      </div>

      <div className="lg:grid grid-cols-12 gap-8 p-10">
        <div className="col-span-12 lg:col-span-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your name"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] w-full"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your email address"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] w-full"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] w-full"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <input
                type="file"
                id="medical"
                placeholder="Upload your medical file"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] w-full"
                name="medical"
                accept="image/*, .pdf, .docx, .xlsx,"
                onChange={({ target }) => {
                  if (target.files) {
                    const file = target.files[0];
                    setFile(file);
                  }
                }}
              />
            </div>

            <div>
              <textarea
                placeholder="Write your message..."
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] h-32 w-full"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button className="bg-green-500 text-white p-3 rounded-md hover:bg-green-700 transition duration-300 cursor-pointer">
              Send Message
            </button>
          </form>
        </div>

        <div className="col-span-12 lg:col-span-6 mt-8 lg:mt-0 rounded-3xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6999.296899245843!2d77.126535!3d28.700161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a69dcf1acd%3A0x46473ecd32974e35!2sHealth%20Vista%20Diagnostics%20-%20Best%20Diagnostic%20centre%20in%20Pitampura%20%7C%20Interventional%20Radiology%20%7C%20Cardiology%20%7C%20ECG%20in%20Pitampura!5e0!3m2!1sen!2sin!4v1728645262781!5m2!1sen!2sin"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

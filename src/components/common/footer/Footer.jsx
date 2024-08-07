import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0"></div>

      <div className="absolute lg:grid lg:grid-cols-12 p-10">
        <div className="col-start-1 col-span-3">
          <Link href="/" className={`header-logo block lg:ml-0 ml-2 my-3`}>
            <Image
              src="/logo/logo.webp"
              alt="logo"
              width={140}
              height={30}
              className="w-[190px] h-[120px]"
            />
          </Link>
          <p className="py-2">
            At Health Vista Diagnostics, your well-being is our priority. As a
            trusted, family-owned center, we provide compassionate care and
            comprehensive diagnostics, including in-house interventional
            radiology. We work closely with your doctors to ensure personalized
            treatment and support for optimal health outcomes.
          </p>

          <div className="flex gap-2 py-2 leading-loose">
            <Link href="/">
              <FaFacebookF className="text-4xl bg-primary text-white rounded-md p-2" />
            </Link>
            <Link href="/">
              <FaInstagram className="text-4xl bg-instagram text-white rounded-md p-2" />
            </Link>
            <Link href="/">
              <FaLinkedinIn className="text-4xl bg-linkedin text-white rounded-md p-2" />
            </Link>
            <Link href="/">
              <FaYoutube className="text-4xl bg-youtube text-white rounded-md p-2" />
            </Link>
          </div>
        </div>

        <div className="col-start-5 col-span-2 leading-8">
          <h1 className="font-bold text-primary">Quick Links</h1>
          <Link href="/">Home</Link>
          <br />
          <Link href="/">About us</Link>
          <br />
          <Link href="/">Health Packages & Services</Link>
          <br />
          <Link href="/">Upcoming Events</Link>
          <br />
          <Link href="/">Reviews & Gallery</Link>
          <br />
          <Link href="/">Home Sample Collection</Link>
          <br />
          <Link href="/">Cardiologist Consultation</Link>
          <br />
          <Link href="/">Team</Link>
          <br />
          <Link href="/">Blogs and FAQs</Link>
          <br />
          <Link href="/">Contact Us</Link>
        </div>
        <div className="col-start-8 col-span-2 leading-loose">
          <h1 className="font-bold text-primary">Services</h1>
          <Link href="/">Diagnostic Radiology</Link>
          <br />
          <Link href="/">Interventional Radiology</Link>
          <br />
          <Link href="/">Cardiology</Link>
          <br />
          <Link href="/">Pathology</Link>
          <br />
          <Link href="/">Others</Link>
          <br />
        </div>
        <div className="col-start-10 col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.6484671583116!2d77.12395967529164!3d28.70016047562798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a69dcf1acd%3A0x46473ecd32974e35!2sHealth%20Vista%20Diagnostics%20-%20Best%20Diagnostic%20centre%20in%20Pitampura%2C%20Interventional%20Radiology%2C%20Cardiology%2C%20ECG%20in%20Pitampura!5e0!3m2!1sen!2sin!4v1722943500091!5m2!1sen!2sin"
            width="300"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Image
        src="/banner/hvd(1).png"
        width={1000}
        height={1000}
        className="lg:h-[450px] h-[1300px] w-full"
        alt="footerimg"
      />
       <div className="text-center opacity-50">
        <h1 className="text-xl pt-5"> <strong>© 2024 Health Vista Diagnostic . All Rights Reserved.</strong></h1>
        <h4 className="mb-5">Handcrafted with excellence by <strong> Invincible Web Solutions </strong></h4>
       </div>
    </div>
  );
};

export default Footer;

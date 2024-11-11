import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="relative overflow-x-clip">
      <div className="absolute inset-0"></div>

      <div className="absolute lg:grid lg:grid-cols-12 p-10">
        {/* Logo and Description */}
        <div className="col-span-12 lg:col-start-1 lg:col-span-3">
          <Link href="/" className={`header-logo block lg:ml-0 ml-2 my-3`}>
            <Image
              src="/logo/logo.webp"
              alt="logo"
              width={140}
              height={30}
              className="w-[190px] h-[120px]"
            />
          </Link>
          <p className="py-2 dark:text-black">
            At Health Vista Diagnostics, your well-being is our priority. As a
            trusted, family-owned center, we provide compassionate care and
            comprehensive diagnostics, including in-house interventional
            radiology. We work closely with your doctors to ensure personalized
            treatment and support for optimal health outcomes.
          </p>

          <div className="flex gap-2 py-2 leading-loose">
            <Link
              href="https://www.facebook.com/profile.php?id=61552586340123"
              target="__blank"
            >
              <FaFacebookF className="text-4xl bg-primary text-white rounded-md p-2" />
            </Link>
            <Link
              href="https://www.instagram.com/healthvistadiagnostics/"
              target="__blank"
            >
              <FaInstagram className="text-4xl bg-instagram text-white rounded-md p-2" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rishu-sangal-45b92715/"
              target="__blank"
            >
              <FaLinkedinIn className="text-4xl bg-linkedin text-white rounded-md p-2" />
            </Link>
            <Link
              href="https://www.youtube.com/@HealthVistaDiagnostics"
              target="__blank"
            >
              <FaYoutube className="text-4xl bg-youtube text-white rounded-md p-2" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-12 md:col-start-5 md:col-span-2 lg:col-start-5 lg:col-span-2 leading-8 dark:text-black">
          <h1 className="font-bold text-primary">Quick Links</h1>
          <Link href="/about">About us</Link>
          <br />
          <Link href="/health-packages">Health Packages</Link>
          <br />
          <Link href="/services">Services</Link>
          <br />
          <Link href="/updates-and-events">Upcoming Events</Link>
          <br />
          <Link href="/gallery">Gallery</Link>
          <br />
          <Link href="/success-stories">Success Stories</Link>
          <br />
          <Link href="/our-team">Our Team</Link>
          <br />
          <Link href="/contact">Contact Us</Link>
        </div>

        {/* Services */}
        <div className="col-span-12 md:col-start-7 md:col-span-2 lg:col-start-8 lg:col-span-2 leading-loose dark:text-black">
          <h1 className="font-bold text-primary">Services</h1>
          <Link href="/services/digital-xray">Digital X-Ray</Link>
          <br />
          <Link href="/services/ultrasound">Ultrasound</Link>
          <br />
          <Link href="/services/liver-fibroscan">Liver Fibroscan</Link>
          <br />
          <Link href="/services/pathology">Pathology</Link>
          <br />
          <Link href="/services/holter">Holter</Link>
          <br />
        </div>

        {/* Google Map */}
        <div className="col-span-12 lg:col-start-10 lg:col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.6484671583116!2d77.12395967529164!3d28.70016047562798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a69dcf1acd%3A0x46473ecd32974e35!2sHealth%20Vista%20Diagnostics%20-%20Best%20Diagnostic%20centre%20in%20Pitampura%2C%20Interventional%20Radiology%2C%20Cardiology%2C%20ECG%20in%20Pitampura!5e0!3m2!1sen!2sin!4v1722943500091!5m2!1sen!2sin"
            width="300"
            height="300"
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
        className="lg:h-[450px] h-[1300px] w-full object-cover"
        alt="footerimg"
      />
      <div className="text-center opacity-50 dark:text-black">
        <h1 className="text-xl p-2">
          {" "}
          <strong>
            © 2024 Health Vista Diagnostics . All Rights Reserved.
          </strong>
        </h1>
        {/* <h4 className="mb-5">Handcrafted with excellence by <strong> Invincible Web Solutions </strong></h4> */}
      </div>
    </div>
  );
};

export default Footer;

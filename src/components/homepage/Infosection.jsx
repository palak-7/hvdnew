import React from "react";
import Link from "next/link";
import Image from "next/image";

const Infosection = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0"></div>
      <div className="absolute grid grid-cols-1 gap-4 p-5 text-white lg:grid-cols-12 lg:justify-evenly lg:items-center">
        <div className="lg:col-start-1 lg:col-span-2 pl-5 lg:pl-10">
          <h3 className="font-bold mb-2">Send us a Message</h3>
          <Link
            href="mailto:healthvista.diagnostics@gmail.com"
            target="_blank"
            className="text-white"
          >
            healthvista.diagnostics@gmail.com
          </Link>
        </div>

        <div className="lg:col-start-4 lg:col-span-3 lg:border-r-2 lg:border-l-2 pl-5 lg:pl-2">
          <h3 className="font-bold mb-2">Give us a Call</h3>
          <div className="text-blue-600">
            <Link href="tel:+919311883039" className="block text-white">
              +91 9311883039
            </Link>
            <Link href="tel:+01146536898" className="block text-white">
              +011 46536898
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2 lg:border-r-2 pl-5 lg:pl-0">
          <h3 className="font-bold mb-2">Opening Hours</h3>
          <p className="text-white">8am - 8pm (Mon to Sat)</p>
          <p className="text-white">8am - 4pm (Sunday)</p>
        </div>

        <div className="lg:col-span-4 pl-5">
          <h3 className="font-bold mb-2">Location</h3>
          <address className="not-italic text-white text-sm">
            C-546, Upper Ground Floor, Saraswati Vihar, Pitampura, Delhi-34
          </address>
        </div>
      </div>

      <Image
        src="/banner/hvd(2).png"
        width={1000}
        height={1000}
        className="lg:h-[120px] h-[400px] w-full object-cover"
        alt="footerimg"
      />
    </div>
  );
};

export default Infosection;

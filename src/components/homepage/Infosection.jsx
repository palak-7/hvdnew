import React from "react";
import Link from "next/link";
import Image from "next/image";
const Infosection = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0"></div>
      <div className="absolute grid lg:grid-cols-12 gap-4 p-5 text-white justify-evenly items-center">
        <div className="col-start-1 col-span-2 pl-10">
          <h3 className="font-bold mb-2">Send us a Message</h3>
          <Link
            href="mailto:healthvista.diagnostics@gmail.com"
            target="_blank"
            className=" text-white"
          >
            healthvista.diagnostics@gmail.com
          </Link>
        </div>

        <div className="col-start-4 col-span-3 border-r-2 border-l-2 pl-2">
          <h3 className="font-bold mb-2">Give us a Call</h3>
          <div className="text-blue-600 flex gap-2">
            <Link href="tel:+919311883039" className="block text-white">
              +91 9311883039 ,
            </Link>
            <Link href="tel:+01146536898" className="block text-white">
              +011 46536898
            </Link>
          </div>
        </div>

        <div className="col-span-2 border-r-2">
          <h3 className="font-bold mb-2">Opening Hours</h3>
          <p className="text-white">8 am - 8 pm</p>
        </div>

        <div className="col-span-4">
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
        className="lg:h-[120px] h-[1300px] w-full"
        alt="footerimg"
      />
    </div>
  );
};

export default Infosection;

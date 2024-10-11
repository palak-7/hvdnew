import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <div>
      <div>
        <Image
          src={`/contact/contact-banner.png`}
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover hidden lg:block"
          alt="service"
        />
      </div>
    </div>
  );
};

export default Contact;

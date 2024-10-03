import React from "react";
import { servicesdata } from "@/data/serviceData";
import Head from "@/components/common/head/Head";
import Image from "next/image";

const page = ({ params }) => {
  const service = servicesdata.find((s) => s.url === params.url);
  return (
    <div>
      <Head service={service} />

      <div className="lg:grid grid-cols-2 gap-8 p-5 lg:p-10">
        {/* Image Section */}
        <div className="mb-8 lg:mb-0">
          <Image
            src={`/services/xray/${service.imageurl}`}
            width={10000}
            height={1000}
            className="w-full rounded-xl shadow-lg"
            alt="service"
          />
        </div>

        {/* Content Section */}
        <div className="my-10">
          {service.content.map((s) => (
            <div
              key={s.id}
              className="bg-white font-serif border-2 shadow-lg border-lightgreen rounded-xl mb-8 p-6 mx-0 lg:mx-10"
            >
              <div className="font-bold text-3xl text-darkblue mb-4">
                {s.ques}
              </div>
              <div
                className="text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: s.ans }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

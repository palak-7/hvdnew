import React from "react";
import { servicesdata } from "@/data/serviceData";
import Head from "@/components/common/head/Head";
import Image from "next/image";
const page = ({ params }) => {
  const service = servicesdata.find((s) => s.url === params.url);
  return (
    <div>
      <Head service={service} />
      <div className="lg:grid grid-cols-2">
        <div>
          <Image
            src={`/services/xray/${service.imageurl}`}
            width={10000}
            height={1000}
            className="w-full"
            alt="service"
          />
        </div>
        <div className="my-10">
          {service.content.map((s) => (
            <div
              key={s.id}
              className="bg-skyblue font-serif border-2 shadow-lg border-lightgreen rounded-xl mb-5 p-4 mx-10"
            >
              <div className="font-bold text-2xl">{s.ques}</div>
              <div dangerouslySetInnerHTML={{ __html: s.ans }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

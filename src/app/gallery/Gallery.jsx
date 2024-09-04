import Image from "next/image";
import React from "react";
import Link from "next/link";
const Gallery = () => {
  return (
    <div>
      <div className="m-10">
        <div className="lg:grid grid-cols-4 gap-10">
          <Link href="/gallery/center" className="hover:scale-105">
            <Image
              src="/gallery/center/center_cover.png"
              width={1000}
              height={1000}
              className="w-[350px] h-[250px]"
              alt="center"
            />
            <h1 className="text-center text-2xl font-bold">Our Center</h1>
          </Link>
          <Link href="/gallery/event" className="hover:scale-105">
            <Image
              src="/gallery/event/event1.png"
              width={1000}
              height={1000}
              className="w-[350px] h-[250px]"
              alt="event"
            />
            <h1 className="text-center text-2xl font-bold">Event 1</h1>
          </Link>
          <Link href="/gallery/launch-event" className="hover:scale-105">
            <Image
              src="/gallery/launch_photos/launch.png"
              width={1000}
              height={1000}
              className="w-[350px] h-[250px]"
              alt="launch"
            />
            <h1 className="text-center text-2xl font-bold">Launch Photos</h1>
          </Link>
          <Link href="/gallery/success" className="hover:scale-105">
            <Image
              src="/gallery/success-story/success.png"
              width={1000}
              height={1000}
              className="w-[350px] h-[250px]"
              alt="success"
            />
            <h1 className="text-center text-2xl font-bold">Success Stories</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

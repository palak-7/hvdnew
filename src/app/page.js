import Reviews from "@/components/homepage/Reviews";
import Services from "@/components/homepage/Services";
import React from "react";
import Booking from "@/components/homepage/Booking";
import Packages from "@/components/homepage/Packages";
import Success from "@/components/homepage/Success";
import Introduction from "@/components/homepage/Introduction";
const page = () => {
  return (
    <div>
      <Introduction />
      <Reviews />
      <Services />
      <Booking />
      <Packages />
      <Success />
    </div>
  );
};

export default page;

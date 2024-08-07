import Reviews from "@/components/homepage/Reviews";
import Services from "@/components/homepage/Services";
import React from "react";
import Booking from "@/components/homepage/Booking";
import Packages from "@/components/homepage/Packages";
import Success from "@/components/homepage/Success";
import Introduction from "@/components/homepage/Introduction";
import Infosection from "@/components/homepage/Infosection";
import OurTrusted from "@/components/homepage/OurTrusted";
import AboutUs from "@/components/homepage/AboutUs";
const page = () => {
  return (
    <div>
      <Introduction />
      <Reviews />
      <Services />
      <Booking />
      <Packages />
      <Success />
      <AboutUs />
      <OurTrusted />
      <Infosection />
    </div>
  );
};

export default page;

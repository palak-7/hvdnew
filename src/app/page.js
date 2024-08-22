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
import UpcomingEvent from "@/components/homepage/UpcomingEvent";
import Doctors from "@/components/homepage/Doctors";
import Testimonials from "@/components/homepage/Testimonials";
const page = () => {
  return (
    <div className="">
      <Introduction />
      <Reviews />
      <Services />
      <Booking />
      <Packages />
      <Success />
      <AboutUs />
      <Doctors />
      <Testimonials />
      <UpcomingEvent />
      <OurTrusted />
      <Infosection />
    </div>
  );
};

export default page;

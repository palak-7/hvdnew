import React from "react";
import Marquee from "react-fast-marquee";
const Top = () => {
  return (
    <div className="bg-primary">
      <Marquee>
        <div className="text-center bg-primary text-white p-2 text-sm">
          Free Home Sample Collection | Full Body Health Packages Available |
          Extra 10% Discount on All Tests for Senior Citizens | Free Pick and Drop for Senior Citizen Within 2km.
        </div>
      </Marquee>
    </div>
  );
};

export default Top;

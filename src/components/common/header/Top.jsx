import React from "react";
import Marquee from "react-fast-marquee";
const Top = () => {
  return (
    <div className="bg-primary">
      <Marquee>
        <div className="text-center bg-primary text-white p-2 text-sm">
          Free Home Sample Collection | Full Body Health Packages Available |
          Extra 10% discount on all tests for Senior Citizens
        </div>
      </Marquee>
    </div>
  );
};

export default Top;

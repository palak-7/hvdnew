import React from "react";
import Detailed from "./Detailed";

const page = ({ params }) => {
  const url = params.url;
  return (
    <div>
      <Detailed url={url} />
    </div>
  );
};

export default page;

import React from "react";
import BlogDetailed from "./BlogDetailed";

const page = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <BlogDetailed id={id} />
    </div>
  );
};

export default page;

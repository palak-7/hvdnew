import React from "react";
import GalleryImages from "./GalleryImages";

const page = ({ params }) => {
  const url = params.url;
  return (
    <div>
      <GalleryImages url={url} />
    </div>
  );
};

export default page;

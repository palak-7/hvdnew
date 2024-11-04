import React from "react";
import SuccessDetail from "./SuccessDetail";

const page = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <SuccessDetail id={id} />
    </div>
  );
};

export default page;

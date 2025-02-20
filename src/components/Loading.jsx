import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
const Loading = () => {
  return (
    <div className="bg-[#0f0f0f] h-[100dvh] w-[100%] flex justify-center items-center">
      <ClipLoader color="#FFBC13"  />
    </div>
  );
};

export default Loading;

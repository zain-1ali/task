import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
const Loading = () => {
  return (
    <div className="bg-white h-[100dvh] w-[100%] flex justify-center items-center">
      <ClipLoader color="red"  />
    </div>
  );
};

export default Loading;

import React from "react";
import Button from "./ui/Button";

const PrimaryButton = ({ text, width, onClick, colorType }) => {
  return (
    <>
      <Button
        className={`${
          colorType === "primary"
            ? "bg-primary text-black"
            : colorType === "secondary"
            ? "bg-secondary text-white"
            : "bg-transparent  border-[2px] border-primary text-primary"
        } outline-none h-[50px] ${
          width === "full" ? "w-[90%]" : "w-[42%]"
        } rounded-[10px] text-[17px]  font-b6 mt-[26px] font-primary`}
        children={text}
        onClick={onClick}
      />
    </>
  );
};

export default PrimaryButton;

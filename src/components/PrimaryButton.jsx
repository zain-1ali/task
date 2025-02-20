import React from "react";
import Button from "./ui/Button";

const PrimaryButton = ({ text, width, onClick, colorType }) => {
  return (
    <>
      <Button
        className={`${
          colorType === "primary"
            ? "bg-primary text-black hover:bg-[#E6A910] active:bg-[#E6A910]"
            : colorType === "secondary"
            ? `bg-secondary text-white ${
                text != "Come Back Tomorrow" &&
                text != "Comming Soon - Wasp Hunting"
                  ? "hover:bg-[#1A1A1A] active:bg-[#1A1A1A]"
                  : ""
              } `
            : "bg-transparent  border-[2px] border-primary text-primary"
        } outline-none min-h-[50px] ${
          width === "full" ? "w-[90%]" : "w-[42%]"
        } rounded-[10px] text-[17px] font-b6  mt-[26px]  font-secondary tracking-[-0.4px]`}
        children={text}
        onClick={onClick}
      />
    </>
  );
};

export default PrimaryButton;

import React from "react";
import Heading from "./ui/Heading";
import Text from "./ui/Text";
import Button from "./ui/Button";

const PrimaryWidgets = ({ heading, text,className,btnText ,showBtn ,onBtnClick  }) => {
  return (
    <div className={`w-[342px] h-[70px] bg-secondary rounded-[16px] flex justify-between items-center px-4 ${className}`}>
      <div>
        <Heading
          children={heading}
          className="font-b5 text-[17px] font-primary text-white"
        />
        <Text
          children={text}
          className="text-[#AAAAAA] text-[15px] font-[400] font-primary mt-[2px]"
        />
      </div>
     {showBtn && <Button children={btnText} className="w-[71px] h-[36px] bg-primary rounded-[20px] font-b6 text-[15px]" onClick={onBtnClick}/>}
    </div>
  );
};

export default PrimaryWidgets;

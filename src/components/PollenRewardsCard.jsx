import React from "react";
import Heading from "./ui/Heading";
import Text from "./ui/Text";

const PollenRewardsCard = ({rewardTaken}) => {
  const rewardData = [
    {
      day: "Day 1",
      pollen: "500",
    },
    {
      day: "Day 2",
      pollen: "550",
    },
    {
      day: "Day 3",
      pollen: "550",
    },
    {
      day: "Day 4",
      pollen: "600",
    },
    {
      day: "Day 5",
      pollen: "650",
    },
    {
      day: "Day 6",
      pollen: "650",
    },
    {
      day: "Day 7",
      pollen: "1000",
    },
  ];
  return (
    <div className="w-[90%] h-[212px] flex justify-between flex-wrap gap-y-[2px] mt-[20px]">
      {rewardData?.map((elm, i) => {
        return (
          <div
            className={`bg-secondary h-[68px] flex justify-between items-center px-4 ${
              elm?.day === "Day 1"
                ? "w-[100%] rounded-t-[16px]  "
                : `w-[32.8%]  ${i === 4 && "rounded-bl-[16px]"} ${
                    i === 6 && "rounded-br-[16px]"
                  }`
            }`}
          >
            <div>
              <Heading
                className="text-[17px] font-b5 text-white font-primary"
                children={elm?.day}
              />
              <Text
                children={i === 0 ? elm?.pollen + " " + "POLLEN" : elm?.pollen}
                className="text-[#AAAAAA] font-primary"
              />
            </div>
            {i === 0 && <Text children="Today" className={`font-primary font-[400] text-[17px] ${rewardTaken ? "text-white":"text-primary" } `} />}
          </div>
        );
      })}


    </div>
  );
};

export default PollenRewardsCard;

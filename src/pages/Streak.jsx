import React from "react";
import ImageCard from "../components/ImageCard";
import images from "../assets/images";
import Heading from "../components/ui/Heading";
import PollenRewardsCard from "../components/PollenRewardsCard";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import RewardConfirm from "./RewardConfirm";

const Streak = () => {
  const [rewardTaken, setRewardTaken] = useState(false);
  const [showRewardConfirm, setShowRewardConfirm] = useState(false);
  const handleRewardTaken = () => {
    setRewardTaken(true);
    setShowRewardConfirm(false);
  };
  return !showRewardConfirm ? (
    <div className="bg-black  h-[100%] w-[100%] flex flex-col items-center">
      <ImageCard
        boxClasses="w-[100%] flex justify-center items-center"
        imageClasses="w-[123px] h-[120px] mt-[35px]"
        imageSrc={images?.images.gift}
      />
      <Heading
        level="h2"
        className="text-white font-accent font-b7 text-[46px] tracking-[3px] mt-4"
        children="500 Pollen"
      />
      <Heading
        level="h2"
        className="text-white font-accent font-b6 text-[17px] tracking-[3px] "
        children="Daily reward"
      />
      <PollenRewardsCard rewardTaken={rewardTaken} />

      <PrimaryButton
        width="full"
        colorType={rewardTaken ? "secondary" : "primary"}
        text={rewardTaken ? "Come Back Tomorrow" : "Claim"}
        onClick={rewardTaken ? () => {} : () => setShowRewardConfirm(true)}
      />
    </div>
  ) : (
    <RewardConfirm handleRewardTaken={handleRewardTaken} />
  );
};

export default Streak;

import React from "react";
import images from "../assets/images";
import ImageCard from "../components/ImageCard";
import Heading from "../components/ui/Heading";
import Text from "../components/ui/Text";
import PrimaryButton from "../components/PrimaryButton";

const RewardConfirm = ({ handleRewardTaken }) => {
  return (
    <div className="bg-primary h-[100dvh] w-[100%] flex flex-col items-center">
      <ImageCard
        imageSrc={images?.images.gift}
        boxClasses="h-[200px] w-[90%] bg-secondary flex justify-center items-center rounded-[16px] mt-[35px]"
        imageClasses="w-[122px] h-[120px]"
      />
      <Heading
        level="h2"
        className="text-secondary font-accent font-b7 text-[46px] tracking-[3px] mt-4"
        children="+ 500 Pollen"
      />
      <Text
        children="352 POLLEN until you become a queen"
        className="text-secondary font-primary font-b5 text-[17px] mt-[30px]"
      />
      <div className="w-[100%] flex justify-center mt-4">
        <PrimaryButton
          width="full"
          colorType="secondary"
          text="Continue"
          onClick={handleRewardTaken}
        />
      </div>
    </div>
  );
};

export default RewardConfirm;

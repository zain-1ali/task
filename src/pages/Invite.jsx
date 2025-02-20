import React, { useEffect } from "react";
import ImageCard from "../components/ImageCard";
import images from "../assets/images";
import Heading from "../components/ui/Heading";
import PrimaryWidgets from "../components/PrimaryWidgets";
import PrimaryButton from "../components/PrimaryButton";
import { handleInviteClick } from "../../utils/telegramShare";

const Invite = () => {
  const tg = window.Telegram.WebApp;

  tg.ready();
  const referralUrl = `http://t.me/HivedemoBot?start=ref_${tg?.initDataUnsafe?.user?.id}`;
  // useEffect(() => {
  //   tg.trackEvent("invite_page_viewed");
  // }, []);

  return (
    <div className="bg-[#0f0f0f]  h-[100%] w-[100%] flex flex-col items-center overflow-y-scroll pb-3">
      <ImageCard
        boxClasses="w-[100%] flex justify-center items-center"
        imageClasses="w-[94px] h-[120px] mt-[35px]"
        imageSrc={images?.images.nest1}
      />
      <Heading
        level="h2"
        className="text-white font-accent font-b7 text-[46px] tracking-[3px] mt-4"
        children="Grow The Hive"
      />
      <Heading
        level="h2"
        className="text-white font-secondary font-b6 text-[17px] tracking-[-0.4px] "
        children="Get Pollen"
      />
      <PrimaryWidgets
        heading="Invite a Bee"
        text="Get 500 POLLEN and 10% of theirs"
        className="mt-[30px]"
      />
      <PrimaryWidgets
        heading="Invite a Telegram Premium Bee"
        text="Get 5,000 POLLEN and 20% of theirs"
        className="mt-[8px]"
      />

      <PrimaryButton
        width="full"
        colorType="primary"
        text="Invite Bees"
        onClick={() => handleInviteClick(referralUrl)}
      />
    </div>
  );
};

export default Invite;

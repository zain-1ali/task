import React, { useEffect, useState } from "react";
import images from "../assets/images";
import ImageCard from "../components/ImageCard";
import Heading from "../components/ui/Heading";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryWidgets from "../components/PrimaryWidgets";
import Text from "../components/ui/Text";
import { handleInviteClick } from "../../utils/telegramShare";

const TheHive = () => {
  const tg = window.Telegram.WebApp;

  tg.ready();
  const referralUrl = `http://t.me/HivedemoBot?start=ref_${tg?.initDataUnsafe?.user?.id}`;
  const socialPlatForms = [
    {
      name: "Follow on X",
      text: "Get 100 POLLEN",
      btnText: "Follow",
      link: "",
    },
    {
      name: "Follow on FaceBook",
      text: "Get 100 POLLEN",
      btnText: "Follow",
      link: "",
    },
    {
      name: "Join Telegram Channel",
      text: "Get 1000 POLLEN",
      btnText: "Join",
      link: "",
    },
  ];
  const [AboutTheHive, setAboutTheHive] = useState(false);
  // useEffect(() => {
  //   tg.trackEvent("invite_page_viewed");
  // }, []);
  return (
    <div className="bg-[#0f0f0f]  h-[100%] w-[100%] flex flex-col items-center overflow-y-scroll pb-4">
      <ImageCard
        boxClasses="w-[100%] flex justify-center items-center"
        imageClasses="w-[94px] h-[120px] mt-[35px]"
        imageSrc={images?.images.nest2}
      />
      <Heading
        level="h2"
        className="text-white font-accent font-b7 text-[46px] tracking-[3px] mt-4 text-center"
        children={AboutTheHive ? "About The Hive" : "Join The Hive"}
      />
      {!AboutTheHive && (
        <Heading
          level="h2"
          className="text-white font-secondary font-b6 text-[17px] tracking-[-0.4px]"
          children="Follow us on our socials"
        />
      )}
      {!AboutTheHive && (
        <PrimaryButton
          width="full"
          colorType="primary"
          text="Invite Bees"
          onClick={() => handleInviteClick(referralUrl)}
        />
      )}
      {!AboutTheHive &&
        socialPlatForms?.map((elm, i) => {
          return (
            <PrimaryWidgets
              heading={elm?.name}
              text={elm?.text}
              className={`${i === 0 ? "mt-[30px]" : "mt-[8px]"}`}
              btnText={elm?.btnText}
              showBtn={true}
              onBtnClick={() => window.open(elm?.link)}
              key={i}
            />
          );
        })}

      {!AboutTheHive && (
        <div className="w-[100%] flex justify-center mt-[8px] ">
          <PrimaryButton
            width="full"
            colorType="primary"
            text="About The Hive"
            onClick={() => setAboutTheHive(true)}
          />
        </div>
      )}

      {!AboutTheHive && (
        <div className="w-[100%] flex justify-center mt-[-17px]">
          <PrimaryButton
            width="full"
            colorType="secondary"
            text="Comming Soon - Wasp Hunting"
            onClick={() => {}}
          />
        </div>
      )}

      {AboutTheHive && (
        <>
          <Text
            className="font-b6 text-[17px] font-secondary text-[#FFFFFF] w-[90%] mt-4 tracking-[-0.4px] leading-[22px]"
            children="Join the Hive"
          />
          <Text
            className="font-b6 text-[17px] font-secondary text-[#FFFFFF] w-[90%] mt-4 tracking-[-0.4px] leading-[22px]"
            children="The fastest-growing Web3 community on Telegram!"
          />
          <Text
            className="font-b6 text-[17px] font-secondary text-[#FFFFFF] w-[90%] mt-4 tracking-[-0.4px] leading-[22px]"
            children="Unite your swarm, collect nectar, and dominate epic missions. Earn more as you play more, and share the fun with your friends. Enjoy exclusive access to airdrops, Web3 promotions, and trending projects—all in one place."
          />
          <Text
            className="font-b6 text-[17px] font-secondary text-[#FFFFFF] w-[90%] mt-4 tracking-[-0.4px] leading-[22px]"
            children="The bigger the Hive grows, the sweeter the rewards—don't miss the buzz!"
          />

          <PrimaryButton
            width="full"
            colorType="primary"
            text="Invite Bees"
            onClick={() => handleInviteClick(referralUrl)}
          />
        </>
      )}
    </div>
  );
};

export default TheHive;

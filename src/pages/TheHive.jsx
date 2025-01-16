import React from "react";
import images from "../assets/images";
import ImageCard from "../components/ImageCard";
import Heading from "../components/ui/Heading";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryWidgets from "../components/PrimaryWidgets";

const TheHive = () => {
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
  return (
    <div className="bg-black  h-[100%] w-[100%] flex flex-col items-center">
      <ImageCard
        boxClasses="w-[100%] flex justify-center items-center"
        imageClasses="w-[94px] h-[120px] mt-[35px]"
        imageSrc={images?.images.nest2}
      />
      <Heading
        level="h2"
        className="text-white font-accent font-b7 text-[46px] tracking-[3px] mt-4"
        children="Join The Hive"
      />
      <Heading
        level="h2"
        className="text-white font-accent font-b6 text-[17px] tracking-[3px] "
        children="Follow us on our socials"
      />
      <PrimaryButton
        width="full"
        colorType="primary"
        text="About The Hive"
        onClick={() => {}}
      />
      {socialPlatForms?.map((elm, i) => {
        return (
          <PrimaryWidgets
            heading={elm?.name}
            text={elm?.text}
            className="mt-[15px]"
            btnText={elm?.btnText}
            showBtn={true}
            onBtnClick={() => window.open(elm?.link)}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default TheHive;

import React from "react";
import ImageCard from "../components/ImageCard";
import images from "../assets/images";
import Heading from "../components/ui/Heading";
import Text from "../components/ui/Text";
import Button from "../components/ui/Button";

const Home = () => {
  return (
    <div className="bg-black h-[100vh] w-[100%] flex flex-col items-center">
      <ImageCard
        imageSrc={images?.images.bee}
        boxClasses="h-[222px] w-[90%] bg-primary flex justify-center items-center rounded-[16px] mt-[35px]"
        imageClasses="w-[157px] w-[182px]"
      />
      <Heading
        level="h2"
        className="text-white font-accent font-b7 text-[46px] tracking-[3px] mt-4"
        children="The Hive"
      />
      <Text
        children="Welcome (username),"
        className="font-b5 text-[17px] text-[#DEDEDE] mt-4 font-primary"
      />
      <Text
        children="Build your massive swarm, collect rewards and become the top-B! Your friends can join the hive and help you get there even faster!"
        className="font-b5 text-[17px] text-[#DEDEDE] text-center w-[90%] mt-[16px] font-primary"
      />
      <Text
        children="NO wasps allowed in The Hive."
        className="font-b5 text-[17px] text-[#DEDEDE] mt-[16px] font-primary"
      />
      <Button
        className="bg-primary outline-none border-none h-[50px] w-[90%] rounded-[10px] text-[17px] text-black font-b6 mt-[26px] font-primary"
        children="Earn POLLEN"
      />
    </div>
  );
};

export default Home;

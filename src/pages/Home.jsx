import React, { useEffect, useState } from "react";
import ImageCard from "../components/ImageCard";
import images from "../assets/images";
import Heading from "../components/ui/Heading";
import Text from "../components/ui/Text";
import Button from "../components/ui/Button";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";
// import { useMutation } from "@tanstack/react-query";
// import { useMutation } from "@tanstack/react-query";
import { userAuthenticator } from "../api/userApi";

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  // Move useMutation to the top level of the component
  // const mutation = useMutation(userAuthenticator, {
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  //   onError: (error) => {
  //     console.log(error || "An error occurred");
  //   },
  // });

  // const mutation = useMutation({
  //   mutationFn: (telegramData) => userAuthenticator(telegramData),
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  //   onError: (error) => {
  //     console.log(error || "An error occurred");
  //   },
  // });

  useEffect(() => {
    const authenticatingUser = async () => {
      const tg = window.Telegram.WebApp;

      tg.ready();
      if (tg?.initDataUnsafe?.user?.id) {
        const userId = tg.initDataUnsafe.user.id;
        const userIdString = userId.toString();
        // tg.trackEvent("home_page_viewed");
        // tg.trackEvent("app_opened");

        const telegramData = {
          telegramId: userIdString,
          firstName: tg?.initDataUnsafe?.user?.first_name,
          lastName: tg?.initDataUnsafe?.user?.last_name,
          username: tg?.initDataUnsafe?.user?.username,
          languageCode: tg?.initDataUnsafe?.user?.language_code,
          isPremium: tg?.initDataUnsafe?.user?.is_premium,
        };

        setUserData(telegramData);

        userAuthenticator(telegramData)
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error || "An error occurred");
          });
      }
    };

    authenticatingUser();
  }, []);

  return (
    <div className="bg-[#0f0f0f] h-[100dvh] w-[100%] flex flex-col items-center overflow-y-scroll ">
      <ImageCard
        imageSrc={images?.images.bee}
        boxClasses="h-[222px] w-[90%] bg-primary flex justify-center items-center rounded-[16px] mt-[35px]"
        imageClasses="w-[157px] h-[182px]"
      />
      <Heading
        level="h2"
        className="text-white font-accent font-[700] text-[46px] tracking-[2px] mt-4"
        children="The Hive"
      />
      <Text
        children={`Welcome ${userData?.firstName},`}
        className="font-b5 text-[17px] text-[#DEDEDE] mt-4 font-primary"
      />
      <Text
        children="Build your massive swarm, collect rewards and become the top-B! Your friends can join the hive and help you get there even faster!"
        className="font-[400] text-[17px] text-[#DEDEDE] text-center w-[90%] mt-[16px] font-primary"
      />
      <Text
        children="NO wasps allowed in The Hive."
        className="font-[400] text-[17px] text-[#DEDEDE] mt-[16px] font-primary"
      />
      <PrimaryButton
        width="full"
        colorType="primary"
        text="Earn POLLEN"
        onClick={() => navigate("/streak")}
      />
    </div>
  );
};

export default Home;

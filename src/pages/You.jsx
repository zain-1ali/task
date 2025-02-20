import React, { useEffect, useState } from "react";
import ImageCard from "../components/ImageCard";
import Heading from "../components/ui/Heading";
import images from "../assets/images";
import PrimaryWidgets from "../components/PrimaryWidgets";
import PrimaryButton from "../components/PrimaryButton";
import { handleInviteClick } from "../../utils/telegramShare";
import { getHistory } from "../api/history";

const You = () => {
  const [selectedCoinType, setSelectedCoinType] = useState("pollen");
  const tg = window.Telegram.WebApp;
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(false);

  tg.ready();
  const referralUrl = `http://t.me/HivedemoBot?start=ref_${tg?.initDataUnsafe?.user?.id}`;
  // const referralUrl = `http://t.me/HivedemoBot?start=ref_8141119319`;

  useEffect(() => {
    const handleGetHistory = () => {
      setLoading(true);
      getHistory(
        // "8141119319"
        tg?.initDataUnsafe?.user?.id
      )
        .then((res) => {
          setHistoryData(res?.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };

    // tg.trackEvent("you_page_viewed");
    handleGetHistory();
  }, []);

  console.log(historyData);

  return (
    <div className="bg-[#0f0f0f]  h-[100%] w-[100%] flex flex-col items-center overflow-y-scroll pb-4">
      <ImageCard
        boxClasses="w-[100%] flex justify-center items-center"
        imageClasses="w-[113px] h-[120px] mt-[35px]"
        imageSrc={images?.images.queen}
      />
      <Heading
        level="h2"
        className="text-white font-accent font-b7 text-[46px] tracking-[3px] mt-4"
        children="Become queen"
      />
      <Heading
        level="h2"
        className="text-white font-secondary font-b6 text-[17px] tracking-[-0.4px] "
        children="Hive hierarchy"
      />
      <PrimaryWidgets
        heading="352 POLLEN until you become a queen"
        text="You are #32 amongst the workers"
        className="mt-[15px]"
      />

      <Heading
        level="h2"
        className="text-white font-primary font-b5 text-[17px]  mt-6 w-[90%]"
        children="Invite to earn points"
      />
      <div className="w-[100%] flex justify-center mt-[-15px]">
        <PrimaryButton
          width="full"
          colorType="primary"
          text="Invite Bees"
          onClick={() => handleInviteClick(referralUrl)}
        />
      </div>

      <Heading
        level="h2"
        className="text-white font-primary font-b5 text-[17px]  mt-7 w-[90%]"
        children={`You have 1,010 ${selectedCoinType.toLocaleUpperCase()}`}
      />
      <div className="w-[100%] flex justify-center items-center gap-3 mt-[-15px]">
        <PrimaryButton
          width="half"
          colorType={selectedCoinType === "pollen" ? "primary" : "transparent"}
          text="Pollen"
          onClick={() => setSelectedCoinType("pollen")}
        />
        <PrimaryButton
          width="half"
          colorType={selectedCoinType === "nectar" ? "primary" : "transparent"}
          text="Nectar"
          onClick={() => setSelectedCoinType("nectar")}
        />
      </div>

      {selectedCoinType === "pollen" ? (
        <>
          {historyData?.map(
            (item, index) =>
              item?.type === "pollens" && (
                <PrimaryWidgets
                  heading={"+ " + item?.reward}
                  text={item?.userDetails?.[0]?.firstName + " " + item?.message}
                  key={index}
                  className="mt-[9px]"
                />
              )
          )}
        </>
      ) : (
        <>
          {historyData?.map(
            (item, index) =>
              item?.type != "pollens" && (
                <PrimaryWidgets
                  heading={"+ " + item?.reward}
                  text={item?.message}
                  key={index}
                  className="mt-[9px]"
                />
              )
          )}
        </>
      )}
    </div>
  );
};

export default You;

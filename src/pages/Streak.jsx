import React, { useEffect } from "react";
import ImageCard from "../components/ImageCard";
import images from "../assets/images";
import Heading from "../components/ui/Heading";
import PollenRewardsCard from "../components/PollenRewardsCard";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import RewardConfirm from "./RewardConfirm";
import { checkRewardClaimedToday, claimPollens } from "../api/rewardsApi";
import Loading from "../components/Loading";

const Streak = () => {
  const [rewardTaken, setRewardTaken] = useState(true);
  const [showRewardConfirm, setShowRewardConfirm] = useState(false);
  const [rewardInfo, setRewardInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [claimedPollens, setClaimedPollens] = useState(null);

  const tg = window.Telegram.WebApp;
  // tg.trackEvent("streak_page_viewed");
  tg.ready();

  const handleClaimReward = () => {
    setLoading(true);
    claimPollens(
      // "8141119319"
      tg?.initDataUnsafe?.user?.id
    )
      .then((res) => {
        console.log(res);
        if (res?.success) {
          setClaimedPollens(res?.claimedPollens);
          setShowRewardConfirm(true);
          tg.sendData(
            JSON.stringify({
              event: "reward_claimed",
              user: tg?.initDataUnsafe?.user?.id,
            })
          );
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleCheckRewardClaimedToday = () => {
    setLoading(true);
    checkRewardClaimedToday(
      // "8141119319"
      tg?.initDataUnsafe?.user?.id
    )
      .then((res) => {
        setRewardTaken(res?.claimedToday);
        setRewardInfo(res);
        setLoading(false);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleRewardTaken = () => {
    handleCheckRewardClaimedToday();
    setRewardTaken(true);
    setShowRewardConfirm(false);
  };

  useEffect(() => {
    handleCheckRewardClaimedToday();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      {!showRewardConfirm ? (
        <div className="bg-[#0f0f0f]  h-[100%] w-[100%] flex flex-col items-center overflow-y-scroll pb-3">
          <ImageCard
            boxClasses="w-[100%] flex justify-center items-center"
            imageClasses="w-[123px] h-[120px] mt-[35px]"
            imageSrc={images?.images.gift}
          />
          <Heading
            level="h2"
            className="text-white font-accent font-b7 text-[46px] tracking-[3px]  mt-4"
            children={`${rewardInfo?.pollens} Pollen`}
          />
          <Heading
            level="h2"
            className="text-white font-secondary font-b6 text-[17px] tracking-[-0.4px] "
            children="Daily reward"
          />
          <PollenRewardsCard rewardTaken={rewardTaken} day={rewardInfo?.day} />

          <PrimaryButton
            width="full"
            colorType={rewardTaken ? "secondary" : "primary"}
            text={rewardTaken ? "Come Back Tomorrow" : "Claim"}
            onClick={rewardTaken ? () => {} : () => handleClaimReward()}
          />
        </div>
      ) : (
        <RewardConfirm
          handleRewardTaken={handleRewardTaken}
          claimedPollens={claimedPollens}
        />
      )}
    </>
  );
};

export default Streak;

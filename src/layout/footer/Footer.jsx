import React from "react";
import images from "../../assets/images";
import NavItem from "../../components/NavItem";

const Appfooter = () => {
  const navItems = [
    {
      name: "Streak",
      icon: images.icons.streak,
      highlightIcon: images.icons.streakSelect,
      link: "/streak",
    },
    {
      name: "Invite",
      icon: images.icons.invite,
      highlightIcon: images.icons.inviteSelect,
      link: "/invite",
    },
    {
      name: "The Hive",
      icon: images.icons.globe,
      highlightIcon: images.icons.globeSelect,
      link: "/thehive",
    },
    {
      name: "You",
      icon: images.icons.you,
      highlightIcon: images.icons.youSelect,
      link: "/you",
    },
  ];
  const pathname = window.location.pathname;
  return (
    <div className=" w-[100%] h-[100%]  bottom-0 bg-secondary flex justify-around items-center">
      {navItems?.map((icon, i) => {
        return (
          <NavItem
            icon={icon.icon}
            icon2={icon.highlightIcon}
            name={icon.name}
            path={icon.link}
            isSelcted={pathname === icon.link}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Appfooter;

import PropTypes from "prop-types";
import React from "react";
import Image from "./ui/Image";
import { useNavigate } from "react-router-dom";
import Text from "./ui/Text";

const NavItem = ({ icon, icon2, name, path, isSelcted }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(path)} className="flex flex-col items-center">
      <div
        className="w-[64px] h-[28px] rounded-[35px] flex justify-center items-center "
        style={{ backgroundColor: isSelcted ? "#FFBC1326" : "transparent" }}
      >
        <Image src={isSelcted ? icon2 : icon} className="h-[19px]" />
      </div>
      <Text
        className={`font-b6 text-[13px] mt-1 ${
          isSelcted ? "text-primary" : "text-[#78797E]"
        } `}
        children={name}
      />
    </div>
  );
};

NavItem.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  path: PropTypes.string,
  isSelcted: PropTypes.bool,
};

export default NavItem;

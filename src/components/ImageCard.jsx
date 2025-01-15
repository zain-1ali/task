import React from "react";
import PropTypes from "prop-types";
import Image from "./ui/Image";

const ImageCard = ({ boxClasses, imageClasses, imageSrc }) => {
  return (
    <div className={boxClasses}>
      <Image src={imageSrc} className={imageClasses} alt="image" />
    </div>
  );
};

ImageCard.propTypes = {
  boxClasses: PropTypes.string,
  imageClasses: PropTypes.string,
  imageSrc: PropTypes.string,
};
export default ImageCard;

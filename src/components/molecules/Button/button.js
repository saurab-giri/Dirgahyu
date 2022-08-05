import React from "react";
import PropTypes from "prop-types";
//import { AiOutlinePlus } from "react-icons/ai";
import { IconContext } from "react-icons";

export const CustomButton = (props) => {
  const { title, color, background, size, border, padding, icon, weight } =
    props;
  return (
    <button
      className="donate-btn"
      style={{
        backgroundColor: background,
        color: color,
        fontSize: size,
        border: border,
        padding: padding,
        fontWeight: weight,
      }}
    >
      <IconContext.Provider value={{}}>
        <span>{icon}</span>
      </IconContext.Provider>
      <span className="createbtn-title">{title}</span>
    </button>
  );
};

CustomButton.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string,
  icon: PropTypes.string,
  padding: PropTypes.string,
  weight: PropTypes.string,
};
CustomButton.defaultProps = {
  title: "",
  size: "",
  color: "",
  background: "",
  border: "",
  icon: "",
  padding: "",
  weight: "",
};

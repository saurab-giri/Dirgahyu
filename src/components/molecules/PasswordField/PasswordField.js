import React, { useState } from "react";
import "../../../index.css";
import PropTypes from "prop-types";
import showPwdImg from "./show-password.svg";
import hidePwdImg from "./hide-password.svg";

const InputField = (props) => {
  const { label, name, placeholder, error, value, onChange } = props;
  //const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <div className="pwd-container mb-3">
      <input
        name={name}
        placeholder={placeholder}
        className="form-control form-control-md pwd-input"
        type={isRevealPwd ? "text" : "password"}
        value={value}
        onChange={onChange}
      />
      <div className="text-danger">{error && error.message}</div>
      <img
        title={isRevealPwd ? "Hide password" : "Show password"}
        src={isRevealPwd ? showPwdImg : hidePwdImg}
        onClick={() => setIsRevealPwd((prevState) => !prevState)}
      />
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};
InputField.defaultProps = {
  label: "",
  name: "",
  type: "",
  value: "",
  onChange: () => {},
  placeholder: "",
  error: "",
};

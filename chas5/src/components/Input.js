import React from "react";
import PropTypes from "prop-types";

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  setToggle,
  renderTextArea,
  changeInput,
}) => {
  return (
    <p>
      {renderTextArea ? (
        <textarea rows={8} cols={20} value={value} onChange={onChange} />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      )}
      {name === "password" && (
        <button
          className="eye-button"
          type="button"
          onClick={() => setToggle()}
        >
          <i
            className={type === "password" ? "fa fa-eye-slash" : "fa fa-eye"}
          ></i>
        </button>
      )}
      {name === "comment" && (
        <button type="button" onClick={changeInput} className="eye-button">
          <i
            className={renderTextArea ? "fa fa-comment-o" : "fa fa-comments-o"}
          ></i>
        </button>
      )}
    </p>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  setToggle: PropTypes.func,
  name: PropTypes.string,
  renderTextArea: PropTypes.bool,
  changeInput: PropTypes.func,
};

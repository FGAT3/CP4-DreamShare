import PropTypes from "prop-types";
import "./Button.scss";

export default function Button({ text, color, className, onClick }) {
  return (
    <button
      type="submit"
      className={`button-${color} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["primary", "green", "orange", "red"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: "primary",
  className: null,
  onClick: undefined,
};

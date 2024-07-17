import PropTypes from "prop-types";
import "./Button.scss";

export default function Button({ text, color }) {
  return (
    <button type="button" className={`button-${color}`}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["primary", "green", "red"]),
};

Button.defaultProps = {
  color: "primary",
};

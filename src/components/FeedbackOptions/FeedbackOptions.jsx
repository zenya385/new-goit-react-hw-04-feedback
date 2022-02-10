import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.buttons}>
      {options.map((item) => (
        <button
          className={s.button}
          key={item}
          name={item}
          type="button"
          onClick={onLeaveFeedback}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.protoTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

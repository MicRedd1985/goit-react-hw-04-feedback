import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.options}>
      {options.map(item => (
        <button
          type="button"
          name={item}
          className={style.btn}
          onClick={onLeaveFeedback}
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default FeedbackOptions;

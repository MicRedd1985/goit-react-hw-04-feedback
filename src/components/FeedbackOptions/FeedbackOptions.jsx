import React from "react";
import PropTypes from 'prop-types';
import style from 'components/FeedbackOptions/FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const onButtonClick = evt => {
    onLeaveFeedback(evt.target.dataset.name);
  };
    return (
        <div className={style.options}>
            {options.map(item => (
                <button 
                    type="button"
                    data-name={item}
                    className={style.btn}
                    onClick={onButtonClick}
                    key={item}
                >{item}</button>
           ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default FeedbackOptions;
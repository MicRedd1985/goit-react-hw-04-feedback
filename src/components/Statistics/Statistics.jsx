import React from "react";
import PropTypes from 'prop-types';
import style from 'components/Statistics/Statistics.module.css'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (<div className="counter__stat">
        <ul className={style.statistic}>
            <li className={style.statItem}>Good:{good}</li>
            <li className={style.statItem}>Neutral:{neutral}</li>
            <li className={style.statItem}>Bad:{bad}</li>
            {total > 0 && (<li className={style.statItem}>Total:{total}</li>)}
            {total > 0 && (<li className={style.statItem}>Positive Feedback:{good === 0? "0%": positivePercentage}</li>)}
        </ul>
    </div>)
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
export default Statistics;
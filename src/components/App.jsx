import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notifications/Notification';

export default function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const countTotalFeedback = () => {
    return goodFeedback + badFeedback + neutralFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    let totalFeedback = countTotalFeedback();
    return totalFeedback ? Math.round((goodFeedback / totalFeedback) * 100) : 0;
  };

  const onBtnClick = event => {
    const options = event.target.name;

    switch (options) {
      case 'good':
        setGoodFeedback(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutralFeedback(prevState => prevState + 1);
        break;
      case 'bad':
        setBadFeedback(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onBtnClick}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}

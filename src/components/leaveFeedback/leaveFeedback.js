import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import { Wrapper } from './leaveFeedback.styled';

export const FeedbackList = ({ options, onLeaveFeedback }) => (
  <Wrapper>
    {options.map(option => (
      <button key={nanoid()} type="button" onClick={onLeaveFeedback}>
        {option}
      </button>
    ))}
  </Wrapper>
);


FeedbackList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
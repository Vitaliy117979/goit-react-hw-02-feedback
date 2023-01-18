import React, { Component } from 'react';
import { FeedbackList } from './leaveFeedback/leaveFeedback';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { MainWrapper } from './MainWrapper.styled';


const title = {
  leaveFeedback: "Please leave feedback",
  static: "Statistics"
}
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  leaveFeedback = event => {
    this.setState(prevState => {
      return {
        [event.target.textContent]: prevState[event.target.textContent] + 1,
      };
    });
  };

  total = state => Object.values(state).reduce((acc, item) => acc + item, 0);
  positivePercentage = ({ good }) =>
    ((good / this.total(this.state)) * 100).toFixed();


  render() {
    const { good, neutral, bad } = this.state;


    return (

      
      <MainWrapper>
        <Section title={title.leaveFeedback}>
        <FeedbackList
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.leaveFeedback}
        />
        </Section>

      

<Section title={title.static}>
{this.total(this.state) ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.total(this.state)}
            positivePercentage={this.positivePercentage(this.state)}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
        </Section>
        

      
      </MainWrapper>
    );
  }
}

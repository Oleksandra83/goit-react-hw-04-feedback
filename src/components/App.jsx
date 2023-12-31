import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Container } from './App.styled';


export default function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleFeedback = e => {
		switch (e) {
			case 'good':
				setGood(prevState => prevState + 1);
				break;
			case 'neutral':
				setNeutral(prevState => prevState + 1);
				break;
			case 'bad':
				setBad(prevState => prevState + 1);
				break;
			default: return;
		}
	};

	const countTotalFeedback = () => good + neutral + bad;

	const countPositiveFeedbackPercentage = () => Math.round((good * 100) / countTotalFeedback());

		return (
			<Container>
				<Section title="Please leave feedback">
					<FeedbackOptions
						options={Object.keys({good, neutral, bad})}
						onHandle={handleFeedback}
					/>
				</Section>
				<Section title="Statistics">
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={countTotalFeedback()}
						positivePercentage={countPositiveFeedbackPercentage()}>
					</Statistics>
				</Section>
			</Container>
		);
	}
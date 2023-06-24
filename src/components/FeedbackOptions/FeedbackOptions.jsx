import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { Icons } from './Icons';
import { ButtonFeedback } from 'components/ButtonFeedback/ButtonFeedback';
import { FeedbackContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onHandle }) => {
	return (
		<FeedbackContainer>
			{options.map(option => {
				return (
					<li key={option}>
						<ButtonFeedback
							key={option}
							icon={Icons[option]}
							type="button"
							value={option}
							children={option}
							onClick={() => onHandle(option)}>
							{option}
						</ButtonFeedback>
					</li>
				);
			})}
		</FeedbackContainer>
	);
};

FeedbackOptions.propTypes = {
	options: arrayOf(PropTypes.string.isRequired),
	onHandle: PropTypes.func.isRequired,
};
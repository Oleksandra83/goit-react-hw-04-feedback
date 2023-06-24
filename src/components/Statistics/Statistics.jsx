import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineHeart } from 'react-icons/hi';
import {
	MdThumbDownOffAlt,
	MdSentimentNeutral,
	MdPercent,
	MdOutlineSummarize,
} from 'react-icons/md';
import { Notification } from '../Notification/Notification';
import { StatisticList, StatisticDescr } from './Statistics.styled';

export const Statistics = ({
	good,
	neutral,
	bad,
	total = 0,
	positivePercentage = 0,
}) => {
	return total ? (
		<StatisticList>
			<li>
				<StatisticDescr>
					<HiOutlineHeart size="20" />
					Good: <span>{ good }</span>
				</StatisticDescr>
			</li>
			<li>
				<StatisticDescr>
					<MdSentimentNeutral size="20" />
					Neutral: <span>{ neutral }</span>
				</StatisticDescr>
			</li>
			<li>
				<StatisticDescr>
					<MdThumbDownOffAlt size="20" />
					Bad: <span>{ bad }</span>
				</StatisticDescr>
			</li>
			<li>
				<StatisticDescr>
					<MdOutlineSummarize size="20" />
					Total: <span>{ total }</span>
				</StatisticDescr>
			</li>
			<li>
				<StatisticDescr>
					<MdPercent size="20" />
					Positive feedback: <span>{ positivePercentage }%</span>
				</StatisticDescr>
			</li>
		</StatisticList>
	) : (
			<Notification message="There is no feedback" />
	);
};

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired,
};
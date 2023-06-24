import React from 'react';
import PropTypes from 'prop-types';
import { Header} from 'components/Header/Header'
import { SectionWrapper } from './Section.styled';

export const Section = ({ title, children }) => {
	return (
		<SectionWrapper>
			<Header title={title} />
				{children}
		</SectionWrapper>
	);
};

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
};
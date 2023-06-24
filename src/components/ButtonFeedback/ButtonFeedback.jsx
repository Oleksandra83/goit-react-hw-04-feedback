import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './ButtonFeedback.styled';

export const ButtonFeedback = ({
	icon: Icon = null,
	type = 'button',
	children,
	onClick,
}) => {
	return (
		<ButtonStyled type={type} onClick={onClick}>
			{Icon && <Icon size="14" />}
			{children}
		</ButtonStyled>
	);
};

ButtonFeedback.propTypes = {
	icon: PropTypes.any,
	type: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
};
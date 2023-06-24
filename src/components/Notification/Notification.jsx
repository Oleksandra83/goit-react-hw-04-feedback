import React from 'react';
import PropTypes from 'prop-types';
import { NoFeedback} from './Notification.styled';

export const Notification = ({ message }) => {
	return <NoFeedback>{message}</NoFeedback>;
};

Notification.propTypes = {
	message: PropTypes.string.isRequired,
};
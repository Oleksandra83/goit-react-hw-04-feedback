import styled from "styled-components";

export const ButtonStyled = styled.button`
	display: flex;
	align-items: center;
	gap: 5px;
	border: none;
	border-radius: 4px;
	padding: 5px 10px;
	background-color: #9198e5;
	box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
	transition: all 0.2s ease-in-out;
	font-size: 18px;
	color: #fff;
	text-transform: capitalize;
	cursor: pointer;

	:hover,
	:focus {
		background-color: #c7cbf2;
		color: #bd2222;
		svg {
			fill: #bd2222;
			stroke: #bd2222;
		}
		:active {
			color: #bd2222;
			svg {
			fill: #bd2222;
			stroke: #bd2222;
			}
		}
	}
`;
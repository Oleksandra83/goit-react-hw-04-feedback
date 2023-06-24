import styled from "styled-components";

export const StatisticList = styled.ul`
	padding: 12px;
	margin: 0 auto;
	border-radius: 4px;
`;

export const StatisticDescr = styled.p`
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 5px 10px;
	transition: all 0.2s ease-in-out;
	font-size: 20px;
	color: #fff;
	text-shadow: 2px 2px 5px black;
	cursor: pointer;
	svg {
			fill: #bd2222;
			stroke: #bd2222;
	}
`;

import styled from 'styled-components';
import Colors from '../../Shared/Styles/colors';
import { NavLink } from 'react-router-dom';

const theme = 'dark';

export const AccountPage: any = styled.div`
	min-height: 100vh;
	text-align: center;
	display: flex;
	align-items: center;
	flex-direction: column;
	color: white;
`;

export const AvatarContain: any = styled.div`
	margin-bottom: 40px;
`;

export const Avatar: any = styled.img`
	height: 60px;
	width: 60px;
	border-radius: 50%;
`;

export const AvatarPlaceholder: any = styled.div`
	font-size: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 60px;
	width: 60px;
	border-radius: 50%;
	background: #3c3c3c;
	padding: 5px;
`;

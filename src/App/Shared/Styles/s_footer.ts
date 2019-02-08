import styled from 'styled-components';

export const FooterContain: any = styled.footer`
	background-color: rgba(9.8%, 9%, 11%, .4);
	margin-top: 40px;
	font-family: 'Archivo Black', sans-serif;  
	z-index: 100;
	width: 100%; 
	padding: 10px 2%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	color: white;
`;

export const FooterConnectContain: any = styled.div`
	font-size: 35px;
	margin-bottom: 20px;
	& :not(:only-child):first-child {
		margin-right: 25px;
	}
`;

export const ConnectIcon: any = styled.a`
	cursor: pointer;

	&:active :first-child {
		color: grey;
	}
`;


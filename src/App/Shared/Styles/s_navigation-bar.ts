import styled from 'styled-components';

export const Nav: any = styled.nav`
	background-color: rgba(9.8%, 9%, 11%, .4);
	font-family: 'Archivo Black', sans-serif;  
	z-index: 100;
	position: fixed;
	top: 0;
	left: 0;  
	width: 100%; 
	padding: 10px 2%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const LogoContain: any = styled.div`
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const LogoImage: any = styled.img`
	cursor: pointer;
	height: 8vw;
	width: 8vw;
	min-height: 20px;
	min-width: 20px;
	max-height: 40px;
	max-width: 40px;
`;

export const NavAuthContain: any = styled.div`
	color: white;
	position: relative;
`;

export const NavAuth: any = styled.div`
	cursor: pointer;
	font-size: 14px;
	user-select: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const NavAvatarContain: any = styled.img`
	height: 20px;
	width: 20px;
	border-radius: 50%;
`;

export const NavAvatar: any = styled.img`
	height: 20px;
	width: 20px;
	border-radius: 50%;
`;

export const NavUsername: any = styled.div`
	user-select: none;
`;

export const NavAvatarPlaceholder: any = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	width: 30px;
	border-radius: 50%;
	background: #3c3c3c;
	padding: 5px;
`;

export const NavAuthDropdownContain: any = styled.div`
	position: absolute;
	bottom: -30px;
	width: 110px;
	background: #3c3c3c;
`;

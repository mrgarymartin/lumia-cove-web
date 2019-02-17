import styled from 'styled-components';
import Colors from '../../Shared/Styles/colors';
import { NavLink } from 'react-router-dom';

const theme = 'dark';

export const SchoolPage: any = styled.div`
	color: ${Colors.white};
	min-height: 100vh;
	display: flex;
`;

export const SchoolSidebar: any = styled.div`
	color: ${Colors.white};
	// background: rgb(238, 238, 238) none repeat scroll 0% 0%;
	background: ${Colors.sideBarBg[theme]};
	display: flex;
	flex-direction: column;
	text-align: left;
	padding: 20px;
	min-width: 160px;
	width: 160px;
	max-width: 150px;
`;

export const LogoSchoolContain: any = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 20px;
`;

export const SidebarLink: any = styled(NavLink)`
	color: #8c8b8d;
  
	&.active {
    color: ${Colors.white};
	}

  &:hover {
    color: ${Colors.white};
  }
`;

export const LessonPage: any = styled.div`
	text-align: left;
	padding: 10px 20px;
`;

export const LessonHeadContain: any = styled.header`
	// display: flex;
`;

export const LessonHead: any = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const LessonHeaderRow: any = styled.hr`
	width: 100%;
	margin: 20px 0;
`;

export const LessonTitle: any = styled.h2`
	display: flex;
	align-items: center;
`;

export const LessonBody: any = styled.div`

`;

export const LessonOverview: any = styled.div`

`;

export const LessonImage: any = styled.img`
	width: 100%;
`;

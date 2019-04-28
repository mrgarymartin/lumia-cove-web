import styled from 'styled-components';
import Colors from '../../Shared/Styles/colors';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

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


export const SettingAlone: any = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props: any) => props.isPath ? Colors.white : '#8c8b8d'};

  &:hover {
    color: ${Colors.white};
  }
`;

export const SettingIcon: any = styled.div`
  margin-right: 10px;
`;

export const SettingParent: any = styled.div`
  width: 100%;
`;

export const ParentAlone: any = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: ${(props: any) => props.isPath ? Colors.white : '#8c8b8d'};
  
  &:hover{
    color: ${Colors.white};
  }
`;
export const LeftParent: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChildrenSettings: any = styled.div`
  margin-left: 26px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ChildAlone: any = styled.div`

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

export const LessonSubtitle: any = styled.h2`
	margin: 30px 0 20px;
`

export const LessonBody: any = styled.div`

`;

export const LessonOverview: any = styled.div`

`;

export const LessonImage: any = styled.img`
	display: block;
	width: 100%;
	margin: 20px 0 20px;
`;

export const SmallLessonImage: any = styled(LessonImage)`
	width: 200px;
`;

export const SchoolLink: any = styled(Link)`
	text-decoration: underline !important;
	color: ${Colors.callToAction[theme]};
`;

export const UnderlineLink: any = styled.a`
	text-decoration: underline !important;
	color: ${Colors.callToAction[theme]};
`;

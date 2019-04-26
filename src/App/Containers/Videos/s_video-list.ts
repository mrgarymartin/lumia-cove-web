import styled from 'styled-components';

export const VideoListPage = styled.div `
	min-height: 100vh;
	text-align: center;
	display: flex;
	align-items: center;
	flex-direction: column;
	color: white;
`;

export const VideoListHeadBorder = styled.hr `
	width: 80%;
	background: white;
	margin-bottom: 20px;
`;

export const VideoListContain = styled.div `
	width: 90%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
`;

export const VideoBox = styled.div `
	height: 20vw;
	max-height: 500px;
	width: 40%;
	min-height: 220px;
	margin: .5rem;
	overflow: hidden;
	border-radius: .6rem;
	margin-bottom: 60px;
	
	@media (max-width: 840px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const VideoTitle = styled.div `
	max-height: 60px;
	min-height: 60px;
	
	@media (max-width: 840px) {
		width: 100%;
		height: 50vw;
	}
`;

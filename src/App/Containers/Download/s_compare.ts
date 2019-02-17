import styled from 'styled-components';

export const ComparePage: any = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`;

export const ComparePageTitle: any = styled.div`
	margin-bottom: 30px;
	font-size: 40px;
	font-weight: 700;
	/* Tablet */
	@media (max-width: 950px) {
		font-size: 6vw;
	}
`;

export const CompareBox: any = styled.div`
	border: solid white 1px;
	// width: 50vw;


	/* Tablet */
	@media (max-width: 950px) {
		max-width: 80vw;
	}

	/* Mobile */
	@media (max-width: 650px) {

	}

	/* < Mobile */
	@media (max-width: 319px) {

	}
`;

export const CompareTitleContain: any = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const IconLeft: any = styled.div`
	margin-right: 10px;
	display: flex;
	align-items: center;
`;

export const Separator: any = styled.div`
	border: solid 1px white;
`;

export const CompareBoxHeader: any = styled.div`
	display: flex;
	border-bottom: solid white 1px;
`;

export const CompareBoxRow: any = styled.div`
	display: flex;
	border-bottom: solid white 1px;
`;

export const CompareBoxColumn: any = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 200px;
	min-width: 200px;
	padding: 10px 5px;

	/* Tablet */
	@media (max-width: 950px) {
		width: 130px;
		min-width: 130px;
	}
`;

export const CompareBoxColumnDescription: any = styled(CompareBoxColumn)`
	width: 500px;
	justify-content: flex-start;
	text-align: left;

	/* Tablet */
	@media (max-width: 950px) {
		// width: 35%;
		// min-width: 35%;
	}
`;

export const GetButton: any = styled.button`
	width: 100px;
	cursor: ${(props: any) => props.disabled ? 'no-drop' : 'pointer'};
	font-size: .8rem;
	background: ${(props: any) => props.color ? props.color : 'dimgray'};
	border: solid 1px white;
	color: white;
	padding: 3px 10px;

	&[disabled] {
		filter: brightness(0.8);
	}

	&:focus {
			outline:none;
	}

	&:active {
		border: solid 1px gray;
	}
`;

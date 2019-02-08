import styled from 'styled-components';
import Colors from './colors';

const theme = 'dark';

export const Button: any = styled.button`
		cursor: ${(props: any) => props.disabled ? 'no-drop' : 'pointer'};
		font-size: .8rem;
    background: ${Colors.light};
    border: solid 1px ${Colors.dark};
    color: ${Colors.dark};
    padding: 3px 10px;

		&[disabled] {
			filter: brightness(0.8);
		}

		&:focus {
        outline:none;
    }

    &:active {
			border: solid 1px ${Colors.text[theme]};
    }
`;

export const AddButton: any = styled(Button)`
	background:  ${Colors.callToAction.dark};
	color: ${Colors.light};

	&:active {
		background: ${Colors[theme].callToActionHover}
	}
`;

export const ActionButton: any = styled(Button)`
	background:  ${Colors.callToAction.dark};
	color: ${Colors.light};

	&:active {
		background: ${Colors[theme].callToActionHover}
	}
`;

export const ResetButton: any = styled(Button)`
	background:  ${Colors.reset};
	color: ${Colors.light};

	&:active {
		background: ${Colors.resetHover}
	}
`;

export const ButtonIcon: any = styled.span`
	
`;

export const ButtonText: any = styled.span`

`;

export const ContinueButton: any = styled(Button)`
	margin-top: 2rem;
	padding: .5rem 3rem;
	font-size: 2rem;
`;

export const SubmitButton: any = styled(Button)`
    display:block;
    margin:20px auto 30px auto;
    font-size:1rem;
    background: none;
    border: solid 1px ${Colors.light};
    color: ${Colors.light};
`;

export const Back: any = styled.div`
		cursor: ${(props: any) => props.disabled ? 'no-drop' : 'pointer'};
    font-size: 1rem;
    color: ${Colors.light};
		background: none;
		border: none;

    &:active {
			color: ${Colors.active};
    }
`;

export const ToggleButton: any = styled(Button)`
	width: 100px;
	background: ${(props: any) => (props.on ? Colors.active[theme] : 'none')};
	color: ${Colors.text[theme]};
`;

export const LoginAuthButton: any = styled(Button)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 200px;
	padding: 10px 0;
	background: ${(props: { color: string }) => props.color};
	color: white;
`;

export const LoginAuthButtonIcon: any = styled.img`
	height: 12px;
	margin-right: 10px;
`;

export const ToastClick: any = styled(Button)`
    border: solid 1px ${Colors.light};
    color: ${Colors.light};
`;

export const TopRightCloseButton: any = styled(Button)`
    position: absolute; 
    top: 15px; 
    right: 15px;
`;

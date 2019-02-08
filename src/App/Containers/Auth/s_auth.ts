import styled from 'styled-components';
import Colors from '../../Shared/Styles/colors';

const CompColors: any = {
	input: Colors.main,
	extra: Colors.extra,
	selected: Colors.extra,
	unselected: Colors.light,
	error: 'red',
	hover: Colors.extra,
	focus: Colors.main,
	active: Colors.extra,
	invertActive: Colors.light,
};

export const AuthPage: any = styled.div`

`;

export const SiteAuthContain: any = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;

export const AuthBox: any = styled.div`

`;

export const AuthContain: any = styled.div`
    padding-top: 8vh;
    height:100%;
    min-height:100vh;
    background-color: ${Colors.dark};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LogoText: any = styled.div`
    margin-top: 40px;
    font-size: 3.5rem;
    font-weight: 700;
    color: ${Colors.light};
`;

export const Logo: any = styled.div``;

export const SwitchRow: any = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 60px;

	 & :not(:only-child) {
		margin-right: ${props => props.split ? '25px' : 0};
	}
`;

export const SwitchButton: any = styled.button`
   font-size: 1rem;
	 padding: 3px 5px;
   background: ${(props: any) => (props.on ? CompColors.selected : 'none')};
   border: solid 1px ${Colors.light};
   color: ${Colors.light};
   &:hover {
        background-color: ${CompColors.hover};
   }

    &:active {
        outline: none;
        color: ${CompColors.active};
        background-color: ${CompColors.invertActive};
   }
`;

export const Error: any = styled.div`
   color: ${CompColors.error};
   font-size: 1.1rem;
	 margin-top: 10px;
`;

// Login
export const LoginContain: any = styled.div`
    margin:auto;
    margin-top: 50px;
`;

export const LoginBox: any = styled.div``;

export const LoginForm: any = styled.div``;

export const InnerForm: any = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;

export const Label: any = styled.label`
    text-align:left;
    margin:20px 0 10px 0;
    color: ${Colors.light};
`;

export const InputField: any = styled.input`
    text-align:center;
    font-size:1.15rem;
    width:200px;
    color: ${Colors.main};
    &:focus{
        outline-color: ${Colors.main};
    }
`;

export const DisabledField: any = styled.div`
    text-align:center;
    font-size:1.15rem;
    color: ${CompColors.extra};
    &:focus{
        outline-color: ${Colors.main};
    }
`;

export const SaveContain: any = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SaveButton: any = styled.button`
    background:${(props: any) => (props.on ? CompColors.selected : 'transparent')};
    width:20px;
    height:20px;
    border: solid 1px ${Colors.light};
    color: ${Colors.light};
    &:hover{}
    &:active{
        filter:brightness(.4);
    }
`;

export const LoginSubmit: any = styled.input`
	cursor:pointer;
	padding: 3px 5px;
	margin-top:30px;
	font-size:1rem;
   background:none;
   border:solid 1px ${Colors.light};
   color: ${Colors.light};
    &:hover{
        background-color: ${CompColors.hover};
   }
    &:focus{
        outline:none;
    }
    &:active{
        outline:none;
        color: ${CompColors.active};
        background-color: ${CompColors.invertActive};
   }
`;

export const ForgotPasswordText: any = styled.div`
    cursor: pointer;
    margin-top: 30px;
    color: ${(props) => props.forgot ? Colors.error : Colors.extra};
`;

export const SignUpAuthBox: any = styled.div``;

export const SignUpBox: any = styled.div``;

export const ResetButton: any = styled.span`
   cursor:default;
   user-select:none;
   position:fixed;
   bottom: 30px;
   right:20px;
`;



import Template from '../template';

const authReducer = (state = Template.auth, action) => {
	switch (action.type) {
			case 'SIGN_OUT':
			case 'FRESH_LOGIN':
				state = Template.auth;
				break;

			case 'SIGN_IN':
				state = {
					...state,
					email: action.cred.email,
					avatar: action.cred.avatar,
					username: action.cred.username,
					token: action.cred.token,
					premium: action.cred.premium,
					refreshToken: action.cred.refreshToken,
				};
				break;

			case 'SIGN_IN':
				state = {
					...state,
					premium: action.premium,
				};
				break;

			default:
				break;
	}
	return state;
};

export default authReducer;
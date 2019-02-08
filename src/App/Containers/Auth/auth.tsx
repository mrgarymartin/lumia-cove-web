import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { signIn } from '../../Services/Actions/AuthActions';
import { AuthPage, AuthBox, LoginContain, Error, LoginBox, LoginForm, InnerForm, Label, InputField, SaveContain, SaveButton, LoginSubmit, ForgotPasswordText, SiteAuthContain, SwitchRow, SwitchButton } from './s_auth';
import { LoginAuthButton, LoginAuthButtonIcon } from '../../Shared/Styles/s_buttons';
import LumiaRequest, { URLS } from '../../Shared/Helpers/LumiaRequest';
// import Images from '@Images';
import { toast } from 'react-toastify';

class Auth extends React.Component<any, any> {
	emailInputRef: any;
	usernameInputRef: any;
  passwordInputRef: any;
	confirmPasswordInputRef: any;

	constructor(props: any) {
		super(props);
		this.state = {
			login: true,
			email: '',
			username: '',
			password: '',
			confirm: '',
			forgotEmail: '',
			token: '',
			refreshToken: '',
			loading: false,
			error: null,
			showForgot: false,
		};
	}

	componentDidMount() {
		if (this.props.auth.username) {
			this.props.history.goBack();
		}
	}

	componentDidUpdate() {
		if (this.props.auth.username) {
			this.props.history.goBack();
		}
	}

	switchAccount = () => { this.setState({ login: !this.state.login, password: '', configm: '' }); }

	complete = () => {
		this.props.history.back();
	}

	getProviderSettings = (token, provider, providerSettings) => {
		// RetrieveSettingsFromProvider(token, provider, providerSettings)
		// 	.then(() => {
		// 		this.complete();
		// 	}).catch((err) => {
		// 		console.log('Retrieve settings err: ', err);
		// 		this.setState({ error: 'Could not retrieve settings, please contact us if this continues' });
		// 	});
	}

	register = () => {
		if (!this.state.email || !this.state.username || !this.state.password || !this.state.confirm) {
			this.setState({ error: 'All fields are required to register' });
			return;
		}

		LumiaRequest.post('register', { applicationId: 1, email: this.state.email, username: this.state.username, password: this.state.password, confirm_password: this.state.confirm })
				.then((res: any) => {
					console.log('Register res: ', res);
					this.setState({ loading: false, error: null, errorAttempts: 0 });
					this.props.signIn({ email: res.data.data.email, token: res.data.data.token, username: res.data.data.username, premium: res.data.data.premium });
				})
				.catch((error) => {
					if (error) {
						console.log('Error', error.message);
						this.setState({ loading: false });
						if (error.response) {
							if (error.response.status === 404) {
								this.setState({ error: 'Could not connect to the Lumia Server: 404, please contact us if this continues' });
							} else {
								this.setState({ password: '', confirm: '', error: 'Ran into an error registering. Check all fields and resubmit' });
							}
						} else {
							this.setState({ error: 'Could not connect to the Lumia Server, please contact us if this continues' });
						}
					}
				});
	}

	loginAttempt = () => {
		if (navigator.onLine) {
			this.setState({ loading: true });
			LumiaRequest.post('login', { applicationId: 1, email: this.state.email, password: this.state.password })
				.then((res: any) => {
					console.log('res: ', res);
					this.setState({ loading: false, error: null, errorAttempts: 0 });
					this.props.signIn({ email: res.data.email, token: res.data.token, username: res.data.username, premium: res.data.premium });
				})
				.catch((error) => {
					if (error) {
						console.log('Error', error.message);
						this.setState({ loading: false });
						if (error.response) {
							if (error.response.status === 404) {
								this.setState({ error: 'Could not connect to the Lumia Server: 404, please contact us if this continues' });
							} else {
								this.setState({ password: '', error: 'Email and/or Password is incorrect!' });
							}
						} else {
							this.setState({ error: 'Could not connect to the Lumia Server, please contact us if this continues' });
						}
					}
				});
		} else {
			this.setState({ error: 'Need an internet connection before signing in' });
		}
	}

	externalLogin = (provider: 'twitch' | 'mixer' | 'google' | 'youtube') => {
		console.log('Logging in externally', provider);
		window.open(`${URLS.base}/login/social?provider=${provider}&applicationId=0`, '_blank');
	}

	switchSaveLogin = () => this.setState({ saveLogin: !this.state.saveLogin });

	switchForgotPassword = () => this.setState({ forgotPassword: !this.state.forgotPassword, error: null });

	forgotPassword = () => {
		this.setState({ error: '', errorAttempts: 0, showForgot: true });

		if (this.state.forgotEmail) {
			this.setState({ loading: true });
			LumiaRequest.post('password/forgot', { applicationId: 1, email: this.state.forgotEmail })
				.then(() => {
					this.setState({ loading: false });
					toast.success(`Email has been sent to ${this.state.forgotEmail}`);
				}).catch((err) => {
					console.log('Forgot Password err', err);
					this.setState({ loading: false });
					if (err.response && err.response.data && err.response.data.message) {
						this.setState({ error: err.response.data.message });
					} else
						this.setState({ error: 'Email does not exist, please try again' });
				});
		} else {
			this.setState({ error: 'Need to input email first' });
		}
	}

	handleKeyPress = (e: any) => {
		const login = this.state.login;
		if (e.key === 'Enter') {
			switch (e.target.name) {
					case 'email':
						login ? this.passwordInputRef.focus()
									: this.usernameInputRef.focus();
						break;
					case 'username':
						this.passwordInputRef.focus();
						break;
					case 'password':
						login ? this.loginAttempt()
									: this.confirmPasswordInputRef.focus();
						;
						break;
					case 'confirm':
						this.register();
						break;
					case 'forgotEmail':
						this.forgotPassword();
						break;
					default:
						break;
			}
		}
	}

	handleInputChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		this.setState({ [name]: value, error: null });
	}

	render() {
		const { login, loading, email, username, password, confirm, forgotEmail, forgotPassword, error } = this.state;

      return (
				<AuthPage>

					<SwitchRow>
						<SwitchButton on={login} name="login" onClick={this.switchAccount}>Login</SwitchButton>
						<SwitchButton on={!login} name="signup" onClick={this.switchAccount}>Register</SwitchButton>
					</SwitchRow>
					<AuthBox>
						<LoginContain>
							<LoginBox>
								{!forgotPassword || !login ?
									<LoginForm>
										<Error style={{ marginBottom: '20px' }}>{error}</Error>

										{/* <SiteAuthContain>
											<LoginAuthButton color='rgb(101, 66, 166)' onClick={() => this.externalLogin('twitch')}>
												<LoginAuthButtonIcon src={require('../../images/twitch.png')} />
												{login ? 'Sign in' : 'Register'} with Twitch
											</LoginAuthButton>
											<LoginAuthButton color='rgb(1, 143, 255)' onClick={() => this.externalLogin('mixer')}>
												<LoginAuthButtonIcon src={require('../../images/mixer.png')} />
												{login ? 'Sign in' : 'Register'} with Mixer
											</LoginAuthButton>
											<LoginAuthButton color='rgb(230, 33, 23)' onClick={() => this.externalLogin('google')}>
												<LoginAuthButtonIcon src={require('../../images/youtube.png')} />
												{login ? 'Sign in' : 'Register'} with Youtube
											</LoginAuthButton>
										</SiteAuthContain>

										<div style={{ color: 'white', margin: '30px 0 12px 0' }}>OR</div> */}
										
										<InnerForm>
											<Label>Email</Label>
											<InputField ref={(ref) => this.emailInputRef = ref} name='email' type='text' maxLength='60' value={email} onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} placeholder={'email'} />
											{!login &&
												<Fragment>
													<Label>Username</Label>
													<InputField ref={(ref) => this.usernameInputRef = ref} name='username' type='text' maxLength='25' value={username} onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} placeholder={'username'} />
												</Fragment>
											}
											<Label>Password</Label>
											<InputField ref={(ref) => this.passwordInputRef = ref} name='password' type='password' maxLength='25' value={password} onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} placeholder={'password'} />
											{!login &&
												<Fragment>
													<Label>Confirm Password</Label>
													<InputField ref={(ref) => this.confirmPasswordInputRef = ref} name='confirm' type='password' maxLength='25' value={confirm} onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} placeholder={'confirm'} />
												</Fragment>
											}
										</InnerForm>
										<LoginSubmit disabled={loading} type='submit' value='Submit' onClick={login ? this.loginAttempt : this.register} />
										{login && <ForgotPasswordText forgot={true} onClick={this.switchForgotPassword}>Forgot password?</ForgotPasswordText>}
									</LoginForm>
									:
									<LoginForm>
										<Label>Enter email to send a password reset email</Label>
										<Error>{error}</Error>
										<InnerForm one={true}>
											<Label>Email</Label>
											<InputField name='forgotEmail' type='email' maxLength='60' value={forgotEmail} onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} placeholder={'email'} />
										</InnerForm>
										<LoginSubmit disabled={loading} type='submit' onClick={this.forgotPassword} />
										<ForgotPasswordText onClick={this.switchForgotPassword}>I remember my password</ForgotPasswordText>
									</LoginForm>
								}
							</LoginBox>
						</LoginContain>
					</AuthBox>
				</AuthPage>
      );
    }
}


const mapState = (state) => {
	const copyState = ({
		auth: state.auth,
	});
	return copyState;
};

const mapDispatch = (dispatch: any) => {
	return {
		signIn: (cred) => dispatch(signIn(cred)),
	};
};

export default withRouter(connect<any, any, any>(mapState, mapDispatch)(Auth));

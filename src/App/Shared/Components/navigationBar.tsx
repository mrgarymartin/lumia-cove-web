import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import { Nav, LogoImage, LogoContain, NavAuthContain, NavAuth, NavAvatar, NavAvatarPlaceholder, NavAuthDropdownContain, NavUsername, NavLinks } from '../Styles/s_navigation-bar';
import { FaUserAlt } from 'react-icons/fa';
import { signOut } from '../../Services/Actions/AuthActions';
import { toast } from 'react-toastify';

class NavigationBar extends React.Component<any> {
  state = {
		authDropdownOpen: false,
	};

	clickedNavAuth = () => {
		this.setState({ authDropdownOpen: !this.state.authDropdownOpen });
	}

	signIn = () => {
		console.log('Signing in');
		this.props.history.push('auth');
	}

	signOut = () => {
		console.log('Signing out');
		this.props.signOut();
		this.setState({ authDropdownOpen: false });
		toast.success(`Logged out successfully`);
		this.props.history.push('/home');
	}

  render() {
		const { authDropdownOpen } = this.state;
		const { avatar, username } = this.props.auth;

		return (
			<Nav>
				<LogoContain>
					<LogoImage className="logo-image" src="assets/StreamLogo.png" onClick={() => this.props.history.push('/stream')} />
				</LogoContain>

				<NavAuthContain>
					<NavLinks>
						<Link to="/school">School</Link>
					</NavLinks>
					{username
						? <NavAuth onClick={this.clickedNavAuth}>
								{avatar
									? <NavAvatar src={''} />
									: <NavAvatarPlaceholder><FaUserAlt /></NavAvatarPlaceholder>
								}
								<NavUsername>{ username }</NavUsername>

								{authDropdownOpen && <NavAuthDropdownContain onClick={this.signOut}>Sign Out</NavAuthDropdownContain>}
							</NavAuth>
						: <NavAuth onClick={this.signIn}>SIGN IN</NavAuth>
					}
				</NavAuthContain>
			</Nav>
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
		signOut: () => dispatch(signOut()),
	};
};

export default withRouter(connect<any, any, any>(mapState, mapDispatch)(NavigationBar));
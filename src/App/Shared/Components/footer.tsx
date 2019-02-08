import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FooterContain, FooterConnectContain, ConnectIcon } from '../Styles/s_footer';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

class Footer extends React.Component<any> {
  state = {
		authDropdownOpen: false,
	};

	clickedLink = () => {
		console.log('Signing in');
		this.props.history.push('auth');
	}

  render() {

		return (
			<FooterContain>
				<FooterConnectContain>
					<ConnectIcon href="https://discord.gg/D5xywEN" target="_blank"><FaDiscord /></ConnectIcon>
					<ConnectIcon href="https://twitter.com/LumiaCove" target="_blank"><FaTwitter /></ConnectIcon>
				</FooterConnectContain>
				<div>© Lumia Cove. All Rights Reserved.</div>
			</FooterContain>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(Footer));
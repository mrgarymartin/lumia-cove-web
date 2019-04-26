import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LumiaRequest, { getRequest } from '../../Shared/Helpers/LumiaRequest';
import { toast } from 'react-toastify';
import { Button, NiceButton, ResetButton } from '../../Shared/Styles/s_buttons';
import { AccountPage, AvatarContain, Avatar, AvatarPlaceholder } from './s_account';
import Colors from '../../Shared/Styles/colors';
import { FaUserAlt } from 'react-icons/fa';
import { LumiaPlans } from '../Payment/buy';

class Account extends React.Component<any, any> {
  state = {
		loading: true,
		isPremium: null,
		plan: null,
		started: null,
		renews: null,
		endsAt: null,
		error: null,
  };

  componentDidMount() {
		if (!this.props.auth.username || !this.props.auth.token) {
			this.props.history.push('/auth');
			return;
		}

		this.getSubscriptionInfo();
  }

	getSubscriptionInfo = async () => {
		try {
			// Get a client token for authorization from your server
			const response = await getRequest(`subscription/info`);
			console.log('response: ', response.data);
			if (response.data) {
				const linkedPlan = LumiaPlans.find((plan) => plan.link === response.data.braintree_plan);
				// const renews = response.data.created_at
				this.setState({ isPremium: true, plan: linkedPlan ? linkedPlan.name : null, endsAt: response.data.ends_at, started: response.data.created_at, loading: false })
			} else {
				this.setState({ isPremium: false, loading: false })
			}
		} catch (err) {
			console.log('err: ', err);
			toast.error(`Ran into an error getting subscription info: ${err.message ? err.message : null}`);
			this.setState({ isPremium: false, loading: false })
		}
	}

	continueSubscription = async() => {
		this.setState({ loading: true });

		try {
			const response = await getRequest(`subscription/resume`);
			console.log('response: ', response.data);
			this.getSubscriptionInfo();
		} catch (err) {
			console.log('err: ', err);
			toast.error(`Ran into an error continuing subscription: ${err.message ? err.message : null}`);
		}
	}

	cancelSubscription = async () => {
		if (window.confirm('Are you sure you would like to cancel your subscription?')) {
			console.log('Cancel Subscription');
			this.setState({ loading: true });

			try {
				const response = await getRequest(`subscription/cancel`);
				console.log('response: ', response.data);
				this.getSubscriptionInfo();
			} catch (err) {
				console.log('err: ', err);
				toast.error(`Ran into an error continuing subscription: ${err.message ? err.message : null}`);
			}
		}
	}

  render() {
			const { isPremium, plan, endsAt, started, renews } = this.state;
			const { avatar, email, username, premium } = this.props.auth;
			
      return (
				<AccountPage>
					<div className="page-title">My Account</div>
					<hr className="page-title-border" />
						<AvatarContain className={'center-flex-row'}>
							{avatar
								? <Avatar src={avatar} />
								: <AvatarPlaceholder><FaUserAlt /></AvatarPlaceholder>
							}
						</AvatarContain>
						<div style={{ marginBottom: '40px' }}>
							<h2>Email: { email }</h2>
							<h2>Username: { username }</h2>
							{/* {premium && this.props.auth.lumia.overlay && <h2>Overlay: { this.props.auth.lumia.overlay }</h2>} */}
						</div>

						{isPremium
							? <div style={{ width: '40%' }}>
									<h2 style={{ color: Colors.logo }}>Premium</h2>
									<hr />
								</div>
							: <h2>Free edition</h2>
						}

						<div style={{ marginTop: '40px' }}>
							{!isPremium
								? <div>
										<NiceButton style={{ fontSize: '1.1rem' }} onClick={() => this.props.history.push('/compare') }>Upgrade now</NiceButton>

										{/* <div>Continue Subscription</div> */}
									</div>
								: <div>
										<h2 style={{ marginBottom: '20px' }}>Started: {started}</h2>

										{/* <h2 style={{ marginBottom: '20px' }}>Renews: 08/01/2019</h2> */}
										{/* <h2>Cancels on: 08/01/2019</h2> */}
										{endsAt
											? <div>
													<h2 style={{ marginBottom: '20px' }}>Ends on: {endsAt}</h2>
													<ResetButton style={{ fontSize: '1.1rem' }} onClick={ this.continueSubscription }>Continue Subscription</ResetButton>
												</div>
											: <ResetButton style={{ fontSize: '1.1rem' }} onClick={ this.cancelSubscription }>Stop Subscription</ResetButton>
										}
									</div>
							}
						</div>
				</AccountPage>
      );
    }
}

const mapState = (state) => {
	const copyState = ({
		auth: state.auth,
	});
	return copyState;
};

export default withRouter(connect<any, any, any>(mapState, null)(Account));

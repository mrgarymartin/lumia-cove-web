import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DropIn from 'braintree-web-drop-in-react';
import axios from 'axios';
import { BuyPage, DropInContainer } from './s_buy';
import { Button } from '../../Shared/Styles/s_buttons';
import { premium } from '../../Services/Actions/AuthActions';
import './buy.css';
import { Label, InputField, InnerForm, SwitchRow, SwitchButton } from '../Auth/s_auth';
import { Timeout, Clear } from 'bettertimers';

import { toast } from 'react-toastify';
import { URLS } from '../../Shared/Helpers/LumiaRequest';
import LoaderMask from '../../Shared/Components/loaderMask';

export const LumiaPlans = [
	{ name: 'monthly', link: 'lumia-stream-monthly-v1', id: 'streamMonthlyPlan', price: '3.99/month', coupon: 'streamLegacyMonthlyCoupon' },
	{ name: 'semi-annual', link: 'lumia-stream-semiannual-v1', id: 'streamSemiAnnualPlan', price: '20.00/6 months', coupon: 'streamLegacySemiAnnualCoupon' },
	{ name: 'yearly', link: 'lumia-stream-yearly-v1', id: 'streamYearlyPlan', price: '38.00/yearly', coupon: 'streamLegacyYearlyCoupon' },
];

class Buy extends React.Component<any> {
  instance;
	errorTimeout: Timeout;

  state = {
		plan: LumiaPlans[0],
    clientToken: null,
		paypal: null,
		paid: null,
		coupon: '',
		error: null,
		loading: false,
  };

  async componentDidMount() {
		if (!this.props.auth.username || !this.props.auth.token) {
			this.props.history.push('/auth');
		}

		if (this.props.auth.username && this.props.auth.premium) {
			toast.error(`You already have a Premium Lumia Stream subscription. If you want to reactivate your subscription head to the My Account page`);
		}


		try {
			// Get a client token for authorization from your server
			const response = await axios.get(`${URLS.api}/payment/token`);
			console.log('response: ', response.data);
			const clientToken = await response.data.token; // If returned as JSON string
			const paypal = await response.data.paypal; // If returned as JSON string

			this.setState({
				clientToken,
				paypal
			});

		} catch (err) {
			console.log('err: ', err);
			toast.error(`Ran into an error setting up braintree: ${err.message ? err.message : null}`);
			this.setState({ error: `Ran into an error setting up braintree: ${err.message ? err.message : null}` }, this.cancelError);
		}
  }

  async buy() {
		this.setState({ error: null, loading: true });
		const plan = this.state.plan;
		console.log('Buying with plan', plan);
		console.log('instance: ', this.instance);

		if (this.instance) {
			try {
				const { nonce } = await this.instance.requestPaymentMethod();
				const payment = await axios.post(`${URLS.api}/payment/subsciption/create`,
					{ nonce, email: 'ahadcove@gmail.com', planId: plan.id, coupon: this.state.coupon, planCoupon: plan.coupon },
					{ headers: { Authorization: `Bearer ${this.props.auth.token}`}}
				);
				console.log('payment: ', payment);
				this.props.premium(true);
				// this.props.history.goBack();
				this.props.history.push('/download', { fromPremium: true });
				toast.success(`Checked out successfully at ${plan.price}`);
			} catch (err) {
				console.log('err: ', err);
				toast.error(`Ran into an error checking out: ${err.message ? err.message : null}`);
				this.setState({ error: `Ran into an error checking out: ${err.message ? err.message : null}` }, this.cancelError);
			}
		}

		this.setState({ loading: false });
  }

	switchPlan = (plan) => {
		console.log('plan: ', plan);
		this.setState({ plan });
	}

	cancelError = () => {
		Clear(this.errorTimeout);

		this.errorTimeout = new Timeout(() => this.setState({ error: null }), 5000);
	}

	handleInputChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		this.setState({ [name]: value, error: null });
	}

  render() {
		const { plan, clientToken, paypal, coupon, paid, error, loading } = this.state;

      return (
        <BuyPage>
					{!clientToken 
						? <div>
								<h1>Loading...</h1>
								{error && <div style={{ color: 'red' }}>{error}</div>}
						 	</div>
						: <Fragment>
								<h1>Checkout Lumia Stream for {plan.price}</h1>
								<div style={{ marginBottom: '30px' }}>
									<h2>Plan</h2>
									<SwitchRow split={true} style={{ marginTop: '20px' }}>
										{LumiaPlans.map((iterPlan) =>
											<SwitchButton on={plan.id === iterPlan.id} name={iterPlan.id} onClick={() => this.switchPlan(iterPlan)}>{iterPlan.price}</SwitchButton>
										)}
									</SwitchRow>
								</div>
								{error && <div style={{ marginTop: '20px', color: 'red' }}>{error}</div>}
								<DropInContainer>
									<DropIn
										options={{ authorization: clientToken, paypal }}
										onInstance={instance => (this.instance = instance)}
									/>
								</DropInContainer>
								<InnerForm one={true}>
									<h2 style={{ marginBottom: '20px' }}>Coupon</h2>
									<span style={{ marginBottom: '10px' }}>If you've previously purchased a Lumia Cove product before, you may enter your key here to receive<br/>Lumia Stream Premium for free for the first 4 months</span>
									<InputField style={{ witdh: '300px' }} name='coupon' type='text' maxLength='30' value={coupon} onChange={this.handleInputChange} placeholder={'coupon'} />
								</InnerForm>
								<Button style={{ marginTop: '20px' }} disabled={!clientToken} onClick={this.buy.bind(this)}>Checkout</Button>
							</Fragment>
					}

					{loading && <LoaderMask />}
        </BuyPage>
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
		premium: (isPremium) => dispatch(premium(isPremium)),
	};
};

export default withRouter(connect<any, any, any>(mapState, mapDispatch)(Buy));

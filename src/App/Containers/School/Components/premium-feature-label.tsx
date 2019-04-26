import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class PremiumFeatureLabel extends React.Component<any> {
	state = {
	};

	render() {
		const {} = this.state;

		return (
			<div>
				Premium
			</div>
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
	};
};

export default withRouter(connect<any, any, any>(mapState, mapDispatch)(PremiumFeatureLabel));
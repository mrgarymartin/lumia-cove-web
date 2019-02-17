import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LessonPage } from '../s_school-home';

class SchoolAlerts extends React.Component<any> {
	state = {
	};

	render() {
		const {} = this.state;

		return (
			<LessonPage style={{ paddingTop: '50px' }}>
				<h1>Coming Soon</h1>
			</LessonPage>
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

export default withRouter(connect<any, any, any>(mapState, mapDispatch)(SchoolAlerts));
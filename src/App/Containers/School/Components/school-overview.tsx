import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LessonPage, LessonHead, LessonHeadContain, LessonTitle, LessonBody, LessonOverview, LessonHeaderRow, LessonImage } from '../s_school-home';
import { Button } from '../../../Shared/Styles/s_buttons';
import { LogoImage } from '../../../Shared/Styles/s_navigation-bar';

const nextUp = require('../school-order.json').studioGeneral;
class SchoolOverview extends React.Component<any> {
	state = {
	};

	render() {
		const {} = this.state;

		return (
			<LessonPage>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Lumia Stream School Overview</LessonTitle>
						<Button onClick={() => this.props.history.push(nextUp.path)}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<h3>Welcome to the Lumia Stream school for gifted streamers!</h3>
						<br />
						<h3>The lessons that we'll go over here will set you up to be a Lumia Stream pro.</h3>
						<br />
						<h3>Select Next Lesson and we'll begin talking about the core of Lumia Stream</h3>
						<br />
						<br />
						<LessonImage src="/assets/School/Overview/Overview.png" />
					</LessonOverview>
				</LessonBody>
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

export default withRouter(connect<any, any, any>(mapState, mapDispatch)(SchoolOverview));
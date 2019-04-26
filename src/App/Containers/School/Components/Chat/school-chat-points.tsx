import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonBody } from '../../s_school-home';
import { Button } from '../../../../Shared/Styles/s_buttons';
import { LogoImage } from '../../../../Shared/Styles/s_navigation-bar';

const nextUp = require('../../school-order.json').chatColors;

class SchoolChatPoints extends React.Component<any> {
	render() {
		return (
			<LessonPage style={{ paddingTop: '50px' }}>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Tiers</LessonTitle>
						<Button onClick={() => this.props.history.push(nextUp.path)}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
				</LessonHeadContain>
				<LessonBody>
					<h1>Coming Soon</h1>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolChatPoints));
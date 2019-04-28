import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview } from '../../s_school-home';
import { LogoImage } from '../../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../../Shared/Styles/s_buttons';

const nextUp = require('../../school-order.json').chatTiers;

class SchoolChatGeneral extends React.Component<any> {
	render() {
		return (
			<LessonPage>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Chat</LessonTitle>
						<Button onClick={() => this.props.history.push(nextUp.path)}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
					{/* <LessonImage src="/assets/School/Studio/1Studio.png" /> */}
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<h3>Chat is the place where your viewers can get involved using Lumia Stream</h3>
						<br />
						<h3>Everything from <Link to='/school/chat/tiers'><b>Tiers</b></Link>, <Link to='/school/chat/points'><b>Points</b></Link>, <Link to='/school/chat/colors'><b>Colors</b></Link>, <Link to='/school/chat/scenes'><b>Scenes</b></Link>, <Link to='/school/chat/reactions'><b>Reactions</b></Link>, and <Link to='/school/chat/interactives'><b>Interactives</b></Link> can be used as chat commands!</h3>
						<br />
						<br />
						<div>Next up… <Link to={nextUp.path}><NiceButton>{nextUp.name}</NiceButton></Link></div>
					</LessonOverview>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolChatGeneral));

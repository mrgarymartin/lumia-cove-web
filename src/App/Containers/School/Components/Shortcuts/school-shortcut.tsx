import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview, LessonSubtitle, SmallLessonImage } from '../../s_school-home';
import { LogoImage } from '../../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../../Shared/Styles/s_buttons';

const nextUp = require('../../school-order.json').lightsGeneral;

class SchoolShortcutGeneral extends React.Component<any> {
	render() {
		return (
			<LessonPage>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Shortcut Menu</LessonTitle>
						{/* <Button onClick={() => this.props.history.push(nextUp.path)}>Next Lesson ></Button> */}
					</LessonHead>
					<LessonHeaderRow />
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<h3>The Shortcut Menu is something that's been with you all the time, it's just been hiding.</h3>
						<br />
						<h3>It is extremely useful for testing or even just quick light changes when you need them.</h3>
						<LessonImage src="/assets/School/Shortcuts/1Shortcuts.png" />
						<br />
						<br />
						You can find the Shortcut Menu in the bottom left corner of the screen
						<LessonImage src="/assets/School/Shortcuts/2Shortcuts.png" />
						<br />
						This will give you the option to choose from Chat commands, Alerts, Reactions, Fuze, Animations and more.
						<br />
						It is a quick and easy way to test whatever you need to test out or change quickly.
						<br />
						<br />
						<br />
						That wraps up the Shortcut Menu.
						<br />
						<br />
						{/* <div>Next on the list is <Link to={nextUp.path}><NiceButton>{nextUp.name}</NiceButton></Link></div> */}
					</LessonOverview>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolShortcutGeneral));
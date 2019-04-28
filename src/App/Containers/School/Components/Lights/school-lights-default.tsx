import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview, LessonSubtitle } from '../../s_school-home';
import { LogoImage } from '../../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../../Shared/Styles/s_buttons';

const nextUp = require('../../school-order.json').accessoriesGeneral;

class SchoolLightsDefault extends React.Component<any> {
	render() {
		return (
			<LessonPage>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Default</LessonTitle>
						<Button onClick={() => this.props.history.push(nextUp.path)}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<h3>In this session we’ll be talking about default light options</h3>
						<br />
						<h3>Default options give you the ability to tell Lumia what you want your lights to do by default</h3>
						<br />
						<h3>This can range from Colors, Scenes, Animations, Fuze, or having your lights turn off</h3>
						<br />
						<LessonImage src="/assets/School/Lights/1Lights.png" />
						<br />
						<LessonSubtitle>Default type</LessonSubtitle>
						This option will determine what your lights will do when they first turn on
						<LessonSubtitle>Default brightness</LessonSubtitle>
						If you choose a color as your <b>Default type</b> you will have the option to move the brightness slider on how bright you want your lights to be by default
						<LessonSubtitle>Default transition</LessonSubtitle>
						If you choose a color as your <b>Default type</b> you will have the option to move the transition slider on how long it takes to change to your selected color
						<LessonSubtitle>Always revert back to default lights</LessonSubtitle>
						This option is very important. It will designate what Lumia should do after a command
						<br />
						When on, it will revert back to the default type after a command
						<br />
						<br />
						<br />
						<LessonSubtitle>The next section is Idle</LessonSubtitle>
						<LessonImage src="/assets/School/Lights/2Lights.png" />
						Idle gives you the ability to have Lumia trigger a special mode after a certain amount of time of no interactions
						<br />
						<br />
						<br />
						That wraps up Default Lights!
						<br />
						<br />
						<div>Next on the list is Accessories... <Link to={nextUp.path}><NiceButton>{nextUp.name}</NiceButton></Link></div>
					</LessonOverview>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolLightsDefault));

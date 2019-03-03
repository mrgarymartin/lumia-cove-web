import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview } from '../s_school-home';
import { LogoImage } from '../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../Shared/Styles/s_buttons';

class SchoolStudio extends React.Component<any> {
	render() {
		return (
			<LessonPage>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Studio</LessonTitle>
						<Button onClick={() => this.props.history.push('/school/scenes')}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
					{/* <LessonImage src="/assets/School/Studio/1Studio.png" /> */}
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<h3>Studio is the root of Lumia Stream</h3>
						<br />
						<h3>Everything you’ll be using around Lumia Stream will stem from Studio</h3>
						<br />
						<h3>This is where you’ll be building and modifying <Link to='/school/scenes'><b>Scenes</b></Link>, <Link to='/school/reactions'><b>Reactions</b></Link>, <Link to='/school/hypes'><b>Hypes</b></Link>, and <Link to='/school/fuze'><b>Fuze</b></Link></h3>
						<br />
						<h3>You can think of Studio as being the base of anything you may want to do in Lumia Stream</h3>
						<br />
						<br />
						<br />If you want to create an alert with a custom Reaction you’ll first create the Reaction in Studio and then select it within the alert.
						<LessonImage src='/assets/School/Studio/2School-Studio-Reaction-Create.gif' />
						<br />
						<br />
						<div>Next up, we’ll go into the first option we can create in Studio… <Link to='/school/scenes'><NiceButton>Scenes</NiceButton></Link></div>
					</LessonOverview>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolStudio));

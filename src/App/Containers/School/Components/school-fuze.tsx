import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview } from '../s_school-home';
import { LogoImage } from '../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../Shared/Styles/s_buttons';

class SchoolFuze extends React.Component<any> {
	state = {
	};

	render() {
		const {} = this.state;

		return (
			<LessonPage>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Fuze</LessonTitle>
						<Button onClick={() => this.props.history.push('/school/chat')}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<h3>Now this is where the magic happens!</h3>
						<br />
						<h3>In this session we're talking about Fuze!</h3>
						<br />
						<h3>Fuze is a feature that will be able to take the averaged color from your screen and display it on all Lumia Stream supported light brands</h3>
						<br />
						<h3>If you've used Hue Sync before it's pretty much that but with all of your lights at the same time</h3>
						<br />
						<br />
						<LessonImage src="/assets/School/Fuze/1Fuze.png" />
						<br />
						When you receive an Alert or Command Fuze will stop and trigger the Alert or Chat Command
						<br />
						Fuze can be used in three places
						<br />
						<br />
						<br />
						<h2>Default Lights</h2>
						<br />
						The first place is as an Default light option
						<br />
						<a>Default Lights</a> is what Lumia Stream will use whenever it turns on
						<br />
						So if you want Fuze to turn on by default you'll want to set that here
						<br />
						<LessonImage src="/assets/School/Fuze/3Fuze.png" />
						<br />
						One of the options for the mode is Fuze
						<br />
						<br />
						<br />
						<h2>Idle</h2>
						<br />
						<br />
						The second place is also in Lights -> Default
						<br />
						There will be a section called Idle
						<br />
						<a>Idle</a> when on will set a timer when there hasn't been any activity for the set amount of time it will turn on a mode
						<br />
						<LessonImage src="/assets/School/Fuze/2Fuze.png" />
						<br />
						So after 5 minutes of no alerts and no chat commands Fuze will start
						<br />
						<br />
						<br />
						<h2>Shortcut Menu</h2>
						<br />
						<br />
						The thrid place is within the Shortcut Menu
						<br />
						You'll be able to Start and Stop Fuze whenever you want
						<br />
						<LessonImage src="/assets/School/Fuze/4Fuze.png" />
						<br />
						<br />
						That wraps up Fuze, now that you've created a Hype you'll be able to select them as an Idle mode or turn them on through the shortcut menu
						<br />
						<br />
						<br />
						<div>Next on the list is <NiceButton><Link to='/school/chat'>Chat</Link></NiceButton></div>
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

export default withRouter(connect<any, any, any>(mapState, mapDispatch)(SchoolFuze));
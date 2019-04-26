import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview } from '../../s_school-home';
import { LogoImage } from '../../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../../Shared/Styles/s_buttons';

const nextUp = require('../../school-order.json').studioAnimations;

class SchoolStudioHypes extends React.Component<any> {
	render() {
		return (
			<LessonPage>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Hypes</LessonTitle>
						<Button onClick={() => this.props.history.push(nextUp.path)}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<h3>In this session we’ll be talking about Hypes.</h3>
						<br />
						<h3>Hypes is a type of reaction that gets your chat more involved</h3>
						<br />
						<h3>When you receive an alert you can have your chat type in their favorite emotes that you decide is a filter and have your lights get brighter as chat types</h3>
						<br />
						<LessonImage src="/assets/School/Hypes/1Hypes.png" />
						<br />
						<br />
						Navigate to Studio -> Hypes
						<br />
						Let's click Add Hype in the top right corner
						<br />
						You'll now see the configurations on the hype builder
						<LessonImage src="/assets/School/Hypes/2Hypes.png" />
						<br />
						<h2>Type</h2>
						<br />
						First option is <b>Brightness</b> which cannot be changed at this time
						<br />
						<br />
						<h2>Value Type</h2>
						<br />
						<b>Value Type</b> can either be a basic color or a scene
						<br />
						<br />
						<h2>Duration</h2>
						<br />
						<b>Duration</b> detemines how long Lumia will stay in hype mode when an alert is triggered with the Hype option
						<br />
						<br />
						<h2>Step Count</h2>
						<br />
						<b>Step count</b> detemines how many emotes/filters is considered
						<br />
						<i>Steps</i> will determine when each level is reached during Hype mode
						<br />
						If you have brightess from 1% - 100% with a step increase of 10, you'll have 10 levels where the 10th level will be the max 100% brightness
						<br />
						<br />
						<h2>Minimum Brightness</h2>
						<br />
						<b>Minimum brightness</b> detemines where the brightness will start at to begin Hype mode
						<br />
						<br />
						<h2>Maximum Brightness</h2>
						<br />
						<b>Maximum brightness</b> detemines where the brightness will end as you reach the max level
						<br />
						<br />
						<h2>Filters</h2>
						<br />
						<b>Filters</b> is where you'll choose what emotes/words are considered a valid value for Hype mode
						To separate the emotes/words you'll separate them with a comma (,)
						<br />
						Filters are case insensitive, so pogChamp will be the same as pogchamp
						<br />
						They also will account for a user entering multiple filters in one message
						<br />
						<br />
						<br />
						That wraps up studio Hypes, now that you've created a Hype you'll be able to select them in your Alerts
						<br />
						<br />
						<div>Next on the list is <Link to={nextUp.path}><NiceButton>{nextUp.name}</NiceButton></Link></div>
					</LessonOverview>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolStudioHypes));
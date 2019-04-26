import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview, LessonSubtitle, SmallLessonImage } from '../../s_school-home';
import { LogoImage } from '../../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../../Shared/Styles/s_buttons';

const nextUp = require('../../school-order.json').chatInteractives;

class SchoolAlertsGeneral extends React.Component<any> {
	render() {
		return (
			<LessonPage>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Alerts</LessonTitle>
						<Button onClick={() => this.props.history.push(nextUp.path)}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<h3>Now we're going to be talking about Alerts.</h3>
						<br />
						<h3>Alerts is most likely what you came for. It is the heart and soul of Lumia Stream</h3>
						<LessonImage src="/assets/School/Alerts/General/1Alerts.png" />
						<br />
						<br />
						Navigate to Alerts -> (Site) -> (Type)
						<br />
						You'll be brought to a handful of settings you can choose from
						<br />
						<LessonSubtitle>Listen</LessonSubtitle>
						This will determine if this specific Alert should be listened to or not.
						<br />
						<LessonSubtitle>Preference</LessonSubtitle>
						Preference will give you the option to choose from either the native site or a platform.
						<br />
						A good use case for using the platform over the native site is when you want your Lumia Stream alert to match up with your overlay alerts.
						<br />
						<LessonSubtitle>Type</LessonSubtitle>
						Type will give you the type of Reaction you want this alert to trigger.
						<br />
						<LessonSubtitle>Reaction/Hype</LessonSubtitle>
						After selecting your type you will have the choice to choose between a previously <Link to="/school/studio/general">Studio</Link> created Reaction or Hype.
						<br />
						<LessonSubtitle>Reaction Configuration (When Type = Reaction)</LessonSubtitle>
						When you choose a Reaction for the type you'll have the ability to edit the Reactions configuration if you created an editable Reactio in <Link to="/school/studio/reactions">Studio.</Link>
						<br />
						<LessonSubtitle>Duration (When Type = Reaction)</LessonSubtitle>
						When you choose a Reaction for the type you'll have the ability to change the duration for how long the alert will last for.
						<br />
						<LessonSubtitle>Transition (When Type = Reaction)</LessonSubtitle>
						When you choose a Reaction for the type you'll have the ability to change the transition time between starting the reaction and ending the reaction.
						<br />
						<br />
						<LessonSubtitle>Filters (When Type = Hype)</LessonSubtitle>
						<LessonImage src="/assets/School/Alerts/General/2Alerts.png" />
						On the other hand if you choose Hype as the Alert type you'll have the option to fill in Filters for this specific Alert.
						<br />
						You can read more about <b>Filters</b> in the <Link to="/school/studio/hypes">Studio Hypes lesson</Link>
						<br />
						<br />
						<br />
						That wraps up Alerts.
						<br />
						<br />
						<div>Next on the list is <Link to={nextUp.path}><NiceButton>{nextUp.name}</NiceButton></Link></div>
					</LessonOverview>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolAlertsGeneral));
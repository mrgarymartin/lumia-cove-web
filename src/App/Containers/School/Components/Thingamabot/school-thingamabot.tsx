import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview, LessonSubtitle, SmallLessonImage } from '../../s_school-home';
import { LogoImage } from '../../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../../Shared/Styles/s_buttons';

const nextUp = require('../../school-order.json').overlaysGeneral;

class SchoolThingamabotGeneral extends React.Component<any> {
	render() {
		return (
			<LessonPage>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Thingamabot</LessonTitle>
						<Button onClick={() => this.props.history.push(nextUp.path)}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<h3>Thingamabot is Lumia Streams helping hand.</h3>
						<br />
						<h3>It doesn't actually have any functionality within the app and Lumia works 100% without Thingamabot being in Chat.</h3>
						<br />
						<h3>The only thing Thingamabot does, if you so choose to have it on, is convey to Chat what's going on with Lumia right now.</h3>
						<br />
						<h3>It also gives chat the ability to see what commands they're allowed to use, confirms that Lumia received the command and will be changing, if Lumia is busy at the moment.</h3>
						<LessonImage src="/assets/School/Thingamabot/1Thingamabot.png" />
						<br />
						<br />
						<LessonSubtitle>Thingamabot Options</LessonSubtitle>
						<br />
						When you first get to the Thingamabot settings, the first option you will see is
						<LessonSubtitle>Listen</LessonSubtitle>
						This will determine if Thingamabot should join the chat or not
						<br />
						Once again it's perfectly fine for Thingamabot to not join the chat and Lumia Stream will still have the ability to listen to chat commands.
						<LessonSubtitle>Listen</LessonSubtitle>
						This will determine if this specific Alert should be listened to or not.
						<br />
						<LessonSubtitle>Site Lights Command</LessonSubtitle>
						The lights command will allow chatters to type in <b>!lights</b> and it will show chat all the commands available for each tier.
						<br />
						If you have a lot of commands it may be best to change the template on how Thingamabot should post the tiers.
						<LessonSubtitle>Is here</LessonSubtitle>
						When Lumia Stream first turns on and you have this option on, Thingamabot will post in chat telling chat the Lumia Stream is on and ready to accept commands.
						<br />
						<LessonSubtitle>Is changing</LessonSubtitle>
						After chat enters a command you can let chat know that Lumia received and accepted the command and will be changing to the targeted command.
						<br />
						This is especially useful for sites like that have a delay of multiple seconds while streaming.
						<LessonSubtitle>Is busy</LessonSubtitle>
						When Lumia is reacting to an alert, chat commands will not go through until the alert is over.
						<br />
						This will put Lumia in a <b>Busy</b> state. So if chat enters a command, you can have Thingamabot convey that Lumia is currently busy.
						<LessonSubtitle>Is cooldown</LessonSubtitle>
						If you have a cooldown on after a chat message Lumia will enter cooldown mode and won't accept any other chat commands until it's over.
						<br />
						If chat enters a command while Lumia is in Cooldown mode, you can have Thingamabot post a message saying that Lumia is currently in a cooldown.
						<br />
						<br />
						<br />
						That wraps up Thingamabot. One of the biggest misconceptions of Thingamabot is that it is needed in order for Lumia to run.
						<br />
						This is very far from the case.
						<br />
						<br />
						<div>Next on the list is <Link to={nextUp.path}><NiceButton>{nextUp.name}</NiceButton></Link></div>
					</LessonOverview>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolThingamabotGeneral));
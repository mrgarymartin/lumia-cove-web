import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview, LessonSubtitle, SmallLessonImage } from '../../s_school-home';
import { LogoImage } from '../../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../../Shared/Styles/s_buttons';

const nextUp = require('../../school-order.json').alertsGeneral;

class SchoolChatInteractives
 extends React.Component<any> {
	render() {
		return (
			<LessonPage>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Interactives</LessonTitle>
						<Button onClick={() => this.props.history.push(nextUp.path)}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<h3>In this session we’ll be talking about Interactives.</h3>
						<br />
						<h3>Interactives will add some spice into your stream.</h3>
						<LessonImage src="/assets/School/Chat/Interactives/1Interactives.png" />
						<br />
						<br />
						Navigate to Chat -> Interactives
						<br />
						You'll now see the list of Interactives that chat can currently use
						<LessonSubtitle>Let’s setup a new Interactive for Chat</LessonSubtitle>
						Let's click Add Interactive in the top right corner
						<br />
						You'll now see an overlay that pops up with a Interactive Picker
						<LessonImage src="/assets/School/Chat/Interactives/2Interactives.png" />
						Give your Interactive a unique name
						<br />
						The name that you give to your Interactive will be the same name Chat will use to trigger the Interactive prepended with your Chat Command key (`!` by default)
						<br />
						You'll have the choice between two options currently: Hex and Random
						<br />
						<LessonSubtitle>Hex</LessonSubtitle>
						Hex will allow the user to enter the name you give followed by any hex color they choose
						<i>!hex #00ff00</i>
						<LessonSubtitle>Random</LessonSubtitle>
						When the user triggers this interactive it will trigger a random hex color
						<i>!random</i>
						<br />
						<br />
						Now let's save the Interactive and head back to the Interactive list page
						<br />
						<br />
						If we zoom into our newly created Interactive we'll see the name at the top of our Interactive.
						<SmallLessonImage src="/assets/School/Chat/Interactives/3Interactives.png" style={{ width: '100px' }} />
						<br />
						There is a toggle switch to turn the Interactive on or off for chat to use
						<br />
						This switch is handy if you have a Interactive that you don't want chat to use, but you would like to use it internally.
						<br />
						An example of this is using the Interactive only on your Stream Deck
						<br />
						<br />
						The next section is the tier list that determines who is allowed to use this Interactive
						<br />
						If you've changed your Friendly name for a tier it will show here
						<br />
						<br />
						<br />
						Now onto the Chat Interactive Settings
						<LessonImage src="/assets/School/Chat/Interactives/4Interactives.png" />
						<h2>Listen</h2>
						The first option will toggle all Interactives on or off
						<br />
						When off no Chat Interactive Commands will be triggered
						<br />
						<br />
						<br />
						That wraps up Chat Interactives, now that you've created a Interactive it will update througout Lumia Stream.
						<br />
						<br />
						<div>Next on the list is <Link to={nextUp.path}><NiceButton>{nextUp.name}</NiceButton></Link></div>
					</LessonOverview>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolChatInteractives
));
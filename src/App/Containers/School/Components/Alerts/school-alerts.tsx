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
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Reactions</LessonTitle>
						<Button onClick={() => this.props.history.push(nextUp.path)}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<h3>In this session we’ll be talking about Reactions.</h3>
						<br />
						<h3>Reactions is very simple to use after creating a Reaction in <Link to={'/school/studio/reactions'}>Studio.</Link></h3>
						<LessonImage src="/assets/School/Chat/Reactions/1Reactions.png" />
						<br />
						<br />
						Navigate to Chat -> Reactions
						<br />
						You'll now see the list of Reactions that chat can currently use
						<LessonSubtitle>Let’s tie a Studio Reaction to Chat</LessonSubtitle>
						Let's click Add Reaction in the top right corner
						<br />
						You'll now see an overlay that pops up with a Reaction Picker
						<LessonImage src="/assets/School/Chat/Reactions/2Reactions.png" />
						Give your Reaction a unique name, and feel free to test in the top right of the overlay
						<br />
						The name that you give to your Reaction will be the same name Chat will use to trigger the Reaction prepended with your Chat Command key (`!` by default)
						<br />
						<br />
						Now let's save the Reaction and head back to the Reaction list page
						<br />
						<br />
						If we zoom into our newly created Reaction we'll see the name at the top of our Reaction.
						<SmallLessonImage src="/assets/School/Chat/Reactions/3Reactions.png" style={{ width: '100px' }} />
						<br />
						The Reaction configuration button will allow you to change the configuration that you setup when creating the Reaction
						<SmallLessonImage src="/assets/School/Chat/Reactions/4Reactions.png" style={{ width: '100px' }} />
						We can also change the duration of the Reaction using the slider
						<br />
						There is a toggle switch to turn the Reaction on or off for chat to use
						<br />
						This switch is handy if you have a Reaction that you don't want chat to use, but you would like to use it internally.
						<br />
						An example of this is using the Reaction only on your Streamdeck
						<br />
						<br />
						The next section is the tier list that determines who is allowed to use this Reaction
						<br />
						If you've changed your Friendly name for a tier it will show here
						<br />
						<br />
						<br />
						Now onto the Chat Reaction Settings
						<LessonImage src="/assets/School/Chat/Reactions/5Reactions.png" />
						<h2>Listen</h2>
						The first option will toggle all Reactions on or off
						<br />
						When off no Chat Reaction Commands will be triggered
						<br />
						<br />
						<br />
						That wraps up Chat Reactions, now that you've created a Reaction it will update througout Lumia Stream.
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
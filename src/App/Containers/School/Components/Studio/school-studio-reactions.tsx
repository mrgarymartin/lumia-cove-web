import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview, LessonSubtitle } from '../../s_school-home';
import { LogoImage } from '../../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../../Shared/Styles/s_buttons';

const nextUp = require('../../school-order.json').studioHypes;

class SchoolStudioReactions extends React.Component<any> {
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
						<h3>In this session we’ll be talking about reactions</h3>
						<br />
						<h3>Reactions will allow you to create living lights where the lights will flash, stobe, or do whatever you want when an Alert or Command is triggered</h3>
						<br />
						<LessonImage src="/assets/School/Reactions/1Reactions.png" />
						<br />
						<br />
						Reactions have changed. We now have a Reaction Builder in Lumia Stream
						<br />
						This will allow you to create whatever reaction that crosses your mind
						<br />
						As well as triggering an accessory like an on off power switch and triggering audio
						<LessonSubtitle>Let’s create a Reaction</LessonSubtitle>
						The studio is where we create all of our base types to be used within Lumia
						<br />
						Navigate to Studio -> Reactions
						<br />
						Let's click Add Reaction in the top right corner
						<br />
						You'll now see the first tab of the Reaction Builder: Slots
						<LessonImage src="/assets/School/Reactions/2Reactions.png" />
						The slots have a type of Color, Scene, or the option to turn off lights
						<br />
						Click Add slot to add the action that you want to take next in the reaction
						<LessonImage src="/assets/School/Reactions/3Reactions.png" />
						Now you'll have two slots that the reaction will switch between in one cycle.
						<br />
						The next tab in the reaction builder is the Accessories tab
						<LessonImage src="/assets/School/Reactions/4Reactions.png" />
						In this tab you'll have the option to select an accessory that you want to be activated while this reaction is running
						<br />
						You can read more about Accessories here: <Link to='/school/lights/accessories'><b>Accessories</b></Link>
						<br />
						<br />
						In the last tab you'll see Settings for this reaction
						<LessonImage src="/assets/School/Reactions/5Reactions.png" />
						<br />
						<LessonSubtitle>Cycle</LessonSubtitle>
						<br />
						The first option within Settings is the time it takes to go through one cycle
						<br />
						This defines how long it takes to go through all of your slots.
						<br />
						So if you only have 2 slots and your cycle time is 2 seconds, the reaction will take 1 second in each of the 2 slots
						<br />
						<br />
						<h2>Transtion</h2>
						<br />
						Transtion is the slow fade that it takes when going from one slot to the next
						<br />
						<br />
						<h2>Audio</h2>
						<br />
						Audio is where you can choose a sound that will play when this reaction is triggered
						<br />
						<br />
						<h2>Advanced Slot Fill</h2>
						<br />
						The advanced option is for users who would like to edit their reaction any time it's consumed.
						<br />
						What this means is that when the reaction is selected within an alert you'll have the option to change the slot values making this reaction reusable for all of your needs
						<br />
						The only catch is that it could cause side effects if you change the studio reaction without updating the consumer
						<br />
						<br />
						<br />
						That wraps up Studio Reactions, now that you've created a reaction you'll be able to select them in your Alerts and Chat Commands
						<br />
						<br />
						<div>Next on the list is Reactions sibling... <Link to={nextUp.path}><NiceButton>{nextUp.name}</NiceButton></Link></div>
					</LessonOverview>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolStudioReactions));

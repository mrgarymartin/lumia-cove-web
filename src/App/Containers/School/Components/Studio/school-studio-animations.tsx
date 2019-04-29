import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview, LessonSubtitle } from '../../s_school-home';
import { LogoImage } from '../../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../../Shared/Styles/s_buttons';
import PremiumFeatureLabel from '../premium-feature-label';

const nextUp = require('../../school-order.json').studioFuze;

class SchoolStudioAnimations extends React.Component<any> {
	render() {
		return (
			<LessonPage>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Animations</LessonTitle>
						<Button onClick={() => this.props.history.push(nextUp.path)}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<PremiumFeatureLabel />
						<h3>In this session we’ll be talking about the premium feature: Animations.</h3>
						<br />
						<h3>Animations will allow you to create a moving animation that will go on forever.</h3>
						<br />
						<LessonImage src="/assets/School/Animations/1Animation.png" />
						<br />
						<br />
						Animations is a new addition to the Lumia world.
						<br />
						This will allow you to continuously animate your lights until an alert or command comes in.
						<br />
						Even after an alert or command does come in it will start the animation back up.
						<br />
						It is very similar to how Fuze works as a <Link to='/school/lights/default'><b>Default Lights</b></Link> option.
						<LessonSubtitle>Let’s create an Animation</LessonSubtitle>
						The studio is where we create all of our base types to be used within Lumia.
						<br />
						Navigate to Studio -> Animations.
						<br />
						Then Let's click Add Animation in the top right corner on the page.
						<br />
						You'll now see the first tab of the Animation Builder: Slots
						<LessonImage src="/assets/School/Animations/2Animation.png" />
						Each slot has a Type. The three Type options are: Color, Scene, or the option to turn off lights.
						<br />
						Click Add slot to add the action that you want to take next in the animation
						<br />
						<br />
						Now you'll have two slots that the animation will switch between in one cycle.
						<br />
						You will also have the ability to set the brightness and select certain lights to be used within each slot if you so desire.
						<br />
						The next tab in the animation builder is the Accessories tab.
						<LessonImage src="/assets/School/Animations/3Animation.png" />
						In this tab you'll have the option to select an accessory that you want to be activated while this animation is running.
						<br />
						You can read more about Accessories here: <Link to='/school/lights/accessories'><b>Accessories</b></Link>
						<br />
						<br />
						In the last tab you'll see Settings for this animation.
						<LessonImage src="/assets/School/Animations/4Animation.png" />
						<br />
						<LessonSubtitle>Cycle</LessonSubtitle>
						<br />
						The first option within Settings is the time it takes to go through one cycle.
						<br />
						This defines how long it takes to go through all of your slots.
						<br />
						So if you only have 2 slots and your cycle time is 2 seconds, the animation will take 1 second in each of the 2 slots.
						<br />
						<br />
						<h2>Transtion</h2>
						<br />
						Transtion is the slow fade that it takes when going from one slot to the next.
						<br />
						<br />
						<h2>Audio</h2>
						<br />
						Audio is where you can choose a sound that will play when this animation is triggered.
						<br />
						<br />
						<br />
						That wraps up Studio Animations, now that you've created an animation you'll be able to use it as your <Link to='/school/lights/default'><b>Default Lights</b></Link>.
						<br />
						<br />
						<div>Next on the list is Animations sibling <Link to={nextUp.path}><NiceButton>{nextUp.name}</NiceButton></Link></div>
					</LessonOverview>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolStudioAnimations));

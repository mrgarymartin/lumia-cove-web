import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview, LessonSubtitle, SmallLessonImage } from '../../s_school-home';
import { LogoImage } from '../../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../../Shared/Styles/s_buttons';

const nextUp = require('../../school-order.json').thingamabotGeneral;

class SchoolHotkeysGeneral extends React.Component<any> {
	render() {
		return (
			<LessonPage>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Hotkeys</LessonTitle>
						<Button onClick={() => this.props.history.push(nextUp.path)}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<h3>Hotkeys will give you the ability to trigger whatever you want in Lumia with any Key combination you choose.</h3>
						<br />
						<h3>It's very handy to quickly change your lights, shut them off, trigger a reactions, and more.</h3>
						<LessonImage src="/assets/School/Hotkeys/1Hotkeys.png" />
						<br />
						<br />
						<LessonSubtitle>Let's make a Hotkey</LessonSubtitle>
						Navigate to Hotkeys.
						<br />
						This will bring you to a list of your Hot keys with the Key Combination, the Type, and the Value the Hotkey corresponds to.
						<br />
						To create a Hotkey, we will need to click the <b>Add Hotkey</b> button in the top right corner.
						<LessonImage src="/assets/School/Hotkeys/1Hotkeys.png" />
						This will bring you to the Hotkey creation screen.
						<br />
						To assign a key combination to the Hotkey, press the <b>Assign</b> button.
						<br />
						After you click the Assign button, you'll see that the button is now listening waiting for your key combination.
						<LessonImage src="/assets/School/Hotkeys/3Hotkeys.png" />
						Depending on what you choose you'll be able ot select the Value of the Hotkey
						<LessonImage src="/assets/School/Hotkeys/4Hotkeys.png" />
						<br />
						After you're done, click the <b>Save</b> button.
						<br />
						If you would like to try out your new Hotkey you will first need to head back to the Home page so your settings can update.
						<br />
						<br />
						<br />
						That wraps up Hotkeys.
						<br />
						<br />
						<div>Next on the list is <Link to={nextUp.path}><NiceButton>{nextUp.name}</NiceButton></Link></div>
					</LessonOverview>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolHotkeysGeneral));
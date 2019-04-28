import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview, LessonSubtitle, SmallLessonImage, UnderlineLink } from '../../s_school-home';
import { LogoImage } from '../../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../../Shared/Styles/s_buttons';

const nextUp = require('../../school-order.json').hotkeysGeneral;

class SchoolStreamdeckGeneral extends React.Component<any> {
	render() {
		return (
			<LessonPage>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Stream Deck</LessonTitle>
						<Button onClick={() => this.props.history.push(nextUp.path)}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<h3>With the Stream Deck you'll have the ability to trigger your commands with a click of a button.</h3>
						<br />
						<LessonSubtitle>Setup</LessonSubtitle>
						To setup Streamdeck let's first head to Settings -> General.
						<br />
						Under Streamdeck Api, make sure the <b>Enable</b> button is On.
						<LessonImage src="/assets/School/Streamdeck/1Streamdeck.png" />
						<br />
						Next up let's connect our Streamdeck to our computer and then open up the Stream Deck software.
						<br />
						Until our Streamdeck plugin is added to the Streamdeck manager, we'll have to download it manually.
						<br />
						You can find the link within the Settings -> General page.
						<SmallLessonImage style={{ width: '80%' }} src="/assets/School/Streamdeck/2Streamdeck.png" />
						Or you can just download it <UnderlineLink href='https://storage.lumiacove.com/com.lumiacove.stream.streamDeckPlugin'>here</UnderlineLink>
						<br />
						After you download the plugin open it and it will prompt you to install.
						<SmallLessonImage style={{ width: '40%' }} src="/assets/School/Streamdeck/3Streamdeck.png" />
						Press Install and it will now show up on the right side of the Streamdeck App under the Custom category.
						<SmallLessonImage style={{ width: '40%' }} src="/assets/School/Streamdeck/4Streamdeck.png" />
						You will now have the ability to drag the Plugin over into any Streamdeck slot you choose.
						<br />
						This will give you the ability to enter a Title and Type should show upr.
						<SmallLessonImage style={{ width: '40%' }} src="/assets/School/Streamdeck/5Streamdeck.png" />
						<br />
						If Type does not show up, it means that it wasn't able to connect to Lumia Stream.
						<br />
						You will have to make sure Lumia Stream is on, and the Stream Deck api is on as well.
						<br />
						Head to the home page of Lumia Stream to refresh the settings if the Type doesn't show up in the Stream Deck App.
						<br />
						<br />
						After you select a Type depending on what Type you choose a Value selection will pop up.
						<SmallLessonImage style={{ width: '40%' }} src="/assets/School/Streamdeck/6Streamdeck.png" />
						Select your value and then you're ready to try it out on your Stream Deck!
						<br />
						<br />
						If you ever have issues with your Stream Deck connecting to Lumia Stream. Always make sure both Lumia Stream in on as well as the Stream Deck app.
						<br />
						<br />
						<br />
						That wraps up Streamdeck, it will give you the power of Lumia Stream with a click of a button!
						<br />
						<br />
						<div>Next on the list is <Link to={nextUp.path}><NiceButton>{nextUp.name}</NiceButton></Link></div>
					</LessonOverview>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolStreamdeckGeneral));
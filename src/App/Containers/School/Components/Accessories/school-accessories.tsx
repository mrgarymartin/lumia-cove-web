import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview, LessonSubtitle, SmallLessonImage } from '../../s_school-home';
import { LogoImage } from '../../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../../Shared/Styles/s_buttons';

const nextUp = require('../../school-order.json').streamdeckGeneral;

class SchoolAccessoriesGeneral extends React.Component<any> {
	render() {
		return (
			<LessonPage>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Accessories</LessonTitle>
						<Button onClick={() => this.props.history.push(nextUp.path)}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<h3>If you would like to trigger a smart plug, Accessoriesis the place to be.</h3>
						<br />
						<h3>Lumia Stream supports smart plugs from brands like TP-Link and plugs that are able to connect to the Hue bridge currently</h3>
						<br />
						<h3>Connecting a smart plug to Lumia Stream will allow you to turn things on and off when an alert is triggered for example</h3>
						<LessonImage src="/assets/School/Accessories/1Accessories.png" />
						<br />
						<LessonSubtitle>Let's connect our first smart plug</LessonSubtitle>
						Navigate to Lights -> Accessories
						<br />
						Let's click the button in the top right corner named <b>Add Accessory</b>
						<br />
						You will be brought to a overlay that looks like this
						<LessonImage src="/assets/School/Accessories/2Accessories.png" />
						It will start searching for any available Tp-Link and Hue Smart plugs that it can find.
						<br />
						When it's done searching the results will pop up and you'll have the ability to Add or Remove the Accessory.
						<br />
						After you're done, press <b>Save</b> and you now will be able to use your Accessory around Lumia.
						<br />
						When you're brought back to the list of Accessories, you'll have the ability to choose what state the plug should be in by default.
						<LessonImage src="/assets/School/Accessories/3Accessories.png" />
						<br />
						<br />
						One of the places you can use an Accessory is within a reaction
						<br />
						If we head to Studio -> Reactions -> Add Reaction, and then click the Accessories tab you'll be brought to the Accessories tab.
						<br />
						This tab will give you the ability to add Accessories to the reaction so that it triggers whenever the reaction is called
						<LessonImage src="/assets/School/Accessories/4Accessories.png" />
						<br />
						<br />
						The other place you can use Accessories is within an Animation exactly how it's used in a Reaction.
						<br />
						<br />
						<br />
						That wraps up Acccessories.
						<br />
						<br />
						<div>Next on the list is <Link to={nextUp.path}><NiceButton>{nextUp.name}</NiceButton></Link></div>
					</LessonOverview>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolAccessoriesGeneral));
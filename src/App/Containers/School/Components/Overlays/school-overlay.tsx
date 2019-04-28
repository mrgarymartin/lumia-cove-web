import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview, LessonSubtitle, SmallLessonImage } from '../../s_school-home';
import { LogoImage } from '../../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../../Shared/Styles/s_buttons';

const nextUp = require('../../school-order.json').shortcutGeneral;

class SchoolOverlayGeneral extends React.Component<any> {
	render() {
		return (
			<LessonPage>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Overlays</LessonTitle>
						<Button onClick={() => this.props.history.push(nextUp.path)}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<h3>Overlays give users the abilities to show the color changes on screen.</h3>
						<br />
						<h3>You have the ability to either use them as helpers for your lights or to replace RGB lights altogether</h3>
						<LessonImage src="/assets/School/Overlays/1Overlays.png" />
						<br />
						<br />
						Currently there are only two type of Overlays, but ther are plans to grow Overlays out into a much bigger feature in the future.
						<br />
						<LessonSubtitle>Using Overlays with OBS</LessonSubtitle>
						After you setup your overlay with a wide range of options, you cna take your Room url at the top of the page, and we can now enter it into OBS.
						<br />
						Next you will want to Ope up OBS and create a new Source with the Browser type.
						<LessonImage src="/assets/School/Overlays/2Overlays.png" />
						<br />
						After that you will have the ability to paste your Lumia Overlay Url into URL section in OBS Browser Scene.
						<LessonImage src="/assets/School/Overlays/3Overlays.png" />
						Press Ok, and set it up however you wish.
						<br />
						Now if you go back to the Home page in Lumia, you'll start seeing the Overlay reflect what colors Lumia Stream is currently on.
						<LessonImage src="/assets/School/Overlays/4Overlays.png" />
						<br />
						<br />
						<br />
						That wraps up Overlays.
						<br />
						<br />
						<div>Next on the list is <Link to={nextUp.path}><NiceButton>{nextUp.name}</NiceButton></Link></div>
					</LessonOverview>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolOverlayGeneral));
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview, LessonSubtitle, SmallLessonImage } from '../../s_school-home';
import { LogoImage } from '../../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../../Shared/Styles/s_buttons';

const nextUp = require('../../school-order.json').chatScenes;

class SchoolChatColors extends React.Component<any> {
	render() {
		return (
			<LessonPage>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Colors</LessonTitle>
						<Button onClick={() => this.props.history.push(nextUp.path)}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<h3>In this session we’ll be talking about Colors.</h3>
						<br />
						<h3>Colors is the funnest part about having Chat involved.</h3>
						<br />
						<h3>You'll be able to setup whatever colors you so desire with the Premium color picker.</h3>
						<br />
						<h3>The free version still has Colors available, it just has a limited list of colors you can choose from.</h3>
						<br />
						<LessonSubtitle>Let’s create a Color</LessonSubtitle>
						<br />
						Navigate to Chat -> Colors
						<br />
						You'll now see the list of Colors that chat can currently use
						<LessonImage src="/assets/School/Chat/Colors/1Colors.png" />
						Let's click Add Color in the top right corner
						<br />
						You'll now see an overlay that pops up with a color picker (if using Premium)
						<LessonImage src="/assets/School/Chat/Colors/2Colors.png" />
						Give your color a unique name, and feel free to test in the top right of the overlay
						<br />
						The name that you give to your color will be the same name Chat will use to trigger the color prepended with your Chat Command key (`!` by default)
						<br />
						If you have a more specific color in mind below the color picker are boxes where you can input hex or rgb color codes
						<br />
						The last section will save your last used colors to make it simple to get back to a color you've used previously
						<br />
						<br />
						Now let's save the color and head back to the Color list page
						<br />
						<br />
						If we zoom into our newly created color we'll see the name at the top followed by a visual representation of our color
						<SmallLessonImage src="/assets/School/Chat/Colors/3Colors.png" style={{ width: '100px' }} />
						We can also change the brightness of the color using the slider
						<br />
						There is a toggle switch to turn the color on or off for chat to use
						<br />
						This switch is handy if you have a color that you don't want chat to use, but you would like to use it internally.
						<br />
						An example of this is using the color only on your Streamdeck
						<br />
						<br />
						The next section is the tier list that determines who is allowed to use this color
						<br />
						If you've changed your Friendly name for a tier it will show here
						<br />
						<br />
						<br />
						Now onto the Chat Color Settings
						<LessonImage src="/assets/School/Chat/Colors/4Colors.png" />
						<LessonSubtitle>Listen</LessonSubtitle>
						The first option will toggle all colors on or off
						<br />
						When off no Chat Color Commands will be triggered
						<LessonSubtitle>Duration</LessonSubtitle>
						This determined how long each Chat Color trigger will last.
						<br />This is mainly used for when you have Revert to default on
						<LessonSubtitle>Transition</LessonSubtitle>
						Transition is the fade length it takes to turn to the color
						<br />
						<br />
						<br />
						That wraps up Chat Colors, now that you've created a Color it will update througout Lumia Stream.
						<br />
						<br />
						<div>Next on the list is <Link to={nextUp.path}><NiceButton>{nextUp.name}</NiceButton></Link></div>
					</LessonOverview>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolChatColors));
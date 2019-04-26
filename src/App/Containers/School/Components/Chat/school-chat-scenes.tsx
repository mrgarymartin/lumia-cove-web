import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview, LessonSubtitle, SmallLessonImage } from '../../s_school-home';
import { LogoImage } from '../../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../../Shared/Styles/s_buttons';

const nextUp = require('../../school-order.json').chatReactions;

class SchoolChatScenes extends React.Component<any> {
	render() {
		return (
			<LessonPage>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Scenes</LessonTitle>
						<Button onClick={() => this.props.history.push(nextUp.path)}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<h3>In this session we’ll be talking about Scenes.</h3>
						<br />
						<h3>Scenes is very simple to use after creating a Scene in <Link to={'/school/studio/Scenes'}>Studio.</Link></h3>
						<LessonImage src="/assets/School/Chat/Scenes/1Scenes.png" />
						<br />
						<br />
						Navigate to Chat -> Scenes
						<br />
						You'll now see the list of Scenes that chat can currently use
						<LessonSubtitle>Let’s tie a Scene to Chat</LessonSubtitle>
						Let's click Add Scene in the top right corner
						<br />
						You'll now see an overlay that pops up with a Scene Picker
						<LessonImage src="/assets/School/Chat/Scenes/2Scenes.png" />
						Give your Scene a unique name, and feel free to test in the top right of the overlay
						<br />
						The name that you give to your Scene will be the same name Chat will use to trigger the Scene prepended with your Chat Command key (`!` by default)
						<br />
						<br />
						Now let's save the Scene and head back to the Scene list page
						<br />
						<br />
						If we zoom into our newly created Scene we'll see the name at the top of our Scene.
						<SmallLessonImage src="/assets/School/Chat/Scenes/3Scenes.png" style={{ width: '100px' }} />
						There is a toggle switch to turn the Scene on or off for chat to use.
						<br />
						This switch is handy if you have a Scene that you don't want chat to use, but you would like to use it internally.
						<br />
						An example of this is using the Scene only on your Streamdeck.
						<br />
						<br />
						The next section is the tier list that determines who is allowed to use this Scene.
						<br />
						If you've changed your Friendly name for a tier it will show here.
						<br />
						<br />
						<br />
						Now onto the Chat Scene Settings.
						<LessonImage src="/assets/School/Chat/Scenes/4Scenes.png" />
						<h2>Listen</h2>
						The first option will toggle all Scenes on or off
						<br />
						When off no Chat Scene Commands will be triggered
						<br />
						<br />
						<h2>Duration</h2>
						This determined how long each Chat Scene trigger will last.
						<br />This is mainly used for when you have Revert to default on
						<br />
						<br />
						<br />
						That wraps up Chat Scenes.
						<br />
						<br />
						<div>Next on the list is <Link to={nextUp.path}><NiceButton>{nextUp.name}</NiceButton></Link></div>
					</LessonOverview>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolChatScenes));
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview, LessonSubtitle } from '../../s_school-home';
import { LogoImage } from '../../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../../Shared/Styles/s_buttons';

const nextUp = require('../../school-order.json').studioReactions;

class SchoolStudioScenes extends React.Component<any> {
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
						<h3>In this session we’ll be talking about Scenes</h3>
						<br />
						<h3>Scenes are useful for creating a custom colorful layout with your lights</h3>
						<br />
						<h3>They can also be used as a substitute for where Colors are used all throughout the app</h3>
						<LessonImage src="/assets/School/Scenes/Settings->Scene.png" />
						If you’ve used Scenes in any of our Legacy apps you know that it was tied to the native Lights Scenes
						<br />
						This is not the case anymore
						<br />
						<br />
						The reason we had to come up with a different method for Scenes is because we now support multiple lights and some lights have different definitions of a Scene vs others
						<br />
						This will also allow us to move into any light brand or product because every Scene created will be surrounding Lumia
						<br />
						<br />
						Scenes can be used within Reactions and hypes, Added as a chat command and also Added as a hotkey.
						<br />
						Scenes are static and are created in a way that requires you to manually add what light do you want to assign to each color
						<LessonSubtitle>Let’s create a Scene</LessonSubtitle>
						We’re going to want to Head to Settings and then open Studio and select Scenes
						<br />
						The Studio is where we create all of our base types to be used within Lumia
						<LessonImage src="/assets/School/Scenes/1Settings.gif" />
						Now we can add a Scene
						<LessonImage src="/assets/School/Scenes/2.Add Scene Click.png" />
						Here we’ll be able to add the colors that we want as well as editing them as we see fit
						<LessonImage src="/assets/School/Scenes/3Settings.gif" />
						Next we’ll need to drag and drop our lights into each slot. We can also drag it from a slot back to the choices area to remove it from a slot
						<LessonImage src="/assets/School/Scenes/4Settings.gif" />
						{/* We can also test out our Scene by pressing test in the top right corner
						<LessonImage src="/assets/School/Scenes/4Settings.gif" />
						<br />
						<br /> */}
						Last but not least we’ll need to give our Scene a unique name and then press Save
						<LessonImage src="/assets/School/Scenes/5Settings.gif" />
						Now that we have a Scene saved in Studio we can add that Scene as a chat command by opening up Chat -> Scenes, Clicking Add Scene, Giving it whatever name you want chat to call it, and then pressing save
						<br />
						Now chat will be able to call your Scene with the name you just gave it. In our case the name was `awesome`, so we could type `!awesome` in chat to call it
						<LessonImage src="/assets/School/Scenes/6Settings.gif" />
						Now let’s create a Reaction using our Scene.
						<br />
						This Reaction will flash our Scene on and then turn the lights off repeatedly.
						<LessonImage src="/assets/School/Scenes/7Settings.gif" />
						And that wraps up Scenes. It’s very powerful once you get the hang of it.
						<br />
						You can combine multiple Scenes in a Reaction and create an ultra Reaction
						<br />
						<br />
						<br />
						<div>Next up, we’ll go into <Link to={nextUp.path}><NiceButton>{nextUp.name}</NiceButton></Link></div>
					</LessonOverview>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolStudioScenes));

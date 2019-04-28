import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { LessonPage, LessonHeadContain, LessonHead, LessonTitle, LessonHeaderRow, LessonImage, LessonBody, LessonOverview } from '../../s_school-home';
import { LogoImage } from '../../../../Shared/Styles/s_navigation-bar';
import { Button, NiceButton } from '../../../../Shared/Styles/s_buttons';

const nextUp = require('../../school-order.json').chatColors;

class SchoolStudioTiers extends React.Component<any> {
	render() {
		return (
			<LessonPage>
				<LessonHeadContain>
					<LessonHead>
						<LessonTitle><LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />Tiers</LessonTitle>
						<Button onClick={() => this.props.history.push(nextUp.path)}>Next Lesson ></Button>
					</LessonHead>
					<LessonHeaderRow />
				</LessonHeadContain>
				<LessonBody>
					<LessonOverview>
						<h3>In this session we’ll be talking about Tiers.</h3>
						<br />
						<h3>Tiers is a easy way to organize your users in regards to Chat Commands</h3>
						<br />
						<h3>This is a setting mostly for power users. It's sometimes best to just leave the defaults</h3>
						<br />
						<br />
						Navigate to Chat -> Tiers
						<br />
						You'll now see the container for your sites
						<LessonImage src="/assets/School/Chat/Tiers/1Tiers.png" />
						<br />
						<h2>Tier</h2>
						<br />
						First option is <b>Tier</b> which cannot be changed at this time
						<br />
						It determines the rank for the value
						<br />
						<br />
						<h2>Friendly name</h2>
						<br />
						<b>Friendly name</b> is the name that you can change so it's easier to recognize throughout the Lumia Stream.
						<br />
						One very useful feature is having Thingamabot handle telling Chat what commands they can use.
						<br />
						Thingamabot will use this friendly name to convey to chat what they can use with the command !lights
						{/* TODO: Insert pic of Thingamabot changing the firendly names here */}
						<br />
						<br />
						<h2>Value</h2>
						<br />
						<b>Value</b> will have the different types of tiers you can choose from
						<br />
						<br />
						<br />
						That wraps up Chat Tiers, now that you've customized a Tier it will update througout the Lumia Stream.
						<br />
						<br />
						<div>Next on the list is <Link to={nextUp.path}><NiceButton>{nextUp.name}</NiceButton></Link></div>
					</LessonOverview>
				</LessonBody>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolStudioTiers));
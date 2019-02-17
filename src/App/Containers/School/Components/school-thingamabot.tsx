import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LessonPage } from '../s_school-home';

class SchoolThingamabot extends React.Component<any> {
	render() {
		return (
			<LessonPage style={{ paddingTop: '50px' }}>
				<h1>Coming Soon</h1>
			</LessonPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolThingamabot));
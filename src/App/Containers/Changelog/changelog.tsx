import React, { Fragment } from 'react';
import { ChangelogPage, ChangelogPageTitle } from './s_changelog';
import changes from './changes.js';

import './s_update.css';

const Changelog = () => (
	<ChangelogPage>
		<ChangelogPageTitle>Releases</ChangelogPageTitle>
		{changes.map((change) => (
				<Fragment key={change.version}>
					<div>
						<h2>Version {change.version}</h2>
						<hr style={{ margin: '20px 0', width: '40%' }}/>
						{change.releaseNotes.map((notes) => (
							<Fragment key={notes.title}>
								<h4 style={{ margin: '20px 0' }}>{ notes.title }</h4>
								<div dangerouslySetInnerHTML={{ __html: notes.content }} />
							</Fragment>
						))}
					</div>
				</Fragment>
			)
		)}
	</ChangelogPage>
);

export default Changelog;
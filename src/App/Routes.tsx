import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Auth from './Containers/Auth/auth';
import Buy from './Containers/Payment/buy';
import Compare from './Containers/Download/compare';
import Download from './Containers/Download/download';
import StreamHome from './Containers/Stream/Home/stream-home';
import LegacyDownload from './Containers/Legacy/legacy-download';
import LegacyOverlay from './Containers/Legacy/Overlay/legacy-overlay';
import overlay from './Containers/Overlay/overlay';

const Routes = () => (
	<Switch>
		<Route path='/buy' component={ Buy } />
		<Route path='/stream' component={ StreamHome } />
		<Route path='/home' component={ StreamHome } />
		<Route path='/compare' component={Compare} />
		<Route path='/download' component={Download} />
		<Route path='/auth' component={Auth} />

		<Route path='/overlay' component={overlay} />
		{/* Legacy */}
		<Route path='/legacy/download' component={LegacyDownload} />
		<Route path='/legacy/overlay' component={LegacyOverlay} />
		<Route exact={true} path='/**' component={ StreamHome } />
	</Switch>
);

export default Routes;

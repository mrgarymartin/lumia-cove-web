import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SchoolPage, SchoolSidebar, SidebarLink, LogoSchoolContain } from './s_school-home';
import schoolTroubleshooting from './Components/school-troubleshooting';
import schoolHueModes from './Components/school-hue-modes';
import schoolShortcutMenu from './Components/school-shortcut-menu';
import schoolOverlay from './Components/school-overlay';
import schoolHotkeys from './Components/school-hotkeys';
import schoolAccessories from './Components/school-accessories';
import schoolThingamabot from './Components/school-thingamabot';
import schoolTiers from './Components/school-tiers';
import schoolDefaultLights from './Components/school-default-lights';
import schoolFuze from './Components/school-fuze';
import schoolHypes from './Components/school-hypes';
import schoolReactions from './Components/school-reactions';
import schoolScenes from './Components/school-scenes';
import schoolAlerts from './Components/school-alerts';
import schoolChat from './Components/school-chat';
import schoolStudio from './Components/school-studio';
import schoolOverview from './Components/school-overview';
import { LogoContain, LogoImage } from '../../Shared/Styles/s_navigation-bar';

class SchoolHome extends React.Component<any> {
	render() {
		return (
			<SchoolPage>
				<SchoolSidebar>
					<LogoSchoolContain onClick={() => this.props.history.push('/stream')}>
						<LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />
						Home
					</LogoSchoolContain>
					<SidebarLink to='/school/overview'>Overview</SidebarLink>
					<SidebarLink to='/school/studio'>Studio</SidebarLink>
					<SidebarLink to='/school/scenes'>Scenes</SidebarLink>
					<SidebarLink to='/school/reactions'>Reactions</SidebarLink>
					<SidebarLink to='/school/hypes'>Hypes</SidebarLink>
					<SidebarLink to='/school/fuze'>Fuze</SidebarLink>
					<SidebarLink disabled={true} to='/school/chat'>Chat</SidebarLink>
					<SidebarLink to='/school/alerts'>Alerts</SidebarLink>
					<SidebarLink to='/school/default-lights'>Default</SidebarLink>
					<SidebarLink to='/school/tiers'>Chat Tiers</SidebarLink>
					<SidebarLink to='/school/thingamabot'>Thingamabot</SidebarLink>
					<SidebarLink to='/school/accessories'>Accessories</SidebarLink>
					<SidebarLink to='/school/hotkeys'>Hot keys</SidebarLink>
					<SidebarLink to='/school/overlay'>Overlays</SidebarLink>
					<SidebarLink to='/school/shortcut-menu'>Shortcut menu</SidebarLink>
					<SidebarLink to='/school/hue-modes'>Hue</SidebarLink>
					<SidebarLink to='/school/power-tips'>Power Tips</SidebarLink>
					<SidebarLink to='/school/troubleshoot'>Troubleshooting</SidebarLink>
				</SchoolSidebar>
				<div>
					<Switch>
						<Route path='/school/overview' component={schoolOverview} />
						<Route path='/school/studio' component={schoolStudio} />
						<Route path='/school/chat' component={schoolChat} />
						<Route path='/school/alerts' component={schoolAlerts} />
						<Route path='/school/scenes' component={schoolScenes} />
						<Route path='/school/reactions' component={schoolReactions} />
						<Route path='/school/hypes' component={schoolHypes} />
						<Route path='/school/fuze' component={schoolFuze} />
						<Route path='/school/default-lights' component={schoolDefaultLights} />
						<Route path='/school/tiers' component={schoolTiers} />
						<Route path='/school/thingamabot' component={schoolThingamabot} />
						<Route path='/school/accessories' component={schoolAccessories} />
						<Route path='/school/hotkeys' component={schoolHotkeys} />
						<Route path='/school/overlay' component={schoolOverlay} />
						<Route path='/school/shortcut-menu' component={schoolShortcutMenu} />
						<Route path='/school/hue-modes' component={schoolHueModes} />
						<Route path='/school/troubleshoot' component={schoolTroubleshooting} />
						<Redirect from='/school' to='/school/overview' />
						<Redirect from='/school/**' to='/school/overview' />
					</Switch>
				</div>
			</SchoolPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(SchoolHome));

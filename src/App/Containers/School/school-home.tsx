import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SchoolPage, SchoolSidebar, SidebarLink, LogoSchoolContain, SettingParent, ParentAlone, LeftParent, SettingIcon, ChildrenSettings, SettingAlone } from './s_school-home';
import schoolTroubleshooting from './Components/school-troubleshooting';
import schoolHueModes from './Components/school-hue-modes';
import schoolShortcutMenu from './Components/school-shortcut-menu';
import schoolOverlay from './Components/school-overlay';
import schoolHotkeys from './Components/school-hotkeys';
import schoolAccessories from './Components/school-accessories';
import schoolThingamabot from './Components/school-thingamabot';
import schoolDefaultLights from './Components/school-default-lights';
import schoolFuze from './Components/Studio/school-studio-fuze';
import schoolHypes from './Components/Studio/school-studio-hypes';
import schoolReactions from './Components/Studio/school-studio-reactions';
import schoolScenes from './Components/Studio/school-studio-scenes';
import schoolAlerts from './Components/Alerts/school-alerts';
import schoolChat from './Components/Chat/school-chat-general';
import schoolStudio from './Components/Studio/school-studio-general';
import schoolOverview from './Components/school-overview';
import { LogoContain, LogoImage } from '../../Shared/Styles/s_navigation-bar';
import { FaPlus, FaMinus, FaPaintBrush } from 'react-icons/fa';
import schoolStudioGeneral from './Components/Studio/school-studio-general';
import schoolStudioFuze from './Components/Studio/school-studio-fuze';
import schoolStudioHypes from './Components/Studio/school-studio-hypes';
import schoolStudioReactions from './Components/Studio/school-studio-reactions';
import schoolStudioAnimations from './Components/Studio/school-studio-animations';
import schoolChatGeneral from './Components/Chat/school-chat-general';
import schoolChatTiers from './Components/Chat/school-chat-tiers';
import schoolChatPoints from './Components/Chat/school-chat-points';
import schoolChatColor from './Components/Chat/school-chat-colors';
import schoolStudioScenes from './Components/Studio/school-studio-scenes';
import schoolChatScenes from './Components/Chat/school-chat-scenes';
import schoolChatReactions from './Components/Chat/school-chat-reactions';
import schoolChatInteractives from './Components/Chat/school-chat-interactives';

class SchoolHome extends React.Component<any> {
	state = {
		isOpen: {
			studio: false,
			lights: false,
			chat: false,
			alert: false,
		},
		isSubOpen: {
			// twitch: false,
		}
	};

	componentDidMount() {
		this.setIsOpen();
	}

	setIsOpen = () => {
		const isOpen = { ...this.state.isOpen };
		if (this.props.location.pathname.startsWith('/school/alert')) {
			isOpen.alert = true;
		} else if (this.props.location.pathname.startsWith('/school/chat')) {
			isOpen.chat = true;
		} else if (this.props.location.pathname.startsWith('/school/lights')) {
			isOpen.lights = true;
		} else if (this.props.location.pathname.startsWith('/school/studio')) {
			isOpen.studio = true;
		}
		this.setState({ isOpen });
	}
	
	openParent = (setting) => {
		const isOpen = { ...this.state.isOpen };
		isOpen[setting] = !isOpen[setting];
		this.setState({ isOpen });
	}

	openSubParent = (setting) => {
		const isSubOpen = { ...this.state.isSubOpen };
		isSubOpen[setting] = !isSubOpen[setting];
		this.setState({ isSubOpen });
	}

	render() {
		const { isOpen, isSubOpen } = this.state;
		const { pathname } = this.props.location;

		return (
			<SchoolPage>
				<SchoolSidebar>
					<LogoSchoolContain onClick={() => this.props.history.push('/stream')}>
						<LogoImage style={{ marginRight: '20px' }} className="logo-image" src="/assets/StreamLogo.png" />
						Home
					</LogoSchoolContain>
					<SidebarLink to='/school/overview'>Overview</SidebarLink>


					{/* Studio */}
					<SettingParent>
						<ParentAlone onClick={() => this.openParent('studio')} isPath={pathname.startsWith('/school/studio')}><LeftParent><SettingIcon><FaPaintBrush /></SettingIcon>Studio</LeftParent>
							{isOpen.studio ? <FaMinus style={{ marginLeft: '5px' }} /> : <FaPlus style={{ marginLeft: '5px' }} />}
						</ParentAlone>
						{isOpen.studio &&
							<ChildrenSettings>
								<SidebarLink to='/school/studio/general'><SettingAlone isPath={pathname === '/school/studio/general'}>General</SettingAlone></SidebarLink>
								<SidebarLink to='/school/studio/scenes'><SettingAlone isPath={pathname === '/school/studio/scenes'}>Scenes</SettingAlone></SidebarLink>
								<SidebarLink to='/school/studio/reactions'><SettingAlone isPath={pathname === '/school/studio/reactions'}>Reactions</SettingAlone></SidebarLink>
								<SidebarLink to='/school/studio/hypes'><SettingAlone isPath={pathname === '/school/studio/hypes'}>Hypes</SettingAlone></SidebarLink>
								<SidebarLink to='/school/studio/animations'><SettingAlone isPath={pathname === '/school/studio/animations'}>Animations</SettingAlone></SidebarLink>
								<SidebarLink to='/school/studio/fuze'><SettingAlone isPath={pathname === '/school/studio/fuze'}>Fuze</SettingAlone></SidebarLink>
							</ChildrenSettings>
						}
					</SettingParent>

					{/* Chat */}
					<SettingParent>
						<ParentAlone onClick={() => this.openParent('chat')} isPath={pathname.startsWith('/school/chat')}><LeftParent><SettingIcon><FaPaintBrush /></SettingIcon>Chat</LeftParent>
							{isOpen.chat ? <FaMinus style={{ marginLeft: '5px' }} /> : <FaPlus style={{ marginLeft: '5px' }} />}
						</ParentAlone>
						{isOpen.chat &&
							<ChildrenSettings>
								<SidebarLink to='/school/chat/general'><SettingAlone isPath={pathname === '/school/chat/general'}>General</SettingAlone></SidebarLink>
								<SidebarLink to='/school/chat/tiers'><SettingAlone isPath={pathname === '/school/chat/tiers'}>Tiers</SettingAlone></SidebarLink>
								<SidebarLink to='/school/chat/points'><SettingAlone isPath={pathname === '/school/chat/points'}>Points</SettingAlone></SidebarLink>
								<SidebarLink to='/school/chat/colors'><SettingAlone isPath={pathname === '/school/chat/colors'}>Colors</SettingAlone></SidebarLink>
								<SidebarLink to='/school/chat/scenes'><SettingAlone isPath={pathname === '/school/chat/scenes'}>Scenes</SettingAlone></SidebarLink>
								<SidebarLink to='/school/chat/reactions'><SettingAlone isPath={pathname === '/school/chat/reactions'}>Reactions</SettingAlone></SidebarLink>
								<SidebarLink to='/school/chat/interactives'><SettingAlone isPath={pathname === '/school/chat/interactives'}>Interactives</SettingAlone></SidebarLink>
							</ChildrenSettings>
						}
					</SettingParent>
					
					{/* Lights */}
					<SettingParent>
						<ParentAlone onClick={() => this.openParent('lights')} isPath={pathname.startsWith('/school/lights')}><LeftParent><SettingIcon><FaPaintBrush /></SettingIcon>Lights</LeftParent>
							{isOpen.lights ? <FaMinus style={{ marginLeft: '5px' }} /> : <FaPlus style={{ marginLeft: '5px' }} />}
						</ParentAlone>
						{isOpen.lights &&
							<ChildrenSettings>
								<SidebarLink to='/school/lights/general'><SettingAlone isPath={pathname === '/school/lights/general'}>General</SettingAlone></SidebarLink>
								<SidebarLink to='/school/lights/default'><SettingAlone isPath={pathname === '/school/lights/default'}>Default</SettingAlone></SidebarLink>
							</ChildrenSettings>
						}
					</SettingParent>

					<SidebarLink to='/school/accessories'>Accessories</SidebarLink>
					<SidebarLink to='/school/streamdeck'>Streamdeck</SidebarLink>

					<SidebarLink to='/school/alerts'>Alerts</SidebarLink>
					<SidebarLink to='/school/thingamabot'>Thingamabot</SidebarLink>
					<SidebarLink to='/school/hotkeys'>Hot keys</SidebarLink>
					<SidebarLink to='/school/overlay'>Overlays</SidebarLink>
					<SidebarLink to='/school/shortcut-menu'>Shortcut menu</SidebarLink>
					{/* <SidebarLink to='/school/tips'>Tips</SidebarLink> */}
					{/* <SidebarLink to='/school/troubleshoot'>Troubleshooting</SidebarLink> */}
				</SchoolSidebar>
				<div style={{ width: '100%' }}>
					<Switch>
						<Route path='/school/overview' component={schoolOverview} />

						{/* Studio */}
						<Route path='/school/studio/general' component={schoolStudioGeneral} />
						<Route path='/school/studio/scenes' component={schoolScenes} />
						<Route path='/school/studio/reactions' component={schoolStudioReactions} />
						<Route path='/school/studio/hypes' component={schoolStudioHypes} />
						<Route path='/school/studio/animations' component={schoolStudioAnimations} />
						<Route path='/school/studio/fuze' component={schoolStudioFuze} />

						{/* Chat */}
						<Route path='/school/chat/general' component={schoolChatGeneral} />
						<Route path='/school/chat/tiers' component={schoolChatTiers} />
						<Route path='/school/chat/points' component={schoolChatPoints} />
						<Route path='/school/chat/colors' component={schoolChatColor} />
						<Route path='/school/chat/scenes' component={schoolChatScenes} />
						<Route path='/school/chat/reactions' component={schoolChatReactions} />
						<Route path='/school/chat/interactives' component={schoolChatInteractives} />

						{/* Alerts */}
						<Route path='/school/alerts' component={schoolAlerts} />

						{/* Lights */}


						{/* Accessories */}


						{/* Streamdeck */}


						{/* Hot Keys */}


						{/* Thingamabot */}


						{/* Overlays */}


						{/* Shortcut Menu */}


						{/* FAQ */}
						
						<Route path='/school/default-lights' component={schoolDefaultLights} />
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

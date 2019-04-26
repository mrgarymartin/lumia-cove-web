// React and Redux
import React, { Fragment } from 'react';
import Routes from './Routes';
import { withRouter } from 'react-router-dom';

// Modules
import ScrollToTop from './Shared/Components/scrollToTop';

// Components
import NavigationBar from './Shared/Components/navigationBar';
import Footer from './Shared/Components/footer';

// Styles
import { Body } from './Shared/Styles/body';
import { IconContext } from 'react-icons';
import { ToastContainer, Bounce, ToastPosition } from 'react-toastify';
import './Shared/Styles/s_lumia-bar.css';
import './Shared/Styles/layout.css';
import './Shared/Styles/style-helpers.css';

// 3rd Party
import 'react-toastify/dist/ReactToastify.css';

const App = (props) => (
		<Body className='app' >
			<IconContext.Provider value={{ className: 'react-icons' }} />
			<ToastContainer
				autoClose={6000}
				pauseOnHover={false}
				position={'bottom-right' as any}
				transition={Bounce}
				closeButton={false}
			/>
			<ScrollToTop>
				{!props.history.location.pathname.match(/(overlay|school)/) &&
					<Fragment>
						<NavigationBar />
						<div style={{ marginBottom: '90px' }} />
					</Fragment>
				}
				
				<Routes />
					
				{!props.history.location.pathname.match(/(overlay|school)/) &&
					<Fragment>
						<Footer />
					</Fragment>
				}
			</ScrollToTop>
		</Body>
);

export default withRouter(App);

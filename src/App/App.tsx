// React and Redux
import React from 'react';
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
				{!props.history.location.pathname.includes('overlay') && <NavigationBar />}
				<div style={{ marginBottom: '90px' }} />
					<Routes />
				{!props.history.location.pathname.includes('overlay') && <Footer />}
				
			</ScrollToTop>
		</Body>
);

export default withRouter(App);

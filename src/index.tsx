// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import store from './App/Services/store';

// Components
import App from './App/App';

import * as serviceWorker from './serviceWorker';

// Styles
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

function noConsoles() {
	console.log = () => {return;};
	console.warn = () => {return;};
	console.error = () => {return;};
}

process.env.NODE_ENV === 'production' && noConsoles();

process.on('unhandledRejection', (error) => {
	// Will print "unhandledRejection err is not defined"
	console.error('UnhandledRejection', error);
});

ReactDOM.render(
	<Provider store={store().store}>
		<PersistGate loading={null} persistor={store().persistor}>
			{process.env.NODE_ENV !== 'production'
				? <BrowserRouter>
					<App />
				</BrowserRouter>
				: <MemoryRouter>
					<App />
				</MemoryRouter>
			}
		</PersistGate>
		</Provider>
, document.getElementById('root') as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

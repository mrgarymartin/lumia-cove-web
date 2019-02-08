import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import { createLogger } from 'redux-logger';
import reducers from './Reducers';
import { deepCopy } from '../Shared/Utils/deepCopy';
import { ICoveStore } from '../Shared/Interfaces/store.interface';

const logger = createLogger({
	level: 'log',
	collapsed: true,
	diff: true,
	colors: {
		title: () => 'green',
		prevState: () => '#9E9E9E',
		action: () => '#03A9F4',
		nextState: () => '#4CAF50',
		error: () => '#F20404',
	}
});

const middleware = applyMiddleware(
	logger,
);

const persistConfig = {
  key: 'root',
	storage
}
const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
  let store: ICoveStore = createStore(persistedReducer, middleware);
	store['getDeepState'] = () => deepCopy(store.getState());
  let persistor = persistStore(store)
  return { store, persistor }
}
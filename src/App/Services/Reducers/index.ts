import { combineReducers } from 'redux';
import auth from './AuthReducer';

const appReducer = combineReducers({
	auth
});

const rootReducer = (state: any, action: any) => {
	if (action.type === 'ERASE_DATA') {
		console.log('Erasing all data');
		state = undefined;
	}
	return appReducer(state, action);
};

export default rootReducer;
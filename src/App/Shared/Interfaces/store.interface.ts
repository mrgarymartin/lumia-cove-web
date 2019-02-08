import { Store } from 'redux';
export interface ICoveStore extends Store {
	getDeepState?: () => any;
}

// Todo build this interface
export interface IStore {
	[key: string]: any;
}
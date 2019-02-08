import { Component } from 'react';
import { withRouter } from 'react-router';

import { IStore } from '../Interfaces/store.interface';

class ScrollToTop extends Component<IStore, any> {
	componentDidUpdate(prevProps: IStore) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
	}

	render() {
		return this.props.children;
	}
}

export default withRouter<any>(ScrollToTop);
import React, { Fragment } from 'react';
import './s_loaderMask.css';

const LoaderMask = () =>
	<div className='loader-mask'>
		<div className="spinner">
			<div className="double-bounce1"></div>
			<div className="double-bounce2"></div>
		</div>
		<h1 className='loader-text'>Loading...</h1>
	</div>;

export default LoaderMask;

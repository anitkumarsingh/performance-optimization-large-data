import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const CustomSpinner = () => {
	return (
		<div className='text-center mt-4'>
			<Spinner animation='border' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</Spinner>
		</div>
	);
};

export default CustomSpinner;

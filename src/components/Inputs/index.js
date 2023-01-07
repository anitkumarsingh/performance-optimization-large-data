import React from 'react';

const Input = ({ handlerChange, placeholder, ...rest }) => {
	return (
		<input placeholder={placeholder} {...rest} onChange={handlerChange} type='text' />
	);
};

export default Input;

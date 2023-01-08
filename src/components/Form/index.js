import React, { lazy } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

const Input = lazy(() => import('../Inputs'));

const Form = ({ searchList, searchRow }) => {
	return (
		<Container className='my-3' fluid={true}>
			<h4>React Optimized Table Component</h4>
			<Row>
				<Col md={3} lg={3} sm={3} xs={6}>
					<Input
						placeholder='Search By Title'
						className='form-control'
						handlerChange={searchList}
						type='text'
					/>
				</Col>
				<Col md={2} lg={2} sm={3} xs={6}>
					<Input
						handlerChange={searchRow}
						placeholder='Row No'
						className='form-control mx-1'
						type='text'
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default Form;

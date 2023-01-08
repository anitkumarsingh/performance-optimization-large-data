import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TableHeader = () => {
	return (
		<Container className='my-0' fluid={true}>
			<Row className='grid-row-head my-0 mx-0'>
				<Col className='grid-col-head-first' md={1} lg={1}>
					No
				</Col>
				<Col className='grid-col-head ' md={1} lg={1}>
					Album Id
				</Col>
				<Col className='grid-col-head' md={7} lg={7}>
					Title
				</Col>
				<Col className='grid-col-head' md={1} lg={1}>
					Post ID
				</Col>
				<Col className='grid-col-head' md={2} lg={2}>
					Thumbnail Image
				</Col>
			</Row>
		</Container>
	);
};

export default TableHeader;

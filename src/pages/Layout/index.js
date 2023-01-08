import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const Layout = () => {
	return (
		<>
			<Navbar bg='primary' variant='dark'>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>Rendering Optimization Demo</Navbar.Brand>
					</LinkContainer>
					<Nav className='me-auto'>
						<LinkContainer to='optimized'>
							<Nav.Link>Optimized</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/unoptimized'>
							<Nav.Link>Not Optimized</Nav.Link>
						</LinkContainer>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default React.memo(Layout);

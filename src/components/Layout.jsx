import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Analytics } from '@vercel/analytics/react';

const Layout = ({ children }) => {
	return (
		<>
			<Container>
				<Row>
					<Col className='d-flex'>
						<img src='/images/church_logo.jpg' alt='Logo' />
						<span style={{ marginLeft: '10px' }} id='logo-text'>
							<h2>蒙特利尔晨光教会</h2>
							<h2>Montreal Dawn Church</h2>
						</span>
					</Col>
				</Row>
				<Nav variant='pills' defaultActiveKey='/' style={{ marginTop: '50px' }} className='justify-content-end'>
					<Nav.Item>
						<Nav.Link href='/' id='nav-link-custom'>
							<span>教会简介</span>
							<span>About us</span>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href='/event' id='nav-link-custom'>
							<span>聚会</span>
							<span>Events</span>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href='/teachings' id='nav-link-custom'>
							<span>视频资料</span>
							<span>Teachings</span>
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Container>
			<Analytics />
			{children}
			<div style={{ backgroundColor: '#fbe4d4', height: '100px' }} className='my-5'></div>
		</>
	);
};

export default Layout;

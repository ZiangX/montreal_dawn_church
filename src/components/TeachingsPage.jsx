import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as XLSX from 'xlsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TeachingsPage = () => {
	// only fetch data from the url when the component mounts
	useEffect(() => {
		handleFetchFromUrl();
	}, []);

	// store the fetched data in the state
	const [linkData, setlinkData] = useState({});

	const handleFetchFromUrl = async () => {
		try {
			const url =
				'https://docs.google.com/spreadsheets/d/e/2PACX-1vSQvJIrYGS3kP9tSQ2e_RVd6jhNtkpf36ZtAvhoV5_5WO8jWKKm8hWxVFt8Pj_LAbc-wQ5Ksx-PN5sW/pub?output=xlsx';
			const response = await axios.get(url, { responseType: 'arraybuffer' });

			const data = new Uint8Array(response.data);
			const workbook = XLSX.read(data, { type: 'array' });
			const fetchedData = {};
			for (const sheetName of workbook.SheetNames) {
				const sheet = workbook.Sheets[sheetName];
				const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
				fetchedData[sheetName] = jsonData;
			}
			setlinkData(fetchedData);
		} catch (error) {
			console.error('Error fetching or parsing Excel file:', error);
		}
	};

	return (
		<>
			<div
				style={{
					position: 'relative',
				}}
				className='image-container'
			>
				<img src='images/sun.jpg' alt='Sun' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
				<div
					style={{
						position: 'absolute',
						bottom: '10px',
						left: '10px',
						color: 'white',
						padding: '5px 10px',
						borderRadius: '5px',
					}}
				>
					<h5 style={{ fontSize: '30px', paddingLeft: '18px' }}>教会视频资料 Teaching</h5>
				</div>
			</div>
			{/* TODO for mobile version, just duplicate this block and render diff block based on the screen size */}
			<Container className='my-5'>
				<Row>
					<Col>
						<div className='d-flex flex-column'>
							<span style={{ fontSize: '30px' }}>主日证道</span>
							<span>Sermon</span>
						</div>
					</Col>
					<Col>
						<div className='d-flex flex-column'>
							<span style={{ fontSize: '30px' }}>神学讲座</span>
							<span>Theology</span>
						</div>
					</Col>
					<Col>
						<div className='d-flex flex-column'>
							<span style={{ fontSize: '30px' }}>主日学</span>
							<span>Sunday school</span>
						</div>
					</Col>
				</Row>
				<hr style={{ border: '1px solid orange', width: '100%' }} />
				<Row>
					<Col>
						<div className='list'>
							{linkData['主日证道']?.map((item, index) => (
								// open a new tab when the user clicks on the item
								<div key={index}>
									<Link to={item[1]} className='list-item'>
										{item[0]}
									</Link>
								</div>
							))}
						</div>
					</Col>
					<Col>
						<div className='list'>
							{linkData['神学讲座']?.map((item, index) => (
								<div key={index}>
									<Link to={item[1]} className='list-item'>
										{item[0]}
									</Link>
								</div>
							))}
						</div>
					</Col>
					<Col>
						<div className='list'>
							{linkData['主日学']?.map((item, index) => (
								<div key={index}>
									<Link to={item[1]} className='list-item'>
										{item[0]}
									</Link>
								</div>
							))}
						</div>
					</Col>
				</Row>

				<Row style={{ marginTop: '200px' }}>
					<Col>
						<div className='d-flex flex-column'>
							<span style={{ fontSize: '30px' }}>书卷系列讲道</span>
							<span>Sermons in books</span>
						</div>
					</Col>
					<Col>
						<div className='d-flex flex-column'>
							<span style={{ fontSize: '30px' }}>查经系列</span>
							<span>Bible Study</span>
						</div>
					</Col>
					<Col>
						<div className='d-flex flex-column'>
							<span style={{ fontSize: '30px' }}>专题系列</span>
							<span>Topic</span>
						</div>
					</Col>
				</Row>
				<hr style={{ border: '1px solid orange', width: '100%' }} />
				<Row>
					<Col>
						<div className='list'>
							{linkData['书卷系列讲道']?.map((item, index) => (
								// open a new tab when the user clicks on the item
								<div key={index}>
									<Link to={item[1]} className='list-item'>
										{item[0]}
									</Link>
								</div>
							))}
						</div>
					</Col>
					<Col>
						<div className='list'>
							{linkData['查经系列']?.map((item, index) => (
								<div key={index}>
									<Link to={item[1]} className='list-item'>
										{item[0]}
									</Link>
								</div>
							))}
						</div>
					</Col>
					<Col>
						<div className='list'>
							{linkData['专题系列']?.map((item, index) => (
								<div key={index}>
									<Link to={item[1]} className='list-item'>
										{item[0]}
									</Link>
								</div>
							))}
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default TeachingsPage;

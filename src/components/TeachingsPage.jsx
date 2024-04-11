import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as XLSX from 'xlsx';
import axios from 'axios';

import data from '../data/index.xlsx';

const TeachingsPage = () => {
	const handleFetchFromUrl = async () => {
		try {
			const url =
				'https://docs.google.com/spreadsheets/d/e/2PACX-1vSQvJIrYGS3kP9tSQ2e_RVd6jhNtkpf36ZtAvhoV5_5WO8jWKKm8hWxVFt8Pj_LAbc-wQ5Ksx-PN5sW/pub?output=xlsx';
			const response = await axios.get(url, { responseType: 'arraybuffer' });

			const data = new Uint8Array(response.data);
			const workbook = XLSX.read(data, { type: 'array' });
			for (const sheetName of workbook.SheetNames) {
				const sheet = workbook.Sheets[sheetName];
				const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
				console.log(jsonData, sheetName);
			}
		} catch (error) {
			console.error('Error fetching or parsing Excel file:', error);
		}
	};

	handleFetchFromUrl();

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
			<Container className='my-5'>
				<Row>
					<Col>
						<div className='list'>
							<div className='list-title'>主日证道</div>
							<div className='list-item'>2024</div>
							<div className='list-divider'></div>
							<div className='list-item'>2023</div>
							<div className='list-item'>2022</div>
						</div>
					</Col>
					<Col>
						<div className='list'>
							<div className='list-title'>List 2</div>
							<div className='list-item'>Item 1</div>
							<div className='list-divider'></div>
							<div className='list-item'>Item 2</div>
							<div className='list-item'>Item 3</div>
						</div>
					</Col>
					<Col>
						<div className='list'>
							<div className='list-title'>List 3</div>
							<div className='list-item'>Item 1</div>
							<div className='list-divider'></div>
							<div className='list-item'>Item 2</div>
							<div className='list-item'>Item 3</div>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default TeachingsPage;

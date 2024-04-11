import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const EventPage = () => {
	return (
		<>
			<div className='d-flex justify-content-between event-page-image-container'>
				<img
					src='images/door.jpg'
					alt='door'
					className='d-inline-block'
					style={{ width: '49%', height: 'auto', objectFit: 'cover' }}
				/>
				<img
					src='images/inside.jpg'
					alt='inside'
					className='d-inline-block'
					style={{ width: '49%', height: 'auto', objectFit: 'cover' }}
				/>
			</div>
			<Container className='my-5'>
				<Row>
					<Col>
						<h1>聚会时间和地点 Time & Location</h1>

						<div className='event-info mt-5'>
							<h4>主日崇拜 (Sunday Worship):</h4>
							<p>每周日 15：30 - 17：00 PM</p>
						</div>

						<div className='event-info'>
							<h4>成人主日学(Adults Sunday School):</h4>
							<p>每周日 14：30 - 15：15 PM</p>
							<p>(主日学和主日崇拜都有zoom 转播，主日崇拜时同时有儿童主日学)</p>
						</div>

						<div className='event-info mt-5'>
							<h4>Zoom 查经 (Bible Study):</h4>
							<p>每周二晚 7：30 - 9：00 PM</p>
						</div>

						<div className='event-info'>
							<h4>Zoom 祷告会 (Prayer Meeting):</h4>
							<p>每周三 9：30 - 10：30 AM</p>
						</div>

						<p>Zoom 会议ID: 242-207-065 密码:030730</p>

						<div className='event-info mt-5'>
							<h4>聚会地址 Address ：</h4>
							<p>415 Mercille Avenue, St-Lambert, QC J4P 2L6</p>
						</div>

						<h3 className='my-5'>教会通迅地址 Mailing Address</h3>

						<div className='event-info'>
							<p>3123 Malo Ave, Brossard, QC J4Y 1B4</p>
							<p>电话：514-9510316</p>
							<p>邮箱 & E-Transfer: dawnchurchmontreal@gmail.com</p>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default EventPage;

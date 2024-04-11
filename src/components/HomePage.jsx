import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
	return (
		<>
			<div
				style={{
					position: 'relative',
				}}
				className='image-container'
			>
				<img
					src='images/banner.jpg'
					alt='Banner'
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				/>
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
					<h5 style={{ fontSize: '30px', paddingLeft: '18px' }}>教会简介 About us</h5>
				</div>
			</div>

			<Container className='my-5'>
				<Row>
					<Col>
						<p className='home-page-paragraph'>
							蒙特利尔晨光教会是一间面向华人移民的教会，于2017年秋开始了在南 岸Saint
							Lambert的聚会。我们的目标是建立这样一间教会：忠实传讲神全备
							的福音，让主的门徒在圣经真理上扎根，在教会中被成全；充满喜乐地敬
							拜、彼此切实相爱；与众圣徒一同扩展神的国度；按照众长老治会的原则来 治理教会。
						</p>

						<p className='home-page-paragraph'>
							我们是一群已经蒙神恩典救赎的罪人。虽然尚不完全，但我们愿意遵 行
							神的话语，在永生神的家——教会中被神塑造，活出在基督里的新生命。我
							们愿意把神的爱带给更多的人。在这里，我们欢迎所有被生活的重担所压迫
							的、心灵空虚的、苦闷的、抑郁的、没有安全感的、自卑的、怀疑的、失望
							的、忧虑的、孤独的、不被理解的人和有兴趣了解基督教、寻求认识真理、
							寻找生命意义、喜欢哲学思辨的人，请来我们教会认识这位创造天地，厚赐
							百物给人，更借着耶稣基督在十字架上成就的救恩赐人丰盛的、永远的生命 的神。
						</p>
						<p className='home-page-paragraph'>
							我们相信孩子是神赐给我们的产业，“耶稣说：‘让小孩子到我这里
							来，不要禁止他们，因为在天国的正是这样的人’（马太福音19：14）。”
							教会设有儿童主日学，让孩子们从小从歌声里、从故事中认识神。面对未来
							无数引诱和挑战的世界，基督信仰将带给孩子们正确的自我认知、生活准则 和随时的帮助和保护。
						</p>
						<p className='home-page-paragraph'>
							我们的信仰：圣经是神无误无谬的话语，是我们信仰的根基，被归纳
							总结在西敏准则中，包括：西敏信条、西敏大小要理问答。
							靳天骢牧师，李彦葳师母于2005年8月在蒙特利尔受洗归入基督。2012
							年蒙召赴美国宾州威斯敏斯特（Westminster）神学院学习。靳牧师2016年获
							道学硕士学位（MDiv），2019年5月按立为牧师；李师母2017年获圣经辅导学 硕士学位（MAC）。
						</p>
						<p className='home-page-paragraph'>这是神的话：</p>
						<p className='home-page-paragraph'>
							“我们务要认识耶和华，竭力追求认识他。他出现确如晨光，他必临到
							我们像甘雨、像滋润田地的春雨（何西阿书6章3节）。”
						</p>
						<p className='home-page-paragraph'>
							耶稣说：“凡劳苦担重担的人，可以到我这里来，我就使你们得安息 （马太福音11：28）。”
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default HomePage;

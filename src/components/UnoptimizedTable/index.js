import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const UnOptimizedTable = (props) => {
	const [itemList, setItemList] = useState(props.ItemList);

	const RowList = ({ index, style }) => (
		<Row className='grid-row' style={style}>
			<Col className='grid-col-first' md={1} lg={1}>
				{index}
			</Col>
			<Col className='grid-col ' md={1} lg={1}>
				{itemList[index]?.albumId}
			</Col>
			<Col className='grid-col' md={7} lg={7}>
				{itemList[index]?.title}
			</Col>
			<Col className='grid-col' md={1} lg={1}>
				{itemList[index]?.postId}
			</Col>
			<Col className='grid-col' md={2} lg={2}>
				<img src={`${itemList[index]?.thumbnailUrl}`} alt='thumbnail' />
			</Col>
		</Row>
	);
	const SearchRow = (e) => {
		let rowNo = e.target.value;
		console.log('asdasdas', parseInt(rowNo, 100));
		if (parseInt(rowNo)) {
			console.log('asdasdas inside', rowNo);
			listRef.current.scrollToItem(parseInt(rowNo), 'start');
		}
	};
	const SearchList = (e) => {
		let keyword = e.target.value;
		if (keyword !== '') {
			const results = itemList.filter((search) => {
				return search?.title?.toLowerCase().startsWith(keyword.toLowerCase());
			});
			setItemList(results);
		} else {
			setItemList(props.ItemList);
		}
	};

	const listRef = React.createRef();

	return (
		<>
			<Container className='content'>
				<Row className='d-flex justify-content-center'>
					<Col md={10} lg={12} className='grid-card'>
						<Container className='my-3' fluid={true}>
							<h4>React Optimized UnOptimizedTable Component</h4>
							<Row>
								<Col md={3} lg={3} sm={3} xs={6}>
									<input
										placeholder='Search By Title'
										className='form-control'
										onChange={SearchList}
										type='text'
									/>
								</Col>
								<Col md={2} lg={2} sm={3} xs={6}>
									<input
										onChange={SearchRow}
										placeholder='Row No'
										className='form-control mx-1'
										type='text'
									/>
								</Col>
							</Row>
						</Container>

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

						<Container className='my-0' fluid={true}>
							{itemList.map((i) => (
								<RowList index={i.id} key={i.id + Math.random(10)} />
							))}
						</Container>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default UnOptimizedTable;

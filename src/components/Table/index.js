import React, { useState, lazy } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FixedSizeList } from 'react-window';

const Form = lazy(() => import('../Form'));
const TableHeader = lazy(() => import('./TableHeader'));

const Table = ({ list }) => {
	const [itemList, setItemList] = useState(list);

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
				<img
					src={`${itemList[index]?.thumbnailUrl}`}
					alt='thumbnail'
					width={150}
					height={150}
				/>
			</Col>
		</Row>
	);

	const searchRow = (e) => {
		let rowNo = e.target.value;
		if (parseInt(rowNo)) {
			listRef.current.scrollToItem(parseInt(rowNo), 'start');
		}
	};

	const searchList = (e) => {
		let keyword = e.target.value;
		if (keyword !== '') {
			const results = itemList.filter((search) => {
				return search?.title?.toLowerCase().startsWith(keyword.toLowerCase());
			});
			setItemList(results);
		} else {
			setItemList(list);
		}
	};

	const listRef = React.createRef();

	return (
		<>
			<Container className='content'>
				<Row className='d-flex justify-content-center'>
					<Col md={10} lg={12} className='grid-card'>
						<Form searchList={searchList} searchRow={searchRow} />
						<TableHeader />
						<Container className='my-0' fluid={true}>
							<FixedSizeList
								ref={listRef}
								{...list}
								className='grid-div'
								itemCount={itemList.length}
								height={400}
								itemSize={150}>
								{RowList}
							</FixedSizeList>
						</Container>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Table;

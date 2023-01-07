import React, { useState, useEffect } from 'react';
import Table from '../../components/Table';
import { BASE_URL } from '../../constants/api';

const OptimizedTable = () => {
	const [data, setData] = useState([]);

	const getPhotos = async () => {
		const fetchPhotosResource = await fetch(`${BASE_URL}/photos`);
		const fetchCommentsResource = await fetch(`${BASE_URL}/comments`);
		const photoResult = await fetchPhotosResource.json();
		const commentsResult = await fetchCommentsResource.json();
		const combineRes = [...photoResult, ...commentsResult];
		setData(combineRes);
	};

	useEffect(() => {
		getPhotos();
	}, []);

	if (data.length === 0) {
		return <p>Loading...</p>;
	} else {
		return <Table ItemList={data} />;
	}
};

export default OptimizedTable;

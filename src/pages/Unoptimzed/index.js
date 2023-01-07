import React, { useState, useEffect, Profiler } from 'react';
import CustomSpinner from '../../components/Spinner';
import Table from '../../components/UnoptimizedTable';
import { BASE_URL } from '../../constants/api';
import callback from '../../utils/profilerCallback';

const UnOptimizedTablePage = () => {
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
		return <CustomSpinner />;
	} else {
		return (
			<Profiler id='unoptimized' onRender={callback}>
				<Table ItemList={data} />
			</Profiler>
		);
	}
};

export default UnOptimizedTablePage;

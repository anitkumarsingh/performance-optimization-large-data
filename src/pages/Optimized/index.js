import React, { useState, useEffect, Profiler, lazy } from 'react';
import { BASE_URL } from '../../constants/api';

const CustomSpinner = lazy(() => import('../../components/Spinner'));
const Table = lazy(() => import('../../components/Table'));
const callback = lazy(() => import('../../utils/profilerCallback'));

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
		return <CustomSpinner />;
	} else {
		return (
			<Profiler id='optimizedTable' onRender={callback}>
				<Table list={data} />
			</Profiler>
		);
	}
};

export default React.memo(OptimizedTable);

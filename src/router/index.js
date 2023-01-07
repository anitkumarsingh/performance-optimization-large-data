import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../pages/Layout';
import OptimizedTable from '../pages/Optimized';
import UnOptimizedTable from '../pages/Unoptimzed';

const Router = () => {
	return (
		<>
			<Layout />
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route path='optimized' element={<OptimizedTable />} />
				<Route path='unoptimized' element={<UnOptimizedTable />} />
			</Routes>
		</>
	);
};

export default Router;

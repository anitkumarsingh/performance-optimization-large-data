import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';

const Home = lazy(() => import('../pages/Home'));
const OptimizedTable = lazy(() => import('../pages/Optimized'));
const UnOptimizedTable = lazy(() => import('../pages/Unoptimzed'));

const Router = () => {
	return (
		<>
			<Layout />
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route index path='/' element={<Home />} />
					<Route path='optimized' element={<OptimizedTable />} />
					<Route path='unoptimized' element={<UnOptimizedTable />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default Router;

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './components/HomePage';
import EventPage from './components/EventPage';
import TeachingsPage from './components/TeachingsPage';

import './App.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layout>
				<HomePage />
			</Layout>
		),
		index: true,
	},
	{
		path: '/event',
		element: (
			<Layout>
				<EventPage />
			</Layout>
		),
	},
	{
		path: '/teachings',
		element: (
			<Layout>
				<TeachingsPage />
			</Layout>
		),
	},
]);

const routerProvider = <RouterProvider router={router} />;

export default routerProvider;

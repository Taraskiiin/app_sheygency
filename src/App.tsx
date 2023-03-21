import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout';

import Home from './pages/home';
import About from './pages/about';
import Clients from './pages/clients';
import Contact from './pages/contact';

const routes = [
	{ id: '1', path: '/', component: <Home /> },
	{ id: '2', path: '/about', component: <About /> },
	{ id: '3', path: '/clients', component: <Clients /> },
	{ id: '4', path: '/contact', component: <Contact /> },
];

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Layout>
					<Routes>
						{routes.map(
							(el: { id: string; path: string; component: JSX.Element }) => (
								<Route key={el.id} path={el.path} element={el.component} />
							)
						)}
					</Routes>
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;

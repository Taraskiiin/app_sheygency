import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const menu = [
	{ id: '1', path: '/', title: 'Home', icon: 'ri-home-2' },
	{ id: '2', path: '/about', title: 'About', icon: 'ri-information' },
	{
		id: '3',
		path: '/clients',
		title: 'Clients',
		icon: 'ri-user-location',
	},
	{ id: '4', path: '/contact', title: 'Contact', icon: 'ri-phone' },
];

export default function Layout({ children }: { children: any }) {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<div>
			<div className='pb-44'>{children}</div>
			<nav className='fixed bottom-10 left-0 right-0 t-center w-full sm:bottom-0'>
				<div className='flex w-full justify-center'>
					{menu.map((menuItem, index) => (
						<div className='flex flex-col justify-end items-center'>
							{location.pathname === menuItem.path && (
								<div className='flex flex-col items-center sm:hidden'>
									<div
										className={`h-5 w-10 rounded-t-full ${
											location.pathname === '/clients'
												? 'bg-secondary'
												: 'bg-primary '
										}`}
									></div>
									<div
										className={`h-5 w-20 rounded-t-full flex items-center justify-center ${
											location.pathname === '/clients'
												? 'bg-secondary'
												: 'bg-primary '
										}`}
									>
										<i
											className={`${
												menuItem.icon + '-fill'
											} text-white text-xl mb-2`}
										/>
									</div>
								</div>
							)}
							<div
								key={menuItem.id}
								className={`px-20 sm:px-10 bg-primary py-5 ${
									index === 0 && 'rounded-l-md'
								} ${
									index === menu.length - 1 && 'rounded-r-md'
								} flex items-center justify-center space-x-2 	${
									location.pathname === '/clients' && 'bg-secondary'
								}`}
							>
								{location.pathname !== menuItem.path && (
									<i
										className={`${menuItem.icon + '-line'} text-xl  ${
											location.pathname === '/clients'
												? 'text-primary '
												: 'text-secondary'
										}`}
										onClick={() => navigate(menuItem.path)}
									/>
								)}
								<Link
									to={`${menuItem.path}`}
									className={` text-xl ${
										location.pathname === '/clients'
											? 'text-primary'
											: 'text-secondary'
									} ${menuItem.path !== location.pathname && 'sm:hidden'}`}
								>
									{menuItem.title}
								</Link>
							</div>
						</div>
					))}
				</div>
			</nav>
		</div>
	);
}

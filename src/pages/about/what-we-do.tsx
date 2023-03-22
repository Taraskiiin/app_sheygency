import React from 'react';

const items = [
	{
		id: '1',
		title: 'Web Development',
		icon: 'images/web.png',
		description:
			'Web development is the work involved in developing a website for the Internet or an intranet.',
	},
	{
		id: '2',
		title: 'Mobile Development',
		icon: 'images/mobile.png',
		description:
			'Mobile development is the work involved in developing a mobile application for mobile devices such as smartphones, tablets, and feature phones.',
	},
	{
		id: '3',
		title: 'Digital Marketing',
		icon: 'images/digital-marketing.png',
		description:
			'Digital marketing is the work involved in developing a digital marketing strategy and developing a digital marketing plan.',
	},

	{
		id: '4',
		title: 'Graphic Design',
		icon: 'images/graphicdesign.png',
		description:
			'Graphic design is the work involved in developing a digital marketing strategy and developing a digital marketing plan.',
	},
];

export default function WhatWeDo() {
	return (
		<section className='mt-20 sm:mt-10'>
			<h2 className='text-secondary text-center text-8xl font-semibold sm:text-5xl'>
				What We Do ?
			</h2>
			<div className='h-96 w-full mt-20 bg-primary sm:mt-10' />
			<div className='grid grid-cols-4 sm:grid-cols-1 gap-10 mx-32 -mt-48 sm:mx-5 sm:-mt-80'>
				{items.map((item) => (
					<div
						key={item.id}
						className='p-5 bg-white border shadow flex flex-col space-y-5 items-center transform  hover:scale-105 duration-300 '
					>
						<img src={item.icon} alt='item.title' className='h-20 w-20' />
						<h5 className='text-2xl'>{item.title}</h5>
						<p className='text-gray-600 text-md'>{item.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}

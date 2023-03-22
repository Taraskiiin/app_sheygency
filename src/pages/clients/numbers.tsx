import React from 'react';

const data = [
	{
		value: '152',
		title: 'Clients',
	},
	{
		value: '485',
		title: 'Projects',
	},
	{
		value: '24',
		title: 'Locations',
	},
];

export default function Numbers() {
	return (
		<section className='px-40 mt-20'>
			<h3 className='text-2xl text-gray-600 my-5'>
				Until today we have provided our services to ....
			</h3>
			<div className='bg-primary flex space-x-10 p-5 justify-between rounded'>
				{data.map((item) => (
					<div className='flex flex-col space-y-5 items-center'>
						<h3 className='text-9xl text-secondary'>{item.value}</h3>
						<h5 className='text-secondary fonts-semibold text-2xl'>
							{item.title}
						</h5>
					</div>
				))}
			</div>
		</section>
	);
}

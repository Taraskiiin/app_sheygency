import React from 'react';

const items = [
	{
		id: '1',
		icon: 'ri-map-pin-line',
		title: 'Visit US',
		info: 'Na Kopani 12 Str, Lviv, Ukraine',
	},
	{
		id: '2',
		icon: 'ri-mail-line',
		title: 'Mail US',
		info: 'taraskravets95@gmail.com',
	},
	{
		id: '3',
		icon: 'ri-phone-line',
		title: 'Call US',
		info: '+380632545064',
	},
];

export default function Address() {
	return (
		<div className='bg-secondary rounded-3xl flex flex-col space-y-10 p-10 text-white w-1/2 sm:w-full sm:rounded-none sm:text-center'>
			<h3 className='text-3xl font-semibold'>Get In Touch</h3>
			<p>
				SUPER-MARKETING is a digital marketing agency that provide marketing and
				development services
			</p>

			{items.map((item) => (
				<div className='flex space-x-5 items-center sm:text-left'>
					<div className='h-12 w-12 bg-primary p-2 rounded flex justify-center items-center'>
						<i className={`${item.icon} text-3xl text-secondary`} />
					</div>
					<div>
						<h5 className='font-semibold text-xl'>{item.title}</h5>
						<p>{item.info}</p>
					</div>
				</div>
			))}
		</div>
	);
}

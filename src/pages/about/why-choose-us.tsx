import React from 'react';

const items = [
	{
		id: '1',
		title: 'Innovative and Passionate',
		image: 'images/innovation.png',
		description:
			'We are a team of creative and passionate designers and developers. We are fully aware of the importance of designing for the digital age and strive to deliver the best result for our clients.',
	},
	{
		id: '2',
		title: 'Good Return on Investment',
		image: 'images/investment.png',
		description:
			'Working with us means providing your business with great savings. All our digital marketing and web development packages are being offered at competitive prices',
	},
	{
		id: '3',
		title: 'Seamless Customer Support',
		image: 'images/customer-support.png',
		description:
			'We are always here to help you with any questions you may have. We are always here to help you with any questions you may have. We are always here to help you with any questions you may have.',
	},
];

export default function WhyChooseUs() {
	return (
		<section className='mx-32 mt-20  border shadow sm:mx-0 sm:border-none sm:text-center sm:shadow-none'>
			<div className='bg-primary h-72 w-full flex justify-center items-center sm:h-min sm:py-5'>
				<h2 className='text-7xl font-semibold text-white sm:text-3xl'>
					Why Choose Us
				</h2>
			</div>
			<div className='grid grid-cols-3 sm:grid-cols-1 gap-10 sm:gap-5 p-5'>
				{items.map((item) => (
					<div
						key={item.id}
						className='p-5 bg-white border shadow flex flex-col space-y-5 items-center transform  hover:scale-105 duration-300 '
					>
						<img src={item.image} alt='item.title' className='h-20 w-20' />
						<h5 className='text-2xl font-semibold'>{item.title}</h5>
						<p className='text-gray-600 text-md'>{item.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}

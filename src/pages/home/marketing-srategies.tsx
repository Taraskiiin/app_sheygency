import React from 'react';

const strategies = [
	{
		id: '1',
		title: 'CONTENT MARKETING',
		description:
			'Content marketing is a form of marketing focused on creating, publishing, and distributing content for a targeted audience online. ',
		image: 'images/content-marketing.png',
	},
	{
		id: '2',
		title: 'INBOUND MARKETING',
		description:
			'Inbound is far and away the most effective B2B marketing strategy because it leverages the strengths of the majority of the other nine strategies to attract, engage, and delight customers. ',
		image: 'images/inbound-marketing.png',
	},
	{
		id: '3',
		title: 'SOCIAL MEDIA',
		description:
			'Social media marketing focuses on providing users with content they find valuable and want to share across their social networks, resulting in increased visibility and website traffic.   ',
		image: 'images/social-media.png',
	},
	{
		id: '4',
		title: 'SEARCH ENGINE OPTIMIZATION',
		description:
			'Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.',
		image: 'images/seo.png',
	},
];

export default function MarketingSrategies() {
	return (
		<section>
			<h3 className='text-primary text-5xl font-semibold sm:mt-0 sm:text-3xl'>
				Want to boost your business growth?
			</h3>
			<h2 className='text-7xl font-semibold text-primary mt-10 sm:text-5xl'>
				The <b className='text-secondary'>SOLUTION</b> is here...
			</h2>
			<p className='text-gray-600 text-xl mt-10'>
				Curious about what business professionals think of different marketing
				strategies. We took a look at recent survey results and reports that
				compiled data on the topic, and created a list of 10 B2B marketing
				strategies commonly recognized as successful regardless of industry.
				Here's what we found, in no particular order:
			</p>
			<div className='grid grid-cols-2 gap-20 mt-10 sm:grid-cols-1 '>
				{strategies.map((item) => (
					<div
						key={item.id}
						className='border border-primary p-5 text-primary flex flex-col space-y-10 rounded transform hover:scale-105 duration-300'
					>
						<h5 className='mx-20  sm:mx-5 text-center -mt-11 bg-white border-primary text-secondary border text-2xl rounded py-2 uppercase '>
							{item.title}
						</h5>
						<img src={item.image} alt={item.title} className='h-24 w-24' />
						<p className='text-gray-600 text-md mt-10'>{item.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}

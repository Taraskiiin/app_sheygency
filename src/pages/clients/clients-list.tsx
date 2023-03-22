import React, { useState } from 'react';

const clients = [
	{
		name: 'Slack',
		logo: 'images/slack.png',
		url: 'https://www.tcs.com/',
		description:
			'Slack is a cloud-based set of tools and services that makes it easy to get work done. It’s built for teams of all sizes, and has a simple, beautiful design that’s easy to use and works great on any device.',
	},
	{
		name: 'Twitter',
		logo: 'images/twitter.png',
		url: 'https://www.infosys.com/',
		description:
			'Twitter is a social networking service that enables users to send and read short 140-character messages called “tweets”.',
	},
	{
		name: 'Instagram',
		logo: 'images/instagram.png',
		url: 'https://www.wipro.com/',
		description:
			'Instagram is a photo-sharing, video-sharing and communication service that is owned and operated by Facebook, Inc. It was created by Kevin Systrom and Mike Krieger, and launched in October 2010.',
	},
	{
		name: 'Spotify',
		logo: 'images/spotify.png',
		url: 'https://www.hcl.com/',
		description:
			'Spotify is a music streaming service that offers a wide range of music genres, including rock, pop, country, electronic, and more. It was created by Swedish computer programmer and programmer Johan Liljegren in 2007.',
	},
	{
		name: 'Messenger',
		logo: 'images/messenger.png',
		url: 'https://www.accenture.com/',
		description:
			'Messenger is a messaging app that enables users to communicate with their friends and family. It was created by Facebook in 2011.',
	},
	{
		name: 'Cognizant',
		logo: 'images/cognizant.png',
		url: 'https://www.capgemini.com/',
		description:
			'Cognizant is a multinational technology company headquartered in Bengaluru, India. It is the largest Indian IT company by market capitalization.',
	},
	{
		name: 'Github',
		logo: 'images/github.png',
		url: 'https://www.cognizant.com/',
		description:
			'GitHub is a web-based hosting service for version control of code using the distributed version control (DVCS) model. It was created by Linus Torvalds in 2005.',
	},
];

export default function ClientsList() {
	const [selected, setSelected] = useState(0);

	const next = () => {
		setSelected(selected + 1);
	};

	const previous = () => {
		setSelected(selected - 1);
	};

	return (
		<section>
			<div className='bg-primary h-44 rounded-b-full' />{' '}
			<div className='flex justify-center -mt-44 items-center space-x-10 relative'>
				{selected !== 0 && (
					<i
						className='ri-arrow-left-line text-4xl text-gray-600 cursor-pointer absolute left-10'
						onClick={previous}
					/>
				)}
				<div className='grid grid-cols-3 gap-10'>
					{[
						clients[selected],
						clients[selected + 1],
						clients[selected + 2],
					].map(
						(item: {
							name: string;
							logo: string;
							description: string;
							url: string;
						}) => (
							<div className='bg-white shadow p-5 w-[400px] h-[400px] border'>
								<div className='flex space-x-10 items-center justify-between'>
									<img src={item.logo} alt={item.name} className='h-32 w-32' />
									<h3 className='text-primary font-semibold text-2xl'>
										{item.name}
									</h3>
								</div>
								<p className='text-gray-600 text-md mt-10'>
									{item.description}
								</p>
							</div>
						)
					)}
				</div>
				{selected < 4 && (
					<i
						className='ri-arrow-right-line text-4xl text-gray-600 cursor-pointer absolute right-10'
						onClick={next}
					/>
				)}
			</div>
			<div className='flex justify-center mt-10'>
				<div className='flex space-x-2'>
					{[1, 2, 3, 4].map((item, index) => (
						<div
							className={`h-4 w-4 rounded-full cursor-pointer  transform duration-300 ${
								selected === index ? 'bg-secondary' : 'bg-gray-200'
							}`}
							onClick={() => setSelected(index)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

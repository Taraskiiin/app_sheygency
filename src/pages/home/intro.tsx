import React from 'react';
import Lottie from 'react-lottie-player';

import socialMedia from '../../lottie/social-media.json';

export default function Intro() {
	return (
		<section className='grid grid-cols-2 sm:grid-cols-1 h-screen items-center sm:mt-0'>
			<div className='flex flex-col space-y-10'>
				<h1 className='text-7xl font-semibold text-primary sm:text-6xl'>
					The best
					<b className='text-secondary'>
						<br />
						marketing
					</b>
				</h1>
				<h2 className='text-5xl font-semibold text-primary whitespace-nowrap sm:text-4xl sm:whitespace-normal'>
					Doesn't feel like marketing
				</h2>
				<button className='px-16 py-5 bg-secondary text-xl text-white max-w-max hover:bg-primary duration-300 sm:mx-auto'>
					Get Started
				</button>
			</div>
			<div className='p-10 sm:p-0 sm:-mt-20'>
				<Lottie
					loop
					animationData={socialMedia}
					play
					style={{ background: 'transparent' }}
				/>
			</div>
		</section>
	);
}

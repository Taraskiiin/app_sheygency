import React from 'react';
import Lottie from 'react-lottie-player';

import clients from '../../lottie/clients.json';

export default function Intro() {
	return (
		<section className='h-screen bg-primary grid grid-cols-2 items-center'>
			<div className='h-[500px] -mt-[300px]'>
				<Lottie
					loop
					animationData={clients}
					play
					style={{ background: 'transparent' }}
				/>
			</div>

			<div>
				<h2 className='text-7xl font-semibold text-white'>
					We work <b className='text-secondary'>together</b> with our{' '}
					<b className='text-green-500'>clients</b>
				</h2>
			</div>
		</section>
	);
}

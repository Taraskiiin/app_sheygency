import React from 'react';
import AboutIntro from './about-intro.svg';

export default function Intro() {
	return (
		<>
			<div className='about-intro h-screen sm:rotate-0 sm:hidden' />
			<div className='flex justify-center gap-10 items-center sm:flex-col min-h-screen sm:justify-start sm:bg-secondary sm:p-10 sm:min-h-min'>
				<div className='z-10 flex justify-center '>
					<img
						src={AboutIntro}
						alt=''
						className='h-[500px] w-[500px] sm:h-[250px]'
					/>
				</div>
				<div className='z-10 max-w-max flex flex-col space-y-5'>
					<h1 className='text-8xl font-semibold text-white sm:text-5xl'>
						SUPER-MARKETING
					</h1>
					<hr />
					<h1 className='text-xl text-white'>OLDER | STRONGER | WISER</h1>
				</div>
			</div>
		</>
	);
}

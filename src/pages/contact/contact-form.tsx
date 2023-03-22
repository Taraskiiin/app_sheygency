import React from 'react';

export default function ContactForm() {
	return (
		<form className='flex flex-col space-y-10 w-1/2 sm:w-full sm:p-5'>
			<h1 className='text-4xl font-semibold text-primary mb-5'>
				Send a Message
			</h1>
			<div className='flex space-x-10 sm:flex-col sm:space-y-10 sm:space-x-0'>
				<input
					type='text'
					placeholder='First name'
					className=' py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full'
				/>
				<input
					type='text'
					placeholder='Last name'
					className=' py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full'
				/>
			</div>
			<div className='flex space-x-10 sm:flex-col sm:space-y-10 sm:space-x-0'>
				<input
					type='text'
					placeholder='Email'
					className=' py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full'
				/>
				<input
					type='text'
					placeholder='Phone Number'
					className=' py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray- w-full'
				/>
			</div>
			<div className='flex space-x-10'>
				<textarea
					rows={5}
					placeholder='Message'
					className=' py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full'
				/>
			</div>
			<div className='flex justify-end'>
				<button className='text-white bg-secondary px-5 py-3 rounded max-w-max'>
					Send A Message
				</button>
			</div>
		</form>
	);
}

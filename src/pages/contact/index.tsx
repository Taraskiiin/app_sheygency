import React from 'react';

import Address from './address';
import ContactForm from './contact-form';

export default function Contact() {
	return (
		<section className='flex items-center justify-center mt-16 px-32 gap-20'>
			<Address />
			<ContactForm />
		</section>
	);
}

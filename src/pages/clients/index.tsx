import React from 'react';
import ClientsList from './clients-list';

import Intro from './intro';

export default function Clients() {
	return (
		<div>
			<Intro />
			<ClientsList />
		</div>
	);
}

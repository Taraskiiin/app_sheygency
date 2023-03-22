import React from 'react';

import ClientsList from './clients-list';
import Intro from './intro';
import Numbers from './numbers';

export default function Clients() {
	return (
		<div>
			<Intro />
			<ClientsList />
			<Numbers />
		</div>
	);
}

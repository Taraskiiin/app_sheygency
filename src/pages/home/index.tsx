import React from 'react';

import Intro from './intro';
import MarketingSrategies from './marketing-srategies';
import WhyMarketing from './why-marketing';

export default function Home() {
	return (
		<div className='px-32 sm:px-2 '>
			<Intro />
			<MarketingSrategies />
			<WhyMarketing />
		</div>
	);
}

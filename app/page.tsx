'use client';

import Home from './home/Home';
import About from './about/About';
import History from './history/History';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import ScrollLogic from './ScrollLogic';
import SideScroller from './side-scroller/sideScroller';

import './page.css';

export default function Page() {
	return (
		<div className='parentContainer'>
			{/*<SideScroller />*/}
			<div className='mainContent'>
				<Home />
				<About />
				<History />
				<Projects />
			</div>
			<ScrollLogic />
		</div>
	);
}

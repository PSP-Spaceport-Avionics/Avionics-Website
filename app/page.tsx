'use client';

import Home from './home/Home';
import About from './about/About';
import ScrollLogic from './ScrollLogic';
import SideScroller from './side-scroller/sideScroller';

import './page.css';

export default function Page() {
	return (
		<div className='parentContainer'>
			<SideScroller />
			<div className='mainContent'>
				<Home />
				<About />
				<section id='history'>History</section>
				<section id='projects'>Projects</section>
				<section id='contact'>Contact</section>
			</div>
			<ScrollLogic />
		</div>
	);
}

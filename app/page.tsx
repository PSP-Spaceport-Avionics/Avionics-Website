'use client';
import Home from './home/Home';
import About from './about/About';
import ScrollLogic from './ScrollLogic';
export default function Page() {
	return (
		<div>
			<div>
				<section id='home'>
					<Home />
				</section>
				<About />
				<section id='history'>History</section>
				<section id='projects'>Projects</section>
				<section id='contact'>Contact</section>
			</div>
			<ScrollLogic />
		</div>
	);
}

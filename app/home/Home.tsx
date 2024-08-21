import './Home.css';

import coverImg from '../../styles/coverImg.jpeg';
import coverImg2 from '../../styles/coverImg2.jpg';
import coverImg3 from '../../styles/coverImg3.jpg';
import coverImg4 from '../../styles/coverImg4.jpg';
import coverImg6 from '../../styles/coverImg6.jpg';
import rocket from '../../styles/rocket.jpg';
import milkyway from '/public/images/milkyway.jpg';
//need to update later?

export default function Home() {
	return (
		<section id='home'>
			<div className='videoContainer'>
				{/*<video className='video' autoPlay loop muted playsInline>
				<source src='/videos/staticFire.mov' type='video/mp4 ' />
				Your browser does not support the video tag.
			</video> */}
			</div>
			<img src={milkyway.src} />
		</section>
	);
}

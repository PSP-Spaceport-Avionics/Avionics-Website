import './Home.css';

import ReactLogo from '../../public/svg/down.svg';

import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import { useState, useEffect } from 'react';

export default function Home() {
	const [welcomeText, setWelcomeText] = useState('');
	const fullWelcomeText = 'Welcome';

	const [subText, setSubText] = useState('');
	const fullSubText = 'to Avionics @ Spaceport America';

	const [isTypingComplete, setIsTypingComplete] = useState(false);

	useEffect(() => {
		let index = 0;

		function typeWelcomeText() {
			if (index < fullWelcomeText.length) {
				setWelcomeText(fullWelcomeText.substring(0, index + 1));
				index++;
				setTimeout(typeWelcomeText, 75);
			} else {
				setIsTypingComplete(true);
				setTimeout(typeSubText, 500);
			}
		}

		function typeSubText() {
			index = 0;
			function typeCharacter() {
				if (index < fullSubText.length) {
					setSubText(fullSubText.substring(0, index + 1));
					index++;
					setTimeout(typeCharacter, 25);
				}
			}
			typeCharacter();
		}

		typeWelcomeText();
	}, []);
	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault();
		const targetElement = document.getElementById('overview');
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<section id='home'>
			<div className='backgroundImg'>
				<p
					className={`welcomeTxt text-8xl font-verylight -mt-40 ${
						isTypingComplete ? '' : 'cursor'
					}`}>
					{welcomeText}
				</p>
				<p className='subTxt cursor text-2xl font-extralight mt-4'>
					{subText}
				</p>
				<a
					className='arrowContainer'
					href={'overview'}
					onClick={handleClick}>
					<ReactLogo className='arrow' />
					<ReactLogo className='arrow -mt-4' />
				</a>
			</div>
		</section>
	);
}

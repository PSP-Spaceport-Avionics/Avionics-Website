import { WindowOutlined } from '@mui/icons-material';
import React, { useEffect, useLayoutEffect, useState } from 'react';

function ScrollLogic() {
	const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
	const [sections, setSections] = useState<Element[]>([]);
	const sectionList = ['/', '/about', '/history', '/projects', '/contact'];

	useEffect(() => {
		const sectionsArray = Array.from(document.querySelectorAll('section'));
		setSections(sectionsArray);
		console.log(sections);
	}, []);
	useEffect(() => {
		// Log the sections whenever they change
		if (sections.length > 0) {
			console.log('Sections have changed:', sections);
		}
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [sections]);

	const handleScroll = () => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = sections.indexOf(entry.target);
						if (
							index !== -1 &&
							window.location.pathname !== sectionList[index]
						) {
							history.replaceState(null, '', sectionList[index]);
						}
					}
				});
			},
			{
				root: null, // Observing relative to the viewport
				threshold: 0.75,
			}
		);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			if (sections.length > 0) {
				sections.forEach((section) => observer.unobserve(section));
			}
		};
	};

	return null;
}

export default ScrollLogic;

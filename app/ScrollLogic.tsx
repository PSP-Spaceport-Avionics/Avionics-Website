import React, { useEffect, useState } from 'react';

function ScrollLogic() {
	const [sections, setSections] = useState<Element[]>([]);
	const sectionList = ['/', '/about', '/history', '/projects', '/contact'];
	let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

	useEffect(() => {
		const sectionsArray = Array.from(document.querySelectorAll('section'));
		setSections(sectionsArray);
	}, []);

	useEffect(() => {
		if (sections.length > 0) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							const index = sections.indexOf(entry.target);
							if (index !== -1) {
								if (scrollTimeout) {
									clearTimeout(scrollTimeout);
								}
								scrollTimeout = setTimeout(() => {
									if (
										window.location.pathname !==
										sectionList[index]
									) {
										history.pushState(
											null,
											'',
											sectionList[index]
										);
									}
								}, 200);
							}
						}
					});
				},
				{
					root: null,
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
		}
	}, [sections]);

	return null;
}

export default ScrollLogic;

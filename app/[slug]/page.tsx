'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import Page from '../page';

const DynamicPage = () => {
	const pathname = usePathname();
	const isFirstRender = useRef(true);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;

			const pathSegments = pathname.split('/').filter(Boolean);
			const slug = pathSegments[0];

			if (slug) {
				const targetElement = document.getElementById(slug);
				if (targetElement) {
					targetElement.scrollIntoView({ behavior: 'smooth' });
				}
			}
		}
	}, [pathname]);

	return (
		<>
			<Page />
		</>
	);
};

export default DynamicPage;

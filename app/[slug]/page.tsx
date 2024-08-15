'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Page from '../page';

const DynamicPage = () => {
	const pathname = usePathname();

	useEffect(() => {
		console.log(pathname);
		const pathSegments = pathname.split('/').filter(Boolean);
		const slug = pathSegments[0];

		console.log('Slug value:', slug);

		if (slug) {
			const targetElement = document.getElementById(slug);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth' });
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

import React from 'react';

function Projects() {
	const projects = [
		{
			title: 'Project Alpha',
			description:
				'A groundbreaking project that revolutionized our industry.',
			image: '/images/project-alpha.jpg',
			link: '/projects/alpha',
		},
		{
			title: 'Project Beta',
			description: 'An innovative solution to complex challenges.',
			image: '/images/project-beta.jpg',
			link: '/projects/beta',
		},
		{
			title: 'Project Gamma',
			description:
				'A cutting-edge project that pushed the boundaries of technology.',
			image: '/images/project-gamma.jpg',
			link: '/projects/gamma',
		},
		// Add more projects as needed
	];
	return (
		<div>
			<section
				id='projects'
				className='projects-section py-16 px-8 md:px-16 lg:px-32'>
				<div className='text-center mb-12'>
					<h2 className='text-4xl font-bold text-white'>
						Featured Projects
					</h2>
					<p className='mt-4 text-lg max-w-2xl mx-auto text-gray-300'>
						Discover the diverse range of projects we've
						successfully completed, each contributing to our mission
						of innovation and excellence.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project, index) => (
						<div
							key={index}
							className='project-card bg-gray-800 p-6 rounded-lg shadow-lg'>
							<img
								src={project.image}
								alt={project.title}
								className='w-full h-48 object-cover rounded-t-lg mb-4'
							/>
							<h3 className='text-2xl font-bold mb-2'>
								{project.title}
							</h3>
							<p className='text-gray-300 mb-4'>
								{project.description}
							</p>
							<a
								href={project.link}
								className='text-yellow-500 hover:underline'>
								Learn More →
							</a>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}

export default Projects;

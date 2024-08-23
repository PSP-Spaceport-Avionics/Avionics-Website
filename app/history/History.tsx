import React from 'react';

function history() {
	return (
		<div>
			<section
				id='history'
				className='timeline-section py-16 px-8 md:px-16 lg:px-32'>
				<div className='text-center mb-12'>
					<h2 className='text-4xl font-bold text-white'>
						Key Milestones
					</h2>
					<p className='mt-4 text-lg max-w-2xl mx-auto text-gray-300'>
						Explore the significant events that have shaped our
						company over the years.
					</p>
				</div>

				<div className='timeline'>
					<div className='timeline-item bg-gray-800 p-6 rounded-lg shadow-lg mb-8'>
						<h3 className='text-2xl font-bold mb-2'>
							2001 - Company Founded
						</h3>
						<p className='text-gray-300'>
							Our journey began in 2001 with the vision to
							innovate and lead in technology.
						</p>
					</div>
					<div className='timeline-item bg-gray-800 p-6 rounded-lg shadow-lg mb-8'>
						<h3 className='text-2xl font-bold mb-2'>
							2005 - First Major Product Launch
						</h3>
						<p className='text-gray-300'>
							We launched our first major product, revolutionizing
							the industry and setting a new standard for quality.
						</p>
					</div>
					<div className='timeline-item bg-gray-800 p-6 rounded-lg shadow-lg mb-8'>
						<h3 className='text-2xl font-bold mb-2'>
							2010 - Global Expansion
						</h3>
						<p className='text-gray-300'>
							By 2010, we expanded our operations globally,
							reaching new markets and customers around the world.
						</p>
					</div>
					<div className='timeline-item bg-gray-800 p-6 rounded-lg shadow-lg mb-8'>
						<h3 className='text-2xl font-bold mb-2'>
							2020 - New Innovations
						</h3>
						<p className='text-gray-300'>
							Continuing our commitment to innovation, we
							introduced groundbreaking new products that pushed
							the boundaries of technology.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default history;

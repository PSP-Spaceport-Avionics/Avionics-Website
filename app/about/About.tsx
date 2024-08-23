import React from 'react';

import './About.css';

import rocket from '../../public/images/rocket.jpg';

function About() {
	return (
		<section
			id='about'
			className='company-overview px-8 md:px-16 lg:px-32'>
			<img
				src={rocket.src}
				className='rocket my-10 w-60 h-auto rounded-lg'
			/>
			<div className='text-center mb-12'>
				<h2 className='text-4xl font-bold text-white'>Who We Are</h2>
				<p className='mt-4 text-lg max-w-2xl mx-auto text-gray-300'>
					We are a passionate team dedicated to advancing technology
					and innovation. Our mission is to create groundbreaking
					solutions that improve the lives of people around the world.
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				<div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
					<h3 className='text-2xl font-bold mb-4'>Our Mission</h3>
					<p className='text-gray-300'>
						Our mission is to innovate and lead in the development
						of cutting-edge technology solutions that push the
						boundaries of what’s possible.
					</p>
				</div>
				<div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
					<h3 className='text-2xl font-bold mb-4'>Our Vision</h3>
					<p className='text-gray-300'>
						To be a global leader in technological advancements,
						ensuring our solutions reach every corner of the world,
						improving lives everywhere.
					</p>
				</div>
				<div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
					<h3 className='text-2xl font-bold mb-4'>Our Values</h3>
					<p className='text-gray-300'>
						Innovation, Integrity, Collaboration, and Excellence.
						These values are at the core of everything we do and
						guide us in our journey.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;

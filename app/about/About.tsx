import React from 'react';
import './About.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

function About() {
	// Animation variants for fade-in effect
	const fadeIn = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section
			id='overview'
			className='bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-16'>
			<div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-12'>
				{/* Left Column - Text Content */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={fadeIn}
					transition={{ duration: 0.8 }}>
					{/* Heading */}
					<div className='text-left mb-10'>
						<h2
							className='text-6xl font-extrabold mb-8'
							style={{ color: '#18141c' }}>
							Overview
						</h2>
						<p
							className='text-xl leading-relaxed'
							style={{ color: '#4c4c4c' }}>
							We are the avionics team for the Purdue Space
							Program (PSP) Spaceport, dedicated to designing and
							implementing electronics for high-powered rocketry.
							Since 2021, we have participated in the annual
							Spaceport America Cup, the largest intercollegiate
							rocketry competition in the world. Our team focuses
							on creating SRAD (Student Researched and Developed)
							flight systems for telemetry, data acquisition, and
							flight control, ensuring reliable performance under
							competition guidelines.
						</p>
					</div>

					{/* Cards */}
					<div className='space-y-10'>
						{/* Mission Statement */}
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeIn}
							transition={{ duration: 0.8, delay: 0.2 }}
							className='border-l-4 border-[#fbc02d] pl-6 bg-white p-8 rounded-lg shadow-md'
							style={{ color: '#18141c' }}>
							<h3
								className='text-3xl font-bold mb-4'
								style={{ color: '#18141c' }}>
								Mission Statement
							</h3>
							<p
								className='text-lg leading-relaxed'
								style={{ color: '#4c4c4c' }}>
								Our mission is to develop, test, and improve
								flight computer and ground station systems to
								ensure reliable performance and innovation in
								high-powered rocketry.
							</p>
						</motion.div>

						{/* By the Numbers */}
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeIn}
							transition={{ duration: 0.8, delay: 0.4 }}
							className='border-l-4 border-[#fbc02d] pl-6 bg-white p-8 rounded-lg shadow-md'
							style={{ color: '#18141c' }}>
							<h3
								className='text-3xl font-bold mb-4'
								style={{ color: '#18141c' }}>
								By the Numbers
							</h3>
							<ul
								className='text-lg leading-relaxed list-disc pl-4'
								style={{ color: '#4c4c4c' }}>
								<li>10+ team members from diverse majors</li>
								<li>
									25,000+ lines of code powering our avionics
									systems
								</li>
								<li>
									600+ hours invested in research and
									development
								</li>
							</ul>
						</motion.div>
					</div>
				</motion.div>

				{/* Right Column - Rocket Image */}
				<motion.div
					className='flex justify-center lg:justify-start items-center w-fit mx-auto lg:ml-12'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={fadeIn}
					transition={{ duration: 0.8, delay: 0.6 }}>
					<div className='h-full flex items-center'>
						<Image
							src='/images/rocket.jpg'
							alt='Rocket'
							className='rounded-lg shadow-lg object-cover h-full'
							width={320}
							height={600}
							sizes='(max-width: 1024px) 100vw, 50vw'
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default About;

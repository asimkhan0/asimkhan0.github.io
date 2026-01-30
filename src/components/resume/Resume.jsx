import React from 'react';
import './Resume.css';
import Card from './Card';

const expData = [
	{
		id: 1,
		category: 'education',
		icon: 'icon-graduation',
		year: 'Completed',
		title: 'BS in Computer Science',
		desc: (
			<span>
				COMSATS University of Science & Technology
			</span>
		),
	},
	{
		id: 2,
		category: 'experience',
		icon: 'icon-briefcase',
		year: 'June 2022 - Present',
		title: 'Senior Full-stack Engineer @ Nomysh USA',
		desc: 'Pioneered the Nomysh web application using NextJS and ReactJS, resulting in a 30% increase in user engagement. Initiated SEO optimization through server-side rendering and automated OG metatags, boosting organic traffic by 25%. Designed and developed the landing page, user dashboard, and admin dashboard, improving navigation efficiency by 40%. Created a video uploader feature, enabling users to select any frame for the thumbnail, enhancing user-generated content quality by 50%. Architected the frontend for the chat feature, resulting in a 15% increase in user interaction.',
	},
	{
		id: 3,
		category: 'experience',
		icon: 'icon-briefcase',
		year: 'August 2020 - May 2022',
		title: 'Lead Frontend Engineer @ ForgingBlock USA',
		desc: 'Led the development of client-facing websites and dashboards for products like ForgingBlock, Streaming, and TetraPayments, resulting in a 35% increase in user retention. Spearheaded an encrypted multicurrency wallet, enabling secure crypto transactions, which facilitated over 5000 transactions monthly. Utilized WebSockets to notify streamers of donations, improving real-time user feedback by 50%. Integrated Web3 smart contracts into the frontend, enhancing transaction transparency and security by 40%.',
	},
	{
		id: 4,
		category: 'experience',
		icon: 'icon-briefcase',
		year: 'May 2018 – July 2020',
		title: 'Frontend Developer @ Automotive AI Germany/Pakistan',
		desc: 'Built the frontend for ReplicaR, a realistic world simulation for autonomous driving. Developed client-facing websites with VueJS, NuxtJS, and Vuetify, enhancing the user interface, resulting in a 20% increase in client satisfaction. Implemented complex validation for car sensor configurations, reducing error rates by 15%.',
	},
	{
		id: 5,
		category: 'experience',
		icon: 'icon-briefcase',
		year: 'June 2016 - April 2018',
		title: 'Software Engineer @ ITBoost Pakistan',
		desc: 'Key member of the team resolving client-reported bugs and implementing new features, improving system stability by 25%. Modernized the "Questions Import" project, importing data from ConnectWise API to the local DB, resulting in a 30% reduction in data retrieval time. Built a revisioning system for all configurations and data, enhancing data accuracy and integrity by 30%. Integrated Connect-Wise, Screen Connect, and Lab Tech, increasing operational efficiency by 35%.',
	},
];

const Resume = () => {
	return (
		<section className="resume container section" id="resume">
			<h2 className="section__title">Experience</h2>

			<div className="resume__container grid">
				<div className="timeline grid">{expData.map((exp, index) => exp.category === 'education' && <Card key={index} icon={exp.icon} title={exp.title} year={exp.year} desc={exp.desc} />)}</div>

				<div className="timeline grid">{expData.map((exp, index) => exp.category === 'experience' && <Card key={index} icon={exp.icon} title={exp.title} year={exp.year} desc={exp.desc} />)}</div>
			</div>
		</section>
	);
};

export default Resume;

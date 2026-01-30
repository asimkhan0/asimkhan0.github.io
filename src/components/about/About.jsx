import React from 'react';
import './About.css';
import logo from '../../assets/me.png';
import AboutBox from './AboutBox';

const skillsList = [
	{
		id: 1,
		name: 'Full Stack Development',
		class: 'development',
		number: '95%',
	},
	{ id: 2, name: 'AI & ML Integration', class: 'ai-ml', number: '85%' },
	{ id: 3, name: 'Cloud Services', class: 'cloud', number: '80%' },
];

const About = () => {
	return (
		<section className="about container section" id="about">
			<h2 className="section__title">About Me</h2>

			<div className="about__container grid">
				<div className="about__image__Wrapper">
					<img src={logo} alt="" className="about__img" />
					<a href="/mycv.pdf" download="Resume - Asim Khan" className="btn">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: '15px' }}>
							<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
							<polyline points="7 10 12 15 17 10" />
							<line x1="12" y1="15" x2="12" y2="3" />
						</svg>
						Download CV
					</a>
				</div>

				<div className="about__data grid">
					<div className="about__info">
						<p className="about__description">I'm Muhammad Asim Khan, a Senior Software Engineer with 9+ years of experience in full stack development using JavaScript, TypeScript, React.js, Vue.js, Svelte, Node.js, and Cloud services. I specialize in building scalable web applications and leading teams to deliver exceptional results.</p>

						<p className="about__description">I've led teams of up to 6 developers, enhancing user engagement by 30% and efficiency by 25%. I excel in delivering AI-powered features using LLMs, RAG pipelines, and process automation. I'm intensely driven and adaptive, integrating emerging tech solutions in various projects.</p>

						<div className="about__expertise">
							<h4 className="about__expertise-title">Expertise Areas</h4>
							<div className="about__expertise-list">
								<span className="expertise-badge">Full Stack Development</span>
								<span className="expertise-badge">React.js & Vue.js</span>
								<span className="expertise-badge">Node.js & Nest.js</span>
								<span className="expertise-badge">AI & Machine Learning</span>
								<span className="expertise-badge">Cloud Services (AWS/GCP)</span>
								<span className="expertise-badge">Team Leadership</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<AboutBox />
		</section>
	);
};

export default About;

import React from 'react';
import './Services.css';
import Image1 from '../../assets/team-leadership.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/ai-llm.svg';
import { useTheme } from '../../context/theme';

const Services = () => {
	const { isDarkMode } = useTheme();
	const data = [
		{
			id: 1,
			image: Image2,
			title: 'Web Development',
			description: "I build systems that are meant to last and scale. My industry experience taught me how to handle the heavy lifting—like architecting software, using patterns, best practices, and microservices, managing cloud infrastructure, and making sure APIs are rock-solid. I am all about writing clean, reliable code that solves real problems without overcomplicating things.",
		},
		{
			id: 2,
			image: Image3,
			title: 'AI & LLM Integration',
			description: "I specialize in integrating AI-powered features using Large Language Models (LLMs), RAG pipelines, and process automation. From building intelligent chatbots to implementing semantic search and document analysis, I help businesses leverage cutting-edge AI to enhance user experiences and automate complex workflows.",
		},
		{
			id: 3,
			image: Image1,
			title: 'Team Leadership & Consulting',
			description: "I have led teams of up to 6 developers, managing $500K+ projects and delivering results that exceeded client expectations. My leadership approach focuses on enhancing team efficiency by 25%, fostering collaboration, and ensuring timely delivery. I excel in fast-paced environments through strategic thinking, technical expertise, and a commitment to continuous improvement.",
		},
	];

	return (
		<section className="services container section" id="services">
			<h2 className="section__title">Services</h2>
			<div className="services__container grid">
				{data.map((service) => (
					<div className="services__card" key={service.id}>
						<img src={service.image} alt="" className="services__img" />
						<h3 className="services__title">{service.title}</h3>
						<p className="services__description">{service.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;

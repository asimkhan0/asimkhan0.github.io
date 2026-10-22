import { useState } from 'react';
import './Portfolio.css';
import nomyshImage from '../../assets/nomysh_dashboard.png';
import forgingBlockImage from '../../assets/forgingblock_wallet.png';
import replicarImage from '../../assets/replicar_simulation.png';
import itboostImage from '../../assets/itboost_dashboard.png';
import qubitxImage from '../../assets/qubitx_chat.png';

const categories = {
	WEB: 'WEB',
	DESKTOP: 'DESKTOP',
	MOBILE: 'MOBILE',
};

const customProjects = [
	{
		title: 'Yalla',
		category: 'Wholesale · Saudi Arabia',
		status: 'Developed · Not yet launched',
		description: 'Developed a wholesale platform for the Saudi market, designed to bring business buyers and suppliers together through a digital wholesale experience. The product is built and awaiting launch; explore the design preview on Figma.',
		link: 'https://www.figma.com/design/lPBoLMuiZzG3jVUCsyc4jj/yalla-app--Copy-?node-id=605-10499&t=ow9Vq6AJUh2uXRsY-0',
		linkLabel: 'View Figma design',
	},
	{
		title: 'Jingle Pay',
		category: 'Fintech · UAE',
		description: 'Contributed to the core frontend codebase of Jingle Pay, a digital finance platform offering international money transfers, a digital wallet, and everyday payments. The product brings remittance comparisons and money management into one experience.',
		link: 'https://jinglepay.com/are/en/',
		linkLabel: 'Visit Jingle Pay',
	},
	{
		title: 'Hala Cashier',
		category: 'Point of sale · Saudi Arabia',
		description: 'A cashier and business management system serving merchants across Saudi Arabia. Hala Cashier brings day-to-day operations together, with tools for orders, inventory, integrated payments, and sales reporting.',
		link: 'https://hala.com/en/products/restaurant-pos',
		linkLabel: 'Explore Hala Cashier',
	},
	{
		title: 'Rihal',
		category: 'Data visualization · Oman',
		description: 'Built dashboards and 3D charts for Rihal, an Omani technology company specializing in data, AI, and automation. My work focused on presenting complex information visually so users could explore data and understand it more easily.',
		link: 'https://www.rihal.om/',
		linkLabel: 'Visit Rihal',
	},
	{
		title: 'AI Restaurant Reservations',
		category: 'Conversational AI · WhatsApp',
		description: 'Built an AI-powered restaurant reservation experience through WhatsApp. The project brings table booking into a familiar chat interface, using conversational AI to help guests make reservation requests.',
		link: '#contact',
		linkLabel: 'Discuss this project',
	},
	{
		title: 'remind.me',
		category: 'Energy services · Germany',
		description: 'Supporting frontend development and automations for remind.me, a German service that helps customers compare electricity and gas tariffs and switch providers. Its ongoing switching service helps customers keep their energy contracts up to date.',
		link: 'https://www.remind.me/',
		linkLabel: 'Visit remind.me',
	},
];

const menuItem = [
	{
		id: 1,
		image: nomyshImage,
		title: 'Nomysh - Video Commerce Platform',
		category: categories.WEB,
		link: 'https://nomysh.com',
	},
	{
		id: 2,
		image: qubitxImage,
		title: 'QubitX - AI RAG System',
		category: categories.WEB,
		link: 'https://ask-qubitx.vercel.app/',
	},
	{
		id: 3,
		image: forgingBlockImage,
		title: 'ForgingBlock - Crypto Wallet',
		category: categories.WEB,
		link: 'https://forgingblock.io',
	},
	{
		id: 4,
		image: replicarImage,
		title: 'ReplicaR - Autonomous Driving Sim',
		category: categories.DESKTOP, // Assuming simulation runs on desktop/web
		link: 'https://github.com/asimkhan034', // Placeholder or GitHub
	},
	{
		id: 5,
		image: itboostImage,
		title: 'ITBoost - IT Documentation',
		category: categories.WEB,
		link: 'https://itboost.com',
	},
];

const Portfolio = () => {
	const [items, setItems] = useState(menuItem);

	const filterItems = (categoryItem) => {
		const UpdatedItems = menuItem.filter((curElm) => {
			return curElm.category === categoryItem;
		});

		setItems(UpdatedItems);
	};

	return (
		<section className="work container section" id="portfolio">
			<h2 className="section__title">Selected projects</h2>
			<p className="projects__intro">Custom products and client collaborations across commerce, fintech, data visualization, and automation.</p>
			<div className="projects__grid grid">
				{customProjects.map((project) => (
					<article className="project__card" key={project.title}>
						<p className="project__category">{project.category}</p>
						<h3>{project.title}</h3>
						{project.status && <p className="project__status">{project.status}</p>}
						<p className="project__description">{project.description}</p>
						<a className="project__link" href={project.link}>{project.linkLabel} <span aria-hidden="true">↗</span></a>
					</article>
				))}
			</div>
			<h3 className="projects__more">More work</h3>
			<div className="work__filters">
				<span className="work__item" onClick={() => setItems(menuItem)}>
					Everything
				</span>
				<span className="work__item" onClick={() => filterItems(categories.WEB)}>
					Web Apps
				</span>
				<span className="work__item" onClick={() => filterItems(categories.DESKTOP)}>
					Desktop Apps
				</span>
				<span className="work__item" onClick={() => filterItems(categories.MOBILE)}>
					Mobile Apps
				</span>
			</div>

			<div className="work__container grid">
				{items.map((item) => {
					const { id, image, title, category } = item;

					return (
						<div className="work__card fadeInUp" key={id}>
							<div className="work__thumbnail">
								<img src={image} alt={title} className="work__img" />
								<div className="work__mask"></div>
							</div>
							<span className="work__category">{category}</span>
							<h3 className="work__title">{title}</h3>
							<a href={item.link} className="work__button" target="_blank" rel="noreferrer">
								<i className="icon-link work__button-icon"></i>
							</a>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;

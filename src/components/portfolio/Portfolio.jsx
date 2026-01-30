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
			<h2 className="section__title">Recent works</h2>
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

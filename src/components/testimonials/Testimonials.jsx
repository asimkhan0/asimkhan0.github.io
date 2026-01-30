import React from 'react';
import './Testimonials.css';
import Image1 from '../../assets/avatar-1.svg';
import Image2 from '../../assets/avatar-2.svg';
import Image3 from '../../assets/avatar-3.svg';

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const reviewData = [
	{
		id: 1,
		image: Image1,
		title: 'Yishi Yang',
		subtitle: 'Product Designer | UX Expert',
		comment:
			'Asim and I have worked on several projects together. He is a very dependable and hard working professional developer. He is not only knowledgeable about the front end development in general, but also has a very good sense on understanding and meet the customers expectation. When working in a team, he never hesitates about sharing his knowledge and help others.',
	},
	{
		id: 2,
		image: Image2,
		title: 'Beshoy Khalifa',
		subtitle: 'Technical Lead at AAI GmbH',
		comment:
			'Asim is hardworker, very passionate with problem solving. He is always eager to learn new technologies and programming skills that can makes the work he does great. He is strong developer and I am happy that we worked together.',
	},
	{
		id: 3,
		image: Image3,
		title: 'Waleed Ali',
		subtitle: 'Engineering Manager at Teamo',
		comment:
		'I know Asim as a great problem solver with a strong grasp on the technical side. Finds him always passionate to learn new things and improve himself even more.',
	},
	{
		id: 4,
		image: Image1,
		title: 'Qamar Aftab, CFA',
		subtitle: 'Investment Director at Wa’ed Ventures',
		comment:
			'Asim is a self-driven, dedicated, hardworking and thorough professional with exceptional educational and professional background. He surely is a great asset for all the employers out there. Highly recommend!',
	},
	{
		id: 5,
		image: Image2,
		title: 'Wasif Shehzad',
		subtitle: 'SaaS Architect & Startup Consultant',
		comment:
			'Asim has excellent research skills, is an articulate communicator, thinks logically, develops creative solutions to complex problems and works well on a team. He is detail-oriented and passionate about coding. His programs are always top quality.',
	},
];

const Testimonials = () => {
	return (
		<section className="testionials container section" id="testimonials">
			<h2 className="section__title">Recommendations</h2>


			<Swiper
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}
				className="testimonials__container grid"
			>
				{reviewData.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="avatar" />
							</div>
							<h3 className="testimonials__title">{title}</h3>
							<span className="subtitle"> {subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;

import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import './Contact.css';
import * as Sentry from '@sentry/react';
import { collectClientInfo } from '../../util/tracker';

const NotificationType = {
	SUCCESS: 'SUCCESS',
	ERROR: 'ERROR',
};

const Contact = () => {
	const [isSending, setIsSending] = useState(false);
	const form = useRef(null);

	const notify = (type) => {
		if (type === NotificationType.SUCCESS) {
			toast.success('Email was sent Successfully!', {
				position: 'top-center',
			});
		} else if (type === NotificationType.ERROR) {
			toast.error('Email is not sent!', {
				position: 'top-center',
			});
		}
	};

	const handleClick = async () => {
		const data = await collectClientInfo();

		Sentry.captureMessage('Send Email button clicked', {
			level: 'info',
			tags: {
				action: 'submit_button',
				page: 'Contact',
			},
			extra: {
				timestamp: new Date().toISOString(),
				clientInfo: data,
			},
		});
	};

	const sendEmail = async (e) => {
		e.preventDefault();
		setIsSending(true);

		try {
			await emailjs.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			);

			notify(NotificationType.SUCCESS);
			form.current.reset();
		} catch (error) {
			console.error('FAILED...', error);
			notify(NotificationType.ERROR);
		} finally {
			setIsSending(false);
		}
	};

	return (
		<section className="contact container section" id="contact">
			<h2 className="section__title">Get In Touch</h2>

			<div className="contact__container grid">
				<div className="contact__info">
					<h3 className="contact__title">Let's Talk about everything</h3>
					<p className="contact__details">Don't like forms? Send me an email at khanasim034@gmail.com</p>
				</div>

				<form ref={form} onSubmit={sendEmail} className="contact__form">
					<div className="contact__form-group">
						<div className="contact__form-div">
							<input type="text" name="user_name" className={`contact__form-input ${isSending ? 'disable_contact__form-input' : ''}`} placeholder="Your Name" disabled={isSending} required />
						</div>

						<div className="contact__form-div">
							<input type="email" name="user_email" className={`contact__form-input ${isSending ? 'disable_contact__form-input' : ''}`} placeholder="Your Email" disabled={isSending} required />
						</div>
					</div>

					<div className="contact__form-div">
						<input type="text" name="subject" className={`contact__form-input ${isSending ? 'disable_contact__form-input' : ''}`} placeholder="Subject" disabled={isSending} required />
					</div>

					<div className="contact__form-div contact__form-area">
						<textarea name="message" rows="6" className={`contact__form-input ${isSending ? 'disable_contact__form-input' : ''}`} placeholder="Write your message" disabled={isSending} required />
					</div>

					<button type="submit" className={`btn ${isSending ? 'disabled-btn' : ''}`} disabled={isSending} onClick={() => handleClick()}>
						{isSending ? 'Sending...' : 'Send Message'}
					</button>
				</form>
			</div>

			<ToastContainer autoClose={3000} theme="colored" />
		</section>
	);
};

export default Contact;

import { useEffect, useState } from "react";

const ContactForm = () => {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);

	const inputFirstName = (e) => {
		setValues((values) => ({ ...values, firstName: e.target.value }));
	};

	const inputLastName = (e) => {
		setValues((values) => ({ ...values, lastName: e.target.value }));
	};

	const inputEmail = (e) => {
		setValues((values) => ({ ...values, email: e.target.value }));
	};

	const inputMessage = (e) => {
		setValues((values) => ({ ...values, message: e.target.value }));
	};

	const submitMessage = (e) => {
    e.preventDefault();
		// set submitted status to true
		setIsSubmitted(!isSubmitted);
		//post message trueannis@gmail.com
	};

  /* reset form after 5 secs, same as using "componentDidUpdate" 
    https://stackoverflow.com/questions/50409039/make-a-message-disappear-after-sometime-in-react
  */
  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        setValues({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        })
        setIsSubmitted(false);
      }, 5000)
    }
  })


	return (
		<div>
			<form className="form-container" onSubmit={submitMessage}>
				{isSubmitted ? <div className="success-message">Your message is submitted!</div> : "" } 
        <input
					className="form-field"
					id="first-name"
					type="text"
					placeholder="First Name"
					name="firstName"
					value={values.firstName}
					onChange={inputFirstName}
				/>
				<span className="firstName-error-message">
					Please enter your first name
				</span>

				<br />
				<input
					className="form-field"
					id="last-name"
					type="text"
					placeholder="Last Name"
					name="lastName"
					value={values.lastName}
					onChange={inputLastName}
				/>
				<span className="lastName-error-message">
					Please enter your last name
				</span>

				<br />
				<input
					className="form-field"
					id="email"
					type="text"
					placeholder="Your Email"
					name="email"
					value={values.email}
					onChange={inputEmail}
				/>
				<span className="email-error-message">Please enter your email</span>

				<br />
				<textarea
					className="form-field"
					id="message"
					type="text"
					placeholder="Your Message"
					name="message"
					value={values.message}
					onChange={inputMessage}
				/>
				<span className="noMessage-error-message">
					Please enter your message
				</span>

				<br />
				<button className="form-field" type="submit" >
					Submit
				</button>
			</form>
		</div>
	);
};

export default ContactForm;

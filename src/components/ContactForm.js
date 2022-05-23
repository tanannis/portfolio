import { useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_z937rev";
const TEMPLATE_ID = "template_8yed0s4";
const USER_ID = "fC7VXxXT0ldNW2TYj";

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const ContactForm = () => {
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
	const [values, setValues] = useState({
		name: "",
		email: "",
		message: "",
	});

	const inputName = (e) => {
		setValues((values) => ({ ...values, name: e.target.value }));
		validateValues();
	};

	const inputEmail = (e) => {
		setValues((values) => ({ ...values, email: e.target.value }));
		validateValues();
	};

	const inputMessage = (e) => {
		setValues((values) => ({ ...values, message: e.target.value }));
		validateValues();
	};

  const validateValues = () => {
    if (values.email && !values.email.match(emailRegex)) return false;

    if (values.name && values.email && values.message) {
      setIsReadyToSubmit(true);
      return true;
    }
    return false;
  };

	const handleSubmitMessage = (e) => {
		e.preventDefault();
		emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
			(result) => {
				console.log(result.text);
				alert("email sent successfully");

				//clears the form after sending the email
				setValues({
					name: "",
					email: "",
					message: "",
				});
				setIsReadyToSubmit(false);
			},
			(error) => {
				alert("error sending email");
			}
		);
	};

	return (
		<div>
      Contact Me
			<form className="form-container" onSubmit={handleSubmitMessage}>
				<input
					className="form-field"
					id="name"
					type="text"
					placeholder="Name..."
					name="userName"
					value={values.name}
					onChange={inputName}
				/>
				<br />
				<input
					className="form-field"
					id="email"
					type="text"
					placeholder="Email..."
					name="userEmail"
					value={values.email}
					onChange={inputEmail}
				/>
				<br />
				<textarea
					className="form-field"
					id="message"
					type="text"
					placeholder="Message..."
					name="userMessage"
					value={values.message}
					onChange={inputMessage}
				/>
				<br />
				<button
					className="form-field"
					type="submit"
					disabled={!isReadyToSubmit}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ContactForm;

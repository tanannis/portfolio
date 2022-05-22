import "../styles/Footer.scss";

const Footer = () => {
	return (
		<div className="footer">
			<a
				href="https://www.linkedin.com/in/tanannis/"
				className="icon"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fa fa-linkedin" />
			</a>
			<a
				href="https://github.com/tanannis"
				className="icon"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fa fa-github" />
			</a>
			<a
				href="mailto:tanannis@gmail.com"
				className="icon"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fa fa-envelope" />
			</a>
		</div>
	);
};

export default Footer;

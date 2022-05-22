import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

const Menu = () => {
	const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

	const toggleIsMenuOpen = () => {
		return setIsMenuOpen(!isMenuOpen);
	};

	const toggleIsMenuClose = () => {
		setTimeout(() => {
			setIsMenuOpen(!isMenuOpen);
		}, 1000);
	};

	return (
		<div
			className="nav-link"
			onMouseOver={toggleIsMenuOpen}
			onMouseOut={toggleIsMenuClose}
		>
			Portfolio
		</div>
	);
};

export default Menu;

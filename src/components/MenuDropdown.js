import { Link } from "react-router-dom";

import "../styles/MenuDropdown.scss"

const MenuDropdown = () => {
  return (
    <div className="menu-dropdown-container">
      <Link className="menu-items" to="/software-development"> Software Development </Link>
      <Link className="menu-items" to="/apparel-design"> Apparel Design </Link>
    </div>
  )
}

export default MenuDropdown;

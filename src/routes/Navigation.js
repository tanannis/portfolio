import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as ALogo } from "../assets/annis-logo.svg";
import Menu from "../components/Menu";
import MenuDropdown from "../components/MenuDropdown";
import { MenuContext } from "../context/MenuContext";

import "../styles/Navigation.scss"

const Navigation = () => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          {/* When user clicks Logo, it links to the home page. */}
          <ALogo className="logo"/>
        </Link>
        
        <div className="nav-links-container">        
          <Link className="nav-link" to="/about">
            About
          </Link>

          <Link className="nav-link" to="/contact">
            Contact
          </Link>

          <Menu/>
        </div>
        {isMenuOpen && <MenuDropdown/>}

      </div>

      <Outlet />
    </>
  )
}

export default Navigation;
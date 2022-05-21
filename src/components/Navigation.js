import { Link } from "react-router-dom";

import { ReactComponent as ALogo } from "../assets/annis-logo.svg";
import "../styles/Navigation.scss"


const Navigation = () => {

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          {/* When user clicks Logo, it links to the home page. */}
          <ALogo className="logo"/>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/portfolio">
            Portfolio
          </Link>
            
          <Link className="nav-link" to="/about">
            About
          </Link>

          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navigation;
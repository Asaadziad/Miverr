import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <>
      <nav>
        <div className="container-fluid navContainer">
          <div className="nav">
            <Link to="/" className="nav-brand">
              AZ-Tech
            </Link>
            <ul className="nav-links">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Shop">Shop</Link>
              </li>
            </ul>
          </div>
          <div className="nav-profile">Profile goes here</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

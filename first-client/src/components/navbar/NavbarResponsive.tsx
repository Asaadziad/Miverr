import { FunctionComponent, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

interface NavbarResponsiveProps {
  isLogged: boolean;
}

const NavbarResponsive: FunctionComponent<NavbarResponsiveProps> = ({
  isLogged,
}) => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const openBurger = () => {
    setBurgerOpen(true);
  };
  const closeNav = () => {
    setBurgerOpen(false);
  };
  return (
    <>
      <nav className="navbar navContainerRes w-100 pt-1 pb-1 m-0">
        <div className="nav-main brand">
          <Link to="/" className="font-s">
            Miverr.
          </Link>
        </div>
        <div className="nav-main search w-100">
          <input className="form-control" placeholder="Find service"></input>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => openBurger()}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div className={burgerOpen ? "burgerOpen show" : "burgerOpen"}>
        <span className="closebtn" onClick={() => closeNav()}>
          &times;
        </span>
        <div className="burger navLinks">
          {isLogged ? (
            <p>Logged in</p>
          ) : (
            <>
              <div className="burger navLinks main">
                <NavLink to="/" className="register-btn res">
                  Join now
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                </ul>
              </div>
              <div className="burger navLinks general">
                <ul>
                  <li>General</li>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavbarResponsive;

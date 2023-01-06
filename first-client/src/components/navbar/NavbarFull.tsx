import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface NavbarFullProps {
  isLogged: boolean;
}

const NavbarFull: FunctionComponent<NavbarFullProps> = ({ isLogged }) => {
  return (
    <nav className="navContainerFull">
      <div className="nav-main">
        <div className="nav-main brand w-25 ms-5">
          <NavLink to="/">Miverr.</NavLink>
        </div>
        <div className="nav-main search">
          <input
            className="form-control w-100 m-3"
            placeholder="What service are you looking for?"
          ></input>
        </div>
        <div className="nav-main profile">
          <NavLink to="/signin">Explore</NavLink>
          <NavLink to="/signin">Become a Seller</NavLink>
          {!isLogged ? (
            <>
              <NavLink to="/signin">Sign in</NavLink>
              <NavLink to="/signup" className="register-btn">
                Join
              </NavLink>
            </>
          ) : (
            <span className="profileArea">
              <i className="fa fa-user-circle fa-xl mt-1"></i>
              <NavLink to="/profile">
                <i className="fa fa-sort-down mb-2 ms-2"></i>
              </NavLink>
            </span>
          )}
        </div>
      </div>
      <div className="nav-categories">
        <div className="container h-100">
          <ul className="categories m-0 p-0">
            <li className="category">Graphic & Design</li>
            <li className="category">Digital Marketing</li>
            <li className="category">Writing & Transition</li>
            <li className="category">Video & Animation</li>
            <li className="category">Music & Audio</li>
            <li className="category">
              <NavLink to="/programming">Programming & Tech</NavLink>
            </li>
            <li className="category">Business</li>
            <li className="category">Lifestyle</li>
            <li className="category">Trending</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarFull;

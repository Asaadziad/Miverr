import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface NavbarFullProps {}

const NavbarFull: FunctionComponent<NavbarFullProps> = () => {
  return (
    <nav className="navContainerFull">
      <div className="nav-main">
        <div className="nav-main brand w-25 ms-5">test</div>
        <div className="nav-main search">
          <input
            className="form-control w-100 m-3"
            placeholder="What service are you looking for?"
          ></input>
        </div>
        <div className="nav-main profile">testing2</div>
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
              <Link to="/programming">Programming & Tech</Link>
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

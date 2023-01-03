import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <>
      <footer>
        <div className="companyCopyRights">
          Miverr.
          <span className="copyRights">&#169; Asaadziad</span>
        </div>
        <div className="companySocials">
          <Link to="/">
            <i className="fab fa-instagram fa-lg"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-linkedin fa-lg"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-github fa-lg"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-twitter fa-lg"></i>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;

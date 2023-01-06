import { FunctionComponent, useEffect, useState } from "react";
import "./navbar.css";
import NavbarFull from "./NavbarFull";
import NavbarResponsive from "./NavbarResponsive";
interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const [responsive, setResponsive] = useState(false);
  useEffect(() => {
    function handleResize() {
      setResponsive(window.innerWidth > 768 ? false : true);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {responsive ? (
        <NavbarResponsive isLogged={true} />
      ) : (
        <NavbarFull isLogged={true} />
      )}
    </>
  );
};

export default Navbar;

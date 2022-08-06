import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src="../src/assets/logo.svg" alt="" />
      </NavLink>

      <Navbar />
    </header>
  );
};

export default Header;

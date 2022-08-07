import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { Fade } from "react-reveal";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <Fade top>
          <img src={Logo} alt="logo" className="logo" />
        </Fade>
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 40%;
  }
`;

export default Header;

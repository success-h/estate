/** @format */

import styled from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../data/menu-data";
import { NavLink } from "./global-style";
import { Button } from "./Button";
import Bars from "../images/bars.png";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  align-items: center;
  position: fixed;
  width: 100%;
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  width: 50%;
`;

const Logo = styled(Link)`
  font-style: italic;
  ${NavLink}
  font-size: larger;
`;

const MenuBars = styled.p`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 30px;
    width: 30px;
    right: 0;
    top: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-50%, 45%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/">S=>UCCESS</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((data, index) => (
          <NavMenuLinks to={data.link} key={index}>
            {data.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact US
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;

/** @format */

import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { menuData } from "../data/menu-data";
import { Button } from "../components/Button";

const SideBarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 50%;
  height: 100%;
  background-color: rgb(115, 117, 122);
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`;
const SideBarWrapper = styled.div``;

const SideBarMenu = styled.div`
  margin-top: 11em;
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 400px) {
    grid-template-rows: repeat(4, 80px);
  }
`;
const SideBarLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  padding: 1.4rem;
  cursor: pointer;
  color: #fff;
  transition: 0.2s ease-ease-in;

  &:hover {
    color: #000d1a;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          {menuData.map((item, index) => (
            <SideBarLink to={item.link} key={index}>
              {item.title}
            </SideBarLink>
          ))}
        </SideBarMenu>
        <BtnWrap>
          <Button primary="true" round="true" big="true" to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;

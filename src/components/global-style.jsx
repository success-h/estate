/** @format */

import { createGlobalStyle, css } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  }

  html, body {
    overflow-x: hidden;
  }
`;

export const NavLink = css`
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  font-weight: 700;
  font-family: "Operator Mono Lig";

  &:hover {
    transform: translateY(-2px);
  }
`;

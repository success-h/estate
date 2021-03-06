/** @format */

import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#000d1a" : "black")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 70px;
  max-width: 150px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  color: ${({ primary }) => (primary ? "#ffffff" : "#000d1a")};
  border-radius: 7px;

  &:hover {
    transform: translateY(-2px);
  }
`;

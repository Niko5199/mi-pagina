import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";

export const Layout = ({ children }) => {
  const [theme] = useContext(ThemeContext);
  return <StyledLayout theme={theme}>{children}</StyledLayout>;
};

const StyledLayout = styled.div`
  background-color: ${(props) => props?.theme?.colors?.background || "#14213d"};
  color: ${(props) => props?.theme?.colors?.text || "#fff"};
  transition: all 0.3s ease-in;
`;

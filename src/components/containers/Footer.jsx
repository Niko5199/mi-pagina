import React, { useContext } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../collections/Buttons";
import { darkTheme, lightTheme, ThemeContext } from "../contexts/ThemeContext";

const Footer = () => {
  const [theme, toogleTheme] = useContext(ThemeContext);

  return (
    <StyledFooter>
      <p>Gracias por visitar mi página</p>
      <PrimaryButton theme={theme} onClick={toogleTheme}>
        Cambiar Tema
      </PrimaryButton>
    </StyledFooter>
  );
};

export default Footer;

//  * Styled - Components
const StyledFooter = styled.footer`
  text-align: center;
  padding-top: 60px;
  padding-bottom: 60px;
  button {
    display: inline-block;
  }
`;

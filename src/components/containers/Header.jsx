import React, { useContext } from "react";
import styled from "styled-components";
import { LinkPrimaryButton, LinkSecondaryButton } from "../collections/Buttons";
import { titleStyles } from "../collections/StyledGlobal";
import { ThemeContext } from "../contexts/ThemeContext";
import { UserContext } from "../contexts/UserContext";
import StyledCircleImage from "../elements/CircleImage";
import StyledDiv from "../elements/Container";
import StyledRow from "../elements/Row";
import StyledSpan from "../elements/StyledSpan";

export const Header = () => {
  const [user] = useContext(UserContext);
  const [theme] = useContext(ThemeContext);

  console.log(theme);
  return (
    <StyledDiv>
      <StyledHeader>
        <InfoContainer>
          <StyledH1Title>
            Bienvenid@, soy <StyledSpan>Josue A. Rojas</StyledSpan>
            desarrollador web
          </StyledH1Title>
          <StyledRow>
            <LinkPrimaryButton theme={theme}>Mis proyectos</LinkPrimaryButton>
            <LinkPrimaryButton theme={theme}>Descargar mi CV</LinkPrimaryButton>
          </StyledRow>
          <LinkSecondaryButton>
            O lee mis articulos ({user.articlesFromDevTo.length})
          </LinkSecondaryButton>
        </InfoContainer>
        <StyledCircleImage src="/avatar.jpg" alt="Foto josue" width="370" />
      </StyledHeader>
    </StyledDiv>
  );
};

// * Styled-Component

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px; // 60px
  align-items: center;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledH1Title = styled.h1`
  ${titleStyles}
  text-align: left;
`;

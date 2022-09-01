import React, { useContext } from "react";
import styled from "styled-components";
import Article from "../blocks/Article";
import DevChanger from "../blocks/DevChanger";
import { ThemeContext } from "../contexts/ThemeContext";
import { UserContext } from "../contexts/UserContext";
import StyledDiv from "../elements/Container";
import StyledRow from "../elements/Row";

const Articles = () => {
  const [user] = useContext(UserContext);
  const [theme] = useContext(ThemeContext);
  console.log(user);

  return (
    <StyledContainerArticles theme={theme}>
      <StyledDiv>
        <h2>Estos son mis articulos</h2>
        <DevChanger />
        <StyledRow>
          {user.articlesFromDevTo.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </StyledRow>
      </StyledDiv>
    </StyledContainerArticles>
  );
};

export default Articles;

// * Styles-Component
const StyledContainerArticles = styled.div`
  background-color: ${(props) =>
    props?.theme?.colors?.darkbackground || "#14213d "};
  color: ${(props) => props?.theme?.colors?.lightText ?? "#fff"};
  padding-top: 20px;
  padding-bottom: 60px;
`;

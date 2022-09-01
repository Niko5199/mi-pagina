import React from "react";
import styled from "styled-components";
import { LinkSecondaryButton } from "../collections/Buttons";

const Article = ({ className, article }) => {
  return (
    <div className={className}>
      <img src={article.social_image} alt={article.title} />
      <div>
        <h3>{article.title}</h3>
        <LinkSecondaryButton href={article.url}>Ver Mas</LinkSecondaryButton>
      </div>
    </div>
  );
};

export default styled(Article)`
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  border: 2px solid #e6e6e6;
  border-radius: 10px;
  width: min(300px, 100%);
  background-color: #fff;
  color: black;
  div {
    padding: 1.5rem;
  }
  img {
    width: 100%;
  }
  h3 {
    margin-bottom: 10px;
  }
`;

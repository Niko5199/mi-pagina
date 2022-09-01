import styled, { css } from "styled-components";

const StyledPrimaryButton = css`
  display: block;
  font-weight: bold;
  font-size: 1.2em;
  text-transform: uppercase;
  padding: 1rem 1.2rem;
  border-radius: 12px;
  border-style: none;
  background-color: ${(props) => props?.theme?.colors?.primary || "#04b4ae"};
  color: ${(props) => props?.theme?.colors?.lightText || "black"};
  cursor: pointer;
`;

const StyledSecondaryButton = css`
  display: inline-block;
  text-decoration: underline;
  text-decoration-thickness: 3px;
  background: transparent;
  color: inherit;
  border: 0;
  font-weight: bold;
  font-size: 1.2em;
  text-transform: uppercase;
  cursor: pointer;
`;

const LinkPrimaryButton = styled.a`
  ${StyledPrimaryButton}
`;

const PrimaryButton = styled.button`
  ${StyledPrimaryButton}
`;

const LinkSecondaryButton = styled.a`
  ${StyledSecondaryButton}
`;

const SecondaryButton = styled.button`
  ${StyledSecondaryButton}
`;

export {
  LinkPrimaryButton,
  PrimaryButton,
  LinkSecondaryButton,
  SecondaryButton,
};

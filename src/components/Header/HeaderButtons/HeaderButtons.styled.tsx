import styled from "styled-components";

export const SignInButton = styled.button`
  background: #d3eaff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0.5em 1.4em;
  margin-left: 0.5em;
  font-family: "Syne", monospace;
  border: none;
  font-weight: 600;
  font-size: 1.5em;

  &:hover {
    cursor: pointer;
  }
`;

export const FavoriteButton = styled.button`
  padding: 1.1em;
  padding-bottom: 0.8em;
  background-color: #ececec;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

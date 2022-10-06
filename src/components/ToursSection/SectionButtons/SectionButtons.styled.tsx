import styled from "styled-components";

export const Button = styled.button`
  padding: 0.6em 0.75em;
  border: none;
  margin-right: ${(props) => props.property === "left" && "1em"};

  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  transform: ${(props) =>
    props.property === "left" && "matrix(-1, 0, 0, 1, 0, 0)"};
`;

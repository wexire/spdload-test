import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  padding: 0.8em 5em;
  background-color: rgba(30, 30, 30, 0.48);
  height: 3.4em;
  width: auto;
`;

export const Image = styled.img`
  width: 14.3em;
  &:hover {
    cursor: pointer;
  }
`;

export const FlexItem = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: ${(props) => props.property};
`;

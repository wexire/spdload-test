import styled from "styled-components";

export const Header = styled.header`
  z-index: 20;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  padding: 0.8em 5em;
  background-color: rgba(30, 30, 30, 0.48);
  width: 100%;
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

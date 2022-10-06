import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const linkUnderline = keyframes`
    0% {
        width: 0%
    }
    50% {
        width: 100%
    }
    100% {
        width: 0%
    }
`;

export const Text = styled.div`
  color: white;
  font-family: "Lato", monospace;
  margin-bottom: 0.1em;
`;

export const Item = styled(Link)`
  text-decoration: none;
  margin: 0 1em;
  display: flex;
  flex-direction: column;

  &:hover .line {
    border-color: white;
    animation-name: ${linkUnderline};
  }

  .selected {
    border-color: white;
    width: 100%;
  }
`;

export const Line = styled.div`
  width: 0%;
  height: 0;
  border-top: 2px solid transparent;
  animation-duration: 1s;
`;

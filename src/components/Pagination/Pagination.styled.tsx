import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1em;
`;

export const PageCircle = styled.div`
  width: 1.5em;
  height: 1.5em;
  border: 1px solid ${(props) => props.property};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilledCircle = styled.div`
  width: 0.75em;
  height: 0.75em;
  background-color: ${(props) => props.property};
  border-radius: 50%;
  display: none;

  &.isActive {
    display: block;
  }
`;

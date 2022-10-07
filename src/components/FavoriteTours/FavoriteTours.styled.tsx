import styled from "styled-components";

export const Container = styled.div`
  margin: 4em 5em 6.6em;
`;
export const TopBlock = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 2.5em;
`;

export const ClearText = styled.span`
  font-size: 1.5em;
  font-family: "Lato", monospace;
  font-weight: 300;
  color: #556b84;

  &:hover {
    cursor: pointer;
  }
`;

export const EmptyCard = styled.div`
  border: 1px solid #d3eaff;
  min-height: 36em;
`;

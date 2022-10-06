import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #d3eaff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const CardImg = styled.img`
  height: 18.5em;
  width: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 2em 1.5em;
`;

export const CardText = styled.div`
  width: max-content;
  margin: 0 auto
    ${(props) => (props.property === "isTitle" ? "0.65em" : "2.7em")};
  font-family: ${(props) => (props.property === "isTitle" ? "Syne" : "Lato")},
    monospace;
  font-weight: ${(props) => (props.property === "isTitle" ? 700 : 300)};
  font-size: 1.5em;
`;

export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

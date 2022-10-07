import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #d3eaff;
  display: flex;
  flex-direction: column;
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
  height: -webkit-fill-available;
  justify-content: space-between;
`;

export const CardText = styled.div`
  text-align: center;
  margin-bottom: 1em;
  height: ${(props) => props.property !== "isTitle" && "3em"};
  text-overflow: ${(props) => props.property !== "isTitle" && "ellipsis"};
  font-family: ${(props) => (props.property === "isTitle" ? "Syne" : "Lato")},
    monospace;
  font-weight: ${(props) => (props.property === "isTitle" ? 700 : 300)};
  font-size: 1.5em;
`;

export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

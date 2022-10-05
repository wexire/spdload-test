import styled from "styled-components";

export const MainImg = styled.img`
  width: 100%;
`;

export const MainText = styled.div`
  width: max-content;
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const SubText = styled.div`
  font-size: ${(props) => (props.property === "upper" ? "3em" : "19.5em")};
  font-family: "Syne", monospace;
  font-weight: 800;
  color: white;
`;

export const ScrollText = styled.div`
  -webkit-text-stroke: 1px black;
  width: max-content;
  position: absolute;
  top: 75%;
  left: 0;
  right: 0;
  margin: auto;
  font-family: "Lato", monospace;
  color: white;
  font-size: 2em;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`;

import React from "react";
import { noLineArrow } from "../../../images";
import * as Styled from "./SectionButtons.styled";

type Props = {
  isLeft?: boolean;
  onClick: () => void;
};

const ArrowButton = (props: Props) => {
  return (
    <Styled.Button
      property={props.isLeft ? "left" : undefined}
      onClick={props.onClick}
    >
      <Styled.Image
        src={noLineArrow}
        alt="arrow"
        property={props.isLeft ? "left" : undefined}
      />
    </Styled.Button>
  );
};

export default ArrowButton;

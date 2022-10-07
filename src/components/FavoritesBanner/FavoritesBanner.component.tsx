import React from "react";
import { image2 } from "../../images";
import * as Styled from "./FavoritesBanner.styled";

const FavoritesBanner = () => {
  return (
    <div>
      <Styled.Image src={image2} />
      <Styled.Text>FAVORITES</Styled.Text>
    </div>
  );
};

export default FavoritesBanner;

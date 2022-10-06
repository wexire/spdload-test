import React from "react";
import * as Styled from "./HomeBanner.styled";
import { arrowDown, image1, image2, image3 } from "../../images";

const HomeBanner = ({ scrollFunc }: IHomeBanner) => {
  const imagesArray = [image1, image2, image3];

  return (
    <div>
      <Styled.MainImg src={imagesArray[0]} alt="banner" />
      <Styled.MainText>
        <Styled.SubText property="upper">
          THE SPACE IS WAITING FOR
        </Styled.SubText>
        <Styled.SubText>YOU</Styled.SubText>
      </Styled.MainText>
      <Styled.ScrollText onClick={scrollFunc}>
        Explore Tours
        <img src={arrowDown} alt="arrowDown" />
      </Styled.ScrollText>
    </div>
  );
};

interface IHomeBanner {
  scrollFunc: () => void;
}

export default HomeBanner;

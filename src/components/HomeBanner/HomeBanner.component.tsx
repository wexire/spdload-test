import React, { useState, useEffect } from "react";
import * as Styled from "./HomeBanner.styled";
import { arrowDown, image1, image2 } from "../../images";
import Pagination from "../Pagination/Pagination.component";

const HomeBanner = ({ scrollFunc }: IHomeBanner) => {
  const imagesArray = [image1, image2];
  // One of the images from Figma is omitted as it weights 20MB and extremely slows the app
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) =>
        prevCount === imagesArray.length - 1 ? 0 : prevCount + 1
      );
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Styled.MainImg src={imagesArray[count]} alt="banner" />
      <Styled.MainText>
        <Styled.SubText property="upper">
          THE SPACE IS WAITING FOR
        </Styled.SubText>
        <Styled.SubText>YOU</Styled.SubText>
      </Styled.MainText>
      <Styled.Pagination>
        <Pagination
          color="white"
          page={count}
          totalPages={imagesArray.length}
        />
      </Styled.Pagination>
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

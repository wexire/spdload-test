import React from "react";
import heart from "../../../images/heart.svg";
import * as Styled from "./HeaderButtons.styled";

const SignInButton = () => {
  return <Styled.SignInButton>SIGN IN</Styled.SignInButton>;
};

const FavoriteButton = () => {
  return (
    <Styled.FavoriteButton>
      <img src={heart} alt="heart" />
    </Styled.FavoriteButton>
  );
};

export { SignInButton, FavoriteButton };

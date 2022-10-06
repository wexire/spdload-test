import React from "react";
import { heart } from "../../../images";
import * as Styled from "./HeaderButtons.styled";

const SignInButton = () => {
  return <Styled.SignInButton>SIGN IN</Styled.SignInButton>;
};

const FavoriteButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Styled.FavoriteButton onClick={onClick}>
      <img src={heart} alt="heart" />
    </Styled.FavoriteButton>
  );
};

export { SignInButton, FavoriteButton };

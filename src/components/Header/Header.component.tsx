import React from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./Header.styled";
import logo from "./../../images/logo.png";
import {
  FavoriteButton,
  SignInButton,
} from "./HeaderButtons/HeaderButtons.component";
import HeaderMenu from "./HeaderMenu/HeaderMenu.component";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();

  return (
    <Styled.Header>
      <Styled.FlexItem property="flex-start" onClick={() => navigate("/home")}>
        <Styled.Image src={logo} alt="logo" />
      </Styled.FlexItem>
      <Styled.FlexItem property="center">
        <HeaderMenu />
      </Styled.FlexItem>
      <Styled.FlexItem property="flex-end">
        <FavoriteButton />
        <SignInButton />
      </Styled.FlexItem>
    </Styled.Header>
  );
};

export default Header;
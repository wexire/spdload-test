import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Styled from "./Header.styled";
import { logo } from "../../images";
import {
  FavoriteButton,
  SignInButton,
} from "./HeaderButtons/HeaderButtons.component";
import HeaderMenu from "./HeaderMenu/HeaderMenu.component";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Styled.Header>
      <Styled.FlexItem property="flex-start" onClick={() => navigate("/home")}>
        <Styled.Image src={logo} alt="logo" />
      </Styled.FlexItem>
      <Styled.FlexItem property="center">
        <HeaderMenu />
      </Styled.FlexItem>
      <Styled.FlexItem property="flex-end">
        <FavoriteButton
          onClick={() => navigate("/favorites")}
          isActive={location.pathname === "/favorites"}
        />
        <SignInButton />
      </Styled.FlexItem>
    </Styled.Header>
  );
};

export default Header;

import React from "react";
import { useLocation } from "react-router-dom";
import * as Styled from "./Header.styled";

const HeaderMenu = () => {
  return (
    <Styled.Container>
      <MenuItem text="HOME" url="/home" />
      <MenuItem text="TOURS" url="/tours" />
      <MenuItem text="ABOUT" url="/about" />
      <MenuItem text="HELP" url="/help" />
    </Styled.Container>
  );
};

const MenuItem = ({ text, url }: MenuItemProps) => {
  const location = useLocation();

  return (
    <Styled.Item to={url}>
      <Styled.Text>{text}</Styled.Text>
      <Styled.Line
        className={`line ${location.pathname === url && "selected"}`}
      />
    </Styled.Item>
  );
};

interface MenuItemProps {
  text: string;
  url: string;
}

export default HeaderMenu;

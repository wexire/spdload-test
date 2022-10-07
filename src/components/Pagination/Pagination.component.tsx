import React from "react";
import * as Styled from "./Pagination.styled";

interface IPagination {
  page: number;
  totalPages: number;
  color: string;
}

const Pagination = ({ page, totalPages, color }: IPagination) => {
  const pagesArr = Array.from(Array(totalPages).keys());

  return (
    <Styled.Container>
      {pagesArr.map((num) => (
        <PageCircle id={num} key={num} color={color} page={page} />
      ))}
    </Styled.Container>
  );
};

interface IPageCircle {
  id: number;
  color: string;
  page: number;
}

const PageCircle = ({ id, color, page }: IPageCircle) => {
  return (
    <Styled.PageCircle property={color}>
      <Styled.FilledCircle
        className={id === page ? "isActive" : undefined}
        property={color}
      />
    </Styled.PageCircle>
  );
};

export default Pagination;

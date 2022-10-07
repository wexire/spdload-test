import React, { LegacyRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { pageState, totalPagesState } from "../../recoil/atom";
import Pagination from "../Pagination/Pagination.component";
import ToursList from "../ToursList/ToursList.component";
import ArrowButton from "./SectionButtons/SectionButtons.component";
import * as Styled from "./ToursSection.styled";

const ToursSection = ({ toursListRef }: IToursSection) => {
  const [page, setPage] = useRecoilState(pageState);
  const totalPages = useRecoilValue(totalPagesState);

  return (
    <div ref={toursListRef}>
      <Styled.Container>
        <Styled.Head>
          <Styled.SectionTitle>POPULAR TOURS</Styled.SectionTitle>
          <div>
            <ArrowButton
              isLeft={true}
              onClick={() => setPage(page === 0 ? totalPages - 1 : page - 1)}
            />
            <ArrowButton
              onClick={() => setPage(page === totalPages - 1 ? 0 : page + 1)}
            />
          </div>
        </Styled.Head>
        <ToursList />
        <Pagination totalPages={totalPages} page={page} color="#1e1e1e" />
      </Styled.Container>
    </div>
  );
};

interface IToursSection {
  toursListRef: LegacyRef<HTMLDivElement> | undefined;
}

export default ToursSection;

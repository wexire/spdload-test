import React, { LegacyRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { TOURS_PER_PAGE } from "../../consts";
import { pageState, totalPagesState } from "../../recoil/atom";
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
              onClick={() =>
                setPage(
                  page === 1 - TOURS_PER_PAGE
                    ? totalPages - TOURS_PER_PAGE
                    : page - 1
                )
              }
            />
            <ArrowButton
              onClick={() => setPage(page === totalPages ? 0 : page + 1)}
            />
          </div>
        </Styled.Head>
        <ToursList />
      </Styled.Container>
    </div>
  );
};

interface IToursSection {
  toursListRef: LegacyRef<HTMLDivElement> | undefined;
}

export default ToursSection;

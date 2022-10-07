import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import * as Styled from "./ToursList.styled";
import TourCard from "./TourCard/TourCard.component";
import { pageState, totalPagesState, toursState } from "../../recoil/atom";
import { ITour } from "../../types/types";
import { TOURS_PER_PAGE } from "../../consts";

const ToursList = () => {
  const [totalPages, setTotalPages] = useRecoilState(totalPagesState);
  const tours = useRecoilValue(toursState);
  const page = useRecoilValue(pageState);
  const [currentTours, setCurrentTours] = useState<ITour[]>([]);

  const calculateTours = () => {
    setCurrentTours(
      page <= -1
        ? tours
            .slice(totalPages + page, totalPages)
            .concat(tours.slice(0, page + TOURS_PER_PAGE))
        : page >= totalPages - TOURS_PER_PAGE
        ? tours
            .slice(page, totalPages)
            .concat(tours.slice(0, page - totalPages + TOURS_PER_PAGE))
        : tours.slice(page, page + TOURS_PER_PAGE)
    );
  };

  useEffect(() => {
    setTotalPages(tours.length);
    setCurrentTours(tours.slice(page, page + TOURS_PER_PAGE));
  }, [tours]);

  useEffect(() => {
    calculateTours();
  }, [page]);

  return (
    <Styled.Container>
      {totalPages &&
        currentTours.map((tour) => <TourCard tour={tour} key={tour.id} />)}
    </Styled.Container>
  );
};

export default ToursList;

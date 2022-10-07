import React from "react";
import { useRecoilState } from "recoil";
import { favoriteToursState } from "../../recoil/atom";
import TourCard from "../ToursList/TourCard/TourCard.component";
import { Container as ToursListContainer } from "../ToursList/ToursList.styled";
import * as Styled from "./FavoriteTours.styled";

const FavoriteTours = () => {
  const [favoriteTours, setFavoriteTours] = useRecoilState(favoriteToursState);
  const emptySpaces = 3;
  const emptyTourCards = emptySpaces - favoriteTours.length;

  return (
    <Styled.Container>
      <Styled.TopBlock>
        <Styled.ClearText onClick={() => setFavoriteTours([])}>
          Clear all
        </Styled.ClearText>
      </Styled.TopBlock>
      <ToursListContainer>
        {favoriteTours.map((tour) => (
          <TourCard tour={tour} key={tour.id} />
        ))}
        {emptyTourCards > 0 && Array(emptyTourCards).fill(<Styled.EmptyCard />)}
      </ToursListContainer>
    </Styled.Container>
  );
};

export default FavoriteTours;

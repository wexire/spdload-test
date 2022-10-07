import React from "react";
import { useRecoilState } from "recoil";
import { favoriteToursState } from "../../../recoil/atom";
import { ITour } from "../../../types/types";
import { FavoriteButton } from "../../Header/HeaderButtons/HeaderButtons.component";
import * as Styled from "./TourCard.styled";
import { BuyButton } from "./TourCardButtons/TourCardButtons.component";

const TourCard = ({ tour }: { tour: ITour }) => {
  const [favoriteTours, setFavoriteTours] = useRecoilState(favoriteToursState);
  const isFavorite = favoriteTours.find(
    (favoriteTour) => tour.id === favoriteTour.id
  );

  const addToFavorites = (tour: ITour) => {
    isFavorite
      ? setFavoriteTours(
          favoriteTours.filter((favoriteTour) => tour.id !== favoriteTour.id)
        )
      : setFavoriteTours([...favoriteTours, tour]);
  };

  return (
    <Styled.Card>
      <Styled.CardImg src={tour.flight.links.flickr_images[0]} alt="flight" />
      <Styled.CardContent>
        <div>
          <Styled.CardText property="isTitle">
            {tour.title.toUpperCase()}
          </Styled.CardText>
          <Styled.CardText>{tour.flight.mission_name}</Styled.CardText>
        </div>
        <Styled.ButtonsBlock>
          <BuyButton />
          <FavoriteButton
            onClick={() => addToFavorites(tour)}
            isActive={Boolean(isFavorite)}
          />
        </Styled.ButtonsBlock>
      </Styled.CardContent>
    </Styled.Card>
  );
};

export default TourCard;

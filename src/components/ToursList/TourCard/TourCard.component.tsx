import React from "react";
import { ITour } from "../../../types/types";
import { FavoriteButton } from "../../Header/HeaderButtons/HeaderButtons.component";
import * as Styled from "./TourCard.styled";
import { BuyButton } from "./TourCardButtons/TourCardButtons.component";

const TourCard = ({ tour }: { tour: ITour }) => {
  return (
    <Styled.Card>
      <Styled.CardImg src={tour.flight.links.flickr_images[0]} alt="flight" />
      <Styled.CardContent>
        <Styled.CardText property="isTitle">
          {tour.title.toUpperCase()}
        </Styled.CardText>
        <Styled.CardText>{tour.flight.mission_name}</Styled.CardText>
        <Styled.ButtonsBlock>
          <BuyButton />
          <FavoriteButton onClick={() => {}} />
        </Styled.ButtonsBlock>
      </Styled.CardContent>
    </Styled.Card>
  );
};

export default TourCard;

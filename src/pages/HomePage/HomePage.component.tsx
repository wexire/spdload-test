import React, { LegacyRef, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useQuery } from "@apollo/client";
import HomeBanner from "../../components/HomeBanner/HomeBanner.component";
import ToursSection from "../../components/ToursSection/ToursSection.component";
import { TOURS_QUERY } from "../../graphql/queries";
import { toursState } from "../../recoil/atom";
import { IToursRequest } from "../../types/types";

const HomePage = () => {
  const [tours, setTours] = useRecoilState(toursState);

  const { data, loading } = useQuery<IToursRequest>(TOURS_QUERY);

  const toursListRef = useRef<HTMLDivElement | undefined>();
  const scrollToList = () => {
    toursListRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!loading) {
      const toursWithImage = data!.histories.filter(
        (tour) => tour.flight && tour.flight.links.flickr_images.length
      );
      setTours(toursWithImage);
    }
  }, [loading]);

  return (
    <div>
      <HomeBanner scrollFunc={scrollToList} />
      <ToursSection
        toursListRef={toursListRef as LegacyRef<HTMLDivElement> | undefined}
      />
    </div>
  );
};

export default HomePage;

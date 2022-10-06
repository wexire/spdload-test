export interface ITour {
  id: string;
  title: string;
  flight: {
    links: {
      flickr_images: string[];
    };
    mission_name: string;
  };
}

export interface IToursRequest {
  histories: ITour[];
}

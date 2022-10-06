import { gql } from "@apollo/client";

export const TOURS_QUERY = gql`
  {
    histories {
      flight {
        links {
          flickr_images
        }
        mission_name
      }
      id
      title
    }
  }
`;

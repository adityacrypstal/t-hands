import {gql} from "@apollo/client";

export const GET_UPCOMMING_EVENTS = gql`query GET_UPCOMMING_EVENTS {
  events(first: 3) {
    eventDate
    eventStatus
    image {
      url
    }
    title
    location
    content
  }
}`;

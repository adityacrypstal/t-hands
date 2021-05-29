import {gql} from "@apollo/client";

export const GET_COMMITTEE_MEMBERS = gql`query MyQuery {
  members(where: {committeeMember: true}) {
    name
    role
    facebook
    phone
    instagram
    job
    linkedIn
    profilePic {
      url
    }
  }
}`;

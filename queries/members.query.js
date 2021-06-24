import {gql} from "@apollo/client";

export const GET_COMMITTEE_MEMBERS = gql`query getCommitteeMembers{
  members(where: {committeeMember: true}) {
    name
    role
    facebook
    instagram
    job
    membershipId
    linkedIn
    profilePic {
      url
    }
  }
}`;
export const GET_ALL_MEMBERS = gql`query getAllMembers{
  members(orderBy: order_id_ASC){
    name
    role
    committeeMember
    facebook
    instagram
    job
    membershipId
    phone
    linkedIn
    profilePic {
      url
    }
  }
}`;

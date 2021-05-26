import {gql} from "apollo-server-micro";

export const typeDefs = gql`
type User{
name:String!,
email:String!,
_id:String
}
type Query {
    getUser(_id:String!):User
}
type Mutation {
    addUsers(name:String!, email:String!):User
}
`;

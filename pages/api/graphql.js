import {ApolloServer} from "apollo-server-micro";
import Cors from "micro-cors";
import {typeDefs} from "./types";
import {resolvers} from "./resolvers";

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

export const config = {
    api: {
        bodyParser: false
    }
};
const cors = Cors({
    allowMethods: ["GET", "POST", "OPTIONS"]
});
export default cors(apolloServer.createHandler({path: "/api/graphql"}));

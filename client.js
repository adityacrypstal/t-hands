import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api-ap-northeast-1.graphcms.com/v2/ckp5sb07z8t1w01z5aq3s4ydf/master',
    cache: new InMemoryCache()
});
export default client;


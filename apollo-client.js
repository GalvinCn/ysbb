// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://ysbbwp.datalibstar.com/graphql",
    cache: new InMemoryCache(),
});

export default client;
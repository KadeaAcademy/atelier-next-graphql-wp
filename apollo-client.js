import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost/meshack/graphql",
    cache: new InMemoryCache(),
});

export default client;
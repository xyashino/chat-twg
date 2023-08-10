import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    split,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';


export const getAppolloClient = (token: string | null) => {

    const httpLink = new HttpLink({
        uri: process.env.EXPO_PUBLIC_API_URL,
        headers: token ? { authorization: `Bearer ${token}` } : {},
    });

    const wsLink = new GraphQLWsLink(
        createClient({
            url: `${process.env.EXPO_PUBLIC_API_URL}`,
            lazy: true,
            connectionParams: () => ({
                authToken: token
            })
        })
    );

    const splitLink = split(
        ({ query }) => {
            const definition = getMainDefinition(query);
            return (
                definition.kind === "OperationDefinition" &&
                definition.operation === "subscription"
            );
        },
        wsLink,
        httpLink
    );

    return new ApolloClient({
        link: splitLink,
        cache: new InMemoryCache(),
    });
};

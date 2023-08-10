import {ApolloClient, InMemoryCache} from "@apollo/client";

export const getAppolloClient = (token: string | null) => {
    return new ApolloClient({
        uri: process.env.EXPO_PUBLIC_API_URL,
        cache: new InMemoryCache(),
        ...(!!token
            ? {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }
            : {}),
    });
};
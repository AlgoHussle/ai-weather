import { ApolloClient, InMemoryCache } from "@apollo/client";

let client: ApolloClient<any> | null = null;


export const getClient = () => {
    const client = new ApolloClient({
        uri: "https://dashboard.stepzen.com/explorer?endpoint=api%2Fenervated-cardinal",
    })
}
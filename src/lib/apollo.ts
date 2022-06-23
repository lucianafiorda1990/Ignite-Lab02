import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oay88l1jkz01xrfz4dgiwm/master',
  cache: new InMemoryCache()
})
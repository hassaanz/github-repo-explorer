import { ApolloClient, InMemoryCache } from '@apollo/client';

class GQLClient {
    uri: string
    apolloClient?: ApolloClient<any>
    constructor(uri: string) {
        this.uri = uri;
    }
    getClient(): ApolloClient<any> {
        if (this.apolloClient) {
            return this.apolloClient
        }
        return new ApolloClient({
            uri: this.uri,
            cache: new InMemoryCache()
        });
    }
}

export default GQLClient

import {ApolloClient, InMemoryCache} from '@apollo/client';

class GQLClient {
    uri: string
    apolloClient?: ApolloClient<any>
    headers?: Record<string, string>
    constructor(uri: string, headers?: Record<string, string>) {
        this.uri = uri;
        this.headers = headers
    }

    getClient(): ApolloClient<any> {
        if (this.apolloClient) {
            return this.apolloClient
        }
        return new ApolloClient({
            uri: this.uri,
            cache: new InMemoryCache(),
            headers: this.headers
        });
    }
}

export default GQLClient

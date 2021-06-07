import GQLClient from "./apolloClient";
import {GITHUB_API_URI} from "./constants";

class GithubGQLClient extends GQLClient {
    constructor(githubToken: string, headers?: Record<string, string>) {
        super(GITHUB_API_URI, headers);
        this.addGithubAuthHeader(githubToken)
    }
    private addGithubAuthHeader(token: string) {
        this.headers = {
            ...this.headers,
            'Authorization': `bearer ${token}`
        }
    }
}

export default GithubGQLClient

import React from 'react';
import './App.css';
import Routes from "./Routes";
import {ApolloProvider} from "@apollo/client/react";
import GithubGQLClient from "./GithubGQLClient";


const githubPAT = process.env.REACT_APP_GITHUB_GRAPHQL_AUTH_TOKEN || ''

const githubClient = new GithubGQLClient(githubPAT).getClient()

function App() {
    return (
        <div className="App">
            <ApolloProvider client={githubClient}>
                <Routes />
            </ApolloProvider>
        </div>
    );
}

export default App;

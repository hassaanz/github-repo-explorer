import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider } from '@apollo/client/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GQLClient from "./apolloClient";
import {GITHUB_API_URI} from "./constants";

const githubClient = new GQLClient(GITHUB_API_URI).getClient()

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={githubClient}>
          <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

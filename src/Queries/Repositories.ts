import {RepositoryDataFragment} from '../Fragments'
import { gql } from '@apollo/client';

export const searchRepositories = (topic: string) => gql(`
    {
      search(query: "topic:${topic} stars:>50", type: REPOSITORY, first: 100) {
        repositoryCount
        nodes {
          ... on Repository {
            ${RepositoryDataFragment}
          }
        }
      }
    }
`)

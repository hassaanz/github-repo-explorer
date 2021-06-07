import { transformGQLToRepo } from "./Repositories";

describe('Repositories', () => {
  describe('transformGQLToRepo', () => {
    test('should transform empty gql response properly',  () => {
      expect(transformGQLToRepo({
        search: {
          nodes: []
        }
      })).toEqual([])
    })
    test('should gql response properly',  () => {
      const gqlRepositorySearchResults = [
        {
          "stargazerCount": 324867,
          "forkCount": 25907,
          "nameWithOwner": "freeCodeCamp/freeCodeCamp",
          "name": "freeCodeCamp",
          "description": "freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",
          "updatedAt": "2021-06-07T08:54:17Z",
          "createdAt": "2014-12-24T17:49:19Z",
          "diskUsage": 198480,
        },
        {
          "stargazerCount": 169466,
          "forkCount": 34195,
          "nameWithOwner": "facebook/react",
          "name": "react",
          "description": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
          "updatedAt": "2021-06-07T08:13:51Z",
          "createdAt": "2013-05-24T16:15:54Z",
          "diskUsage": 166181,
        },
        {
          "stargazerCount": 88305,
          "forkCount": 22035,
          "nameWithOwner": "facebook/create-react-app",
          "name": "create-react-app",
          "description": "Set up a modern web app by running one command.",
          "updatedAt": "2021-06-07T09:00:48Z",
          "createdAt": "2016-07-17T14:55:11Z",
          "diskUsage": 17379,
        },
      ]
      const expected = [
        {
          name: "freeCodeCamp",
          forks: 25907,
          stars: 324867,
          url: 'https://github.com/freeCodeCamp/freeCodeCamp',
        },
        {
          name: "react",
          forks: 34195,
          stars: 169466,
          url: 'https://github.com/facebook/react',
        },
        {
          name: "create-react-app",
          forks: 22035,
          stars: 88305,
          url: 'https://github.com/facebook/create-react-app',
        }
      ]
      expect(transformGQLToRepo({
        search: {
          nodes: gqlRepositorySearchResults
        }
      })).toEqual(expected)
    })
  })
})

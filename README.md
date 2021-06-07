# Github Repo explorer

The repository contains an example of using github graphql api to explore and visualize repository data from the search.
The current version search the repositories based on the tag "react" and shows the following properties in a table:
- name
- number of stars
- number of forks

Clicking on a repo will redirect to it's github URI

Things to add:
- Paginate results
- Styled components to add better containers and design constants

## To start
Please create a github personall access token and add it in .env file
```dotenv
REACT_APP_GITHUB_GRAPHQL_AUTH_TOKEN=token
```

Start the app using the following command:
```shell
yarn start
```
## Testing
Run tests using the following command:
```shell
yarn test
```

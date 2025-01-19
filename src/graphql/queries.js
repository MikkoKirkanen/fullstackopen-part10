import { gql } from '@apollo/client';
import { REPOSITORY_FRAGMENT } from './fragments';

export const GET_REPOSITORIES = gql`
  query repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepositoryFragment
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
`;

export const GET_REPOSITORY = gql`
  query getRepository($id: ID!) {
    repository(id: $id) {
      ...RepositoryFragment
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
`;

export const GET_USERS = gql`
  query {
    users {
      edges {
        node {
          username
        }
      }
    }
  }
`;

export const GET_ME = gql`
  query {
    me {
      id
      username
      reviews {
        edges {
          node {
            id
            createdAt
            rating
            text
            repository {
              id
              fullName
            }
          }
        }
      }
    }
  }
`;

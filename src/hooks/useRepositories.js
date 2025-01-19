import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (queryOptions) => {
  return useQuery(GET_REPOSITORIES, {
    variables: queryOptions,
    fetchPolicy: 'cache-and-network',
  });
};

export default useRepositories;

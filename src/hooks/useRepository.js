import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  return useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });
};

export default useRepository;

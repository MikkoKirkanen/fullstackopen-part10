import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const useMe = () => {
  return useQuery(GET_ME, {
    fetchPolicy: 'cache-and-network',
  });
};

export default useMe;

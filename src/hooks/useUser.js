import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

const useUser = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const createUser = async (user) => {
    await mutate({
      variables: { user },
    });
  };

  return [createUser, result];
};

export default useUser;

import { useMutation } from '@apollo/client';
import { CREATE_REVIEW, DELETE_REVIEW } from '../graphql/mutations';
import { GET_ME } from '../graphql/queries';

const useReview = () => {
  const [create] = useMutation(CREATE_REVIEW);
  const [remove] = useMutation(DELETE_REVIEW);

  const createReview = async (review) => {
    return await create({
      variables: { review },
    });
  };

  const deleteReview = async (id) => {
    return await remove({
      variables: { id },
      refetchQueries: [GET_ME],
    });
  };

  return { createReview, deleteReview };
};

export default useReview;

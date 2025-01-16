import useRepositories from '../hooks/useRepositories';
import Text from './Text';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const { data, loading, error } = useRepositories();

  if (loading) {
    return (
      <Text fontWeight='bold' fontSize={32}>
        Loading data...
      </Text>
    );
  }

  if (error) {
    <Text color='red' fontWeight='bold' fontSize={32}>
      {error.message}
    </Text>;
  }

  return <RepositoryListContainer repositories={data?.repositories} />;
};

export default RepositoryList;

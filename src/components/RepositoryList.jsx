import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

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

  // Get the nodes from the edges array
  const repositoryNodes =
    data?.repositories?.edges?.map((edge) => edge.node) || [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem key={item.id} item={item} />}
    />
  );
};

export default RepositoryList;

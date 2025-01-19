import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useNavigate } from 'react-router-native';
import Sort from '../Common/Sort';
import Filter from '../Common/Filter';
import theme from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  header: {
    ...theme.container,
    backgroundColor: theme.colors.bodyBgColor,
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, onSort, onFilterChange }) => {
  const navigate = useNavigate();

  // Get the nodes from the edges array
  const repositoryNodes = repositories?.edges?.map((edge) => edge.node) || [];

  const onItemPress = (id) => {
    navigate(`view/${id}`);
  };

  const getHeaderComponents = () => {
    return (
      <View style={styles.header}>
        <Filter onFilterChange={onFilterChange} />
        <Sort onSort={onSort} />
      </View>
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={getHeaderComponents()}
      renderItem={({ item }) => (
        <Pressable onPress={() => onItemPress(item.id)}>
          <RepositoryItem key={item.id} item={item} />
        </Pressable>
      )}
    />
  );
};

export default RepositoryListContainer;

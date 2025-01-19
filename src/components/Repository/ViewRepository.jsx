import { useParams } from 'react-router-native';
import { FlatList, StyleSheet } from 'react-native';
import Text from '../Common/Text';
import ReviewItem from '../Review/ReviewItem';
import useRepository from '../../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});

const ViewRepository = () => {
  const params = useParams();
  const id = params.id || '';
  const queryOptions = {
    first: 4,
    id,
  };

  const { repository, fetchMore, loading, error } = useRepository(queryOptions);

  if (loading) {
    return (
      <Text fontWeight='bold' fontSize={32}>
        Loading data...
      </Text>
    );
  }

  if (error) {
    return (
      <Text color='red' fontWeight='bold' fontSize={32}>
        {error.message}
      </Text>
    );
  }

  const onEndReach = () => {
    fetchMore();
  };

  const reviews = repository?.reviews?.edges?.map((edge) => edge.node) || [];

  return (
    <FlatList
      data={reviews}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={repository} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default ViewRepository;

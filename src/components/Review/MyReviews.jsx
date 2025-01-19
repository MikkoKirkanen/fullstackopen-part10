import { FlatList, StyleSheet, View } from 'react-native';
import useMe from '../../hooks/useMe';
import ReviewItem from './ReviewItem';
import Text from '../Common/Text';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  separator: {
    height: 10,
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
  const { data } = useMe();
  const reviews = data?.me?.reviews?.edges?.map((edge) => edge.node);

  const getContentContainerStyle = () => {
    const custom = !reviews?.length ? { ...styles.empty } : {};
    return { ...styles.container, ...custom };
  };

  return (
    <FlatList
      contentContainerStyle={getContentContainerStyle()}
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <ReviewItem key={item.id} review={item} actions={true} />
      )}
      ListEmptyComponent={<Text fontSize={32}>None of my reviews</Text>}
    />
  );
};

export default MyReviews;

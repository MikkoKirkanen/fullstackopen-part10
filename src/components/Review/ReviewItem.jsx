import { Alert, Button, Pressable, StyleSheet, View } from 'react-native';
import Text from '../Common/Text';
import theme from '../../../theme';
import { Link, useNavigate } from 'react-router-native';
import useReview from '../../hooks/useReview';

const circleSize = 64;

const styles = StyleSheet.create({
  container: {
    ...theme.container,
  },
  main: {
    flexDirection: 'row',
    gap: 16,
  },
  rating: {
    fontSize: 24,
    color: theme.colors.primary,
  },
  ratingCircle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: circleSize,
    width: circleSize,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: '50%',
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: theme.fontWeights.bold,
    marginBottom: 4,
  },
  created: {
    color: theme.colors.textSecondary,
    marginBottom: 8,
  },
  buttons: {
    flexDirection: 'row',
    gap: 16,
  },
  primaryBtn: {
    ...theme.primaryBtn,
    flex: 1,
  },
  dangerBtn: {
    ...theme.dangerBtn,
    flex: 1,
  },
  btnText: {
    fontWeight: theme.fontWeights.bold,
  },
});

const ReviewItem = ({ review, actions = false }) => {
  const getTitle = review?.user?.username || review?.repository?.fullName;
  const navigate = useNavigate();
  const { deleteReview } = useReview();

  const getDate = () => {
    return new Date(review.createdAt).toLocaleDateString();
  };

  const viewRepository = () => {
    navigate(`/view/${review?.repository?.id}`);
  };

  const getActions = () => {
    if (!actions) return null;

    return (
      <View style={styles.buttons}>
        <Pressable style={styles.primaryBtn} onPress={viewRepository}>
          <Text style={styles.btnText}>View repository</Text>
        </Pressable>
        <Pressable style={styles.dangerBtn} onPress={confirmDelete}>
          <Text style={styles.btnText}>Delete review</Text>
        </Pressable>
      </View>
    );
  };

  const confirmDelete = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => deleteReview(review.id),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.ratingCircle}>
          <Text style={styles.rating}>{review.rating}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{getTitle}</Text>
          <Text style={styles.created}>{getDate()}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
      {getActions()}
    </View>
  );
};

export default ReviewItem;

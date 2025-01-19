import { Image, Pressable, StyleSheet, View } from 'react-native';
import theme from '../../../theme';
import StatText from '../Common/StatText';
import Text from '../Common/Text';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  flexContainer: {
    ...theme.container,
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  mainInfo: {
    display: 'flex',
    gap: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 6,
  },
  textBold: {
    fontWeight: theme.fontWeights.bold,
  },
  textSecondary: {
    color: theme.colors.textSecondary,
  },
  langLabel: {
    ...theme.primaryLabel,
    alignSelf: 'flex-start',
    padding: 6,
  },
  stats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    ...theme.primaryBtn,
  },
});

const RepositoryItem = ({ item }) => {
  const openGitHub = () => {
    Linking.openURL(item?.url);
  };

  const getGitHubButton = () => {
    if (!item?.url) return null;

    return (
      <Pressable style={styles.btn} onPress={openGitHub}>
        <Text fontWeight='bold'>Open in GitHub</Text>
      </Pressable>
    );
  };

  return (
    <View testID='repositoryItem' style={styles.flexContainer}>
      <View style={styles.main}>
        <View>
          <Image
            style={styles.avatar}
            source={{ uri: item.ownerAvatarUrl }}
          ></Image>
        </View>
        <View style={styles.mainInfo}>
          <Text testID='fullName' style={styles.textBold}>
            {item.fullName}
          </Text>
          <Text testID='description' style={styles.textSecondary}>
            {item.description}
          </Text>
          <Text testID='language' style={styles.langLabel}>
            {item.language}
          </Text>
        </View>
      </View>
      <View style={styles.stats}>
        <StatText value={item.stargazersCount} label='Stars' />
        <StatText value={item.forksCount} label='Forks' />
        <StatText value={item.reviewCount} label='Reviews' />
        <StatText value={item.ratingAverage} label='Rating' />
      </View>
      {getGitHubButton()}
    </View>
  );
};

export default RepositoryItem;

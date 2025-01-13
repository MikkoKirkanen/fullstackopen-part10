import { Image, StyleSheet, Text, View } from 'react-native';
import theme from '../../theme';
import StatText from './StatText';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    gap: 16,
    padding: 16,
    backgroundColor: theme.colors.itemBgColor,
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
    color: theme.colors.text,
  },
  textSecondary: {
    color: theme.colors.textSecondary,
  },
  langLabel: {
    alignSelf: 'flex-start',
    padding: 6,
    borderRadius: 6,
    ...theme.primaryBtn,
  },
  stats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const RepositoryItem = ({ item }) => (
  <View style={styles.flexContainer}>
    <View style={styles.main}>
      <View>
        <Image
          style={styles.avatar}
          source={{ uri: item.ownerAvatarUrl }}
        ></Image>
      </View>
      <View style={styles.mainInfo}>
        <Text style={styles.textBold}>{item.fullName}</Text>
        <Text style={styles.textSecondary}>{item.description}</Text>
        <Text style={styles.langLabel}>{item.language}</Text>
      </View>
    </View>
    <View style={styles.stats}>
      <StatText value={item.stargazersCount} label='Stars' />
      <StatText value={item.forksCount} label='Forks' />
      <StatText value={item.reviewCount} label='Reviews' />
      <StatText value={item.ratingAverage} label='Rating' />
    </View>
  </View>
);

export default RepositoryItem;

import { StyleSheet, View, Appearance } from 'react-native';
import RepositoryList from './RepositoryList';

const colorScheme = Appearance.getColorScheme();
console.log(colorScheme);
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <RepositoryList />
    </View>
  );
};

export default Main;

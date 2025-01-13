import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme.js';
import { Link } from 'react-router-native';
import Text from './Text.jsx';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.barBgColor,
  },
  link: {
    padding: theme.padding,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/'>
          <Text style={styles.link}>Repositories</Text>
        </Link>
        <Link to='sign-in'>
          <Text style={styles.link}>Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;

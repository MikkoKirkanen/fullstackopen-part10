import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme.js';
import { Link } from 'react-router-native';
import Text from './Text.jsx';
import useSignOut from '../hooks/useSignOut.js';

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

const AppBar = ({ user }) => {
  const [signOut] = useSignOut();

  const logOut = async () => {
    try {
      await signOut();
    } catch (e) {
      console.log(e);
    }
  };

  const getSignView = () => {
    if (!user) {
      return (
        <Link to='sign-in'>
          <Text style={styles.link}>Sign In</Text>
        </Link>
      );
    }
    return (
      <Pressable onPress={logOut}>
        <Text style={styles.link}>Log out</Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/'>
          <Text style={styles.link}>Repositories</Text>
        </Link>
        {getSignView()}
      </ScrollView>
    </View>
  );
};

export default AppBar;

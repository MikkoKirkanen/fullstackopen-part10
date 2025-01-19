import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme.js';
import { Link } from 'react-router-native';
import Text from './Common/Text.jsx';
import useSignOut from '../hooks/useSignOut.js';
import useMe from '../hooks/useMe.js';

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
  const { data } = useMe();
  const user = data?.me;
  const [signOut] = useSignOut();

  const logOut = async () => {
    try {
      await signOut();
    } catch (e) {
      console.log(e);
    }
  };

  const getCreateReviewButton = () => {
    if (!user) return null;

    return (
      <Link to='create-review'>
        <Text style={styles.link}>Create a review</Text>
      </Link>
    );
  };

  const getMyReviewsButton = () => {
    if (!user) return null;

    return (
      <Link to='my-reviews'>
        <Text style={styles.link}>My reviews</Text>
      </Link>
    );
  };

  const getSignInOutView = () => {
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

  const getSignUpView = () => {
    if (!user) {
      return (
        <Link to='sign-up'>
          <Text style={styles.link}>Sign Up</Text>
        </Link>
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/'>
          <Text style={styles.link}>Repositories</Text>
        </Link>
        {getCreateReviewButton()}
        {getMyReviewsButton()}
        {getSignInOutView()}
        {getSignUpView()}
      </ScrollView>
    </View>
  );
};

export default AppBar;

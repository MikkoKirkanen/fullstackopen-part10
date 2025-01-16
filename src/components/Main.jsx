import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../../theme';
import { Route, Routes } from 'react-router-native';
import SignIn from './SignIn';
import useMe from '../hooks/useMe';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    fontFamily: theme.fonts.main,
    backgroundColor: theme.colors.bodyBgColor,
  },
});

const Main = () => {
  const { data } = useMe();

  const user = data?.me;

  return (
    <View style={styles.container}>
      <AppBar user={user} />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default Main;

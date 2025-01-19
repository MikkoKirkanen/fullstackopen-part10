import { StyleSheet, View } from 'react-native';
import RepositoryList from './Repository/RepositoryList';
import AppBar from './AppBar';
import theme from '../../theme';
import { Route, Routes } from 'react-router-native';
import SignIn from './Auth/SignIn';
import ViewRepository from './Repository/ViewRepository';
import ReviewForm from './Review/ReviewForm';
import SignUp from './Auth/SignUp';
import MyReviews from './Review/MyReviews';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    fontFamily: theme.fonts.main,
    backgroundColor: theme.colors.bodyBgColor,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/create-review' element={<ReviewForm />} />
        <Route path='/my-reviews' element={<MyReviews />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/view/:id' element={<ViewRepository />} />
      </Routes>
    </View>
  );
};

export default Main;

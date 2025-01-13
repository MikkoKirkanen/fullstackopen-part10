import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import Text from './Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
    backgroundColor: theme.colors.itemBgColor,
  },
  input: {
    ...theme.textInput,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Username'
        placeholderTextColor='#586069'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder='Password'
        placeholderTextColor='#586069'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      <Pressable onPress={formik.handleSubmit}>
        <Text style={theme.primaryBtn}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(
      `Sign in with values\nUsername: ${values?.username}\nPassword: ${values?.password}`
    );
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;

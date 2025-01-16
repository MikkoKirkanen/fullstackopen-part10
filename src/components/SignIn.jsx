import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import Text from './Text';
import theme from '../../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
    backgroundColor: theme.colors.itemBgColor,
  },
  input: {
    ...theme.textInput,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
  },
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const isInvalid = (input) => {
    return formik.touched[input] && formik.errors[input];
  };

  const getError = (input) => {
    if (isInvalid(input))
      return <Text style={styles.errorText}>{formik.errors[input]}</Text>;
  };

  const getStyle = (input) => {
    const error = isInvalid(input) ? styles.errorInput : {};
    return { ...styles.input, ...error };
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={getStyle('username')}
          placeholder='Username'
          placeholderTextColor='#586069'
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
        {getError('username')}
      </View>
      <View>
        <TextInput
          secureTextEntry
          style={getStyle('password')}
          placeholder='Password'
          placeholderTextColor='#586069'
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
        {getError('password')}
      </View>
      <Pressable onPress={formik.handleSubmit}>
        <Text style={theme.primaryBtn}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;

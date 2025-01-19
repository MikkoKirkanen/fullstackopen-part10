import { Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import Text from '../Common/Text';
import theme from '../../../theme';
import * as yup from 'yup';
import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import TextInput from '../Common/TextInput';

const styles = StyleSheet.create({
  container: {
    ...theme.container,
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

  return (
    <View style={styles.container}>
      <TextInput variable='username' placeholder='Username' form={formik} />
      <TextInput
        secureTextEntry
        variable='password'
        placeholder='Password'
        form={formik}
      />
      <Pressable style={theme.primaryBtn} onPress={formik.handleSubmit}>
        <Text fontWeight='bold'>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      await signIn(values);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;

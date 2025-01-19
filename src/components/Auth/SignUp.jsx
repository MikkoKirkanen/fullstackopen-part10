import { Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import Text from '../Common/Text';
import theme from '../../../theme';
import * as yup from 'yup';
import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import TextInput from '../Common/TextInput';
import useUser from '../../hooks/useUser';

const styles = StyleSheet.create({
  container: {
    ...theme.container,
  },
});

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be at least 5 characters')
    .max(30, 'Username must be at most 30 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .max(50, 'Password must be at most 50 characters')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export const SignUpForm = () => {
  const [createUser] = useUser();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await createUser({ username, password });
      await signIn({ username, password });
      navigate(`/`);
    } catch (e) {
      console.log(e.message);
    }
  };

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
      <TextInput
        secureTextEntry
        variable='passwordConfirmation'
        placeholder='Password confirmation'
        form={formik}
      />
      <Pressable style={theme.primaryBtn} onPress={formik.handleSubmit}>
        <Text fontWeight='bold'>Sign up</Text>
      </Pressable>
    </View>
  );
};

const SignUp = () => {
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

  return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;

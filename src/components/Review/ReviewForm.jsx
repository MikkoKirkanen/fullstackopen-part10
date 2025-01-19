import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../../../theme';
import * as yup from 'yup';
import { useFormik } from 'formik';
import useReview from '../../hooks/useReview';
import Text from '../Common/Text';
import { useNavigate } from 'react-router-native';
import TextInput from '../Common/TextInput';

const styles = StyleSheet.create({
  container: {
    ...theme.container,
  },
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .typeError('Rating must be a number')
    .required('Rating is required')
    .min(0, 'Rating must be at least 0')
    .max(100, 'Rating must be at most 100'),
  text: yup.string(),
});

const ReviewForm = () => {
  const { createReview } = useReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    values.rating = Number(values.rating);

    try {
      const { data } = await createReview(values);
      navigate(`/view/${data.createReview.repositoryId}`);
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
      <TextInput
        variable='ownerName'
        placeholder='Repository owner name'
        form={formik}
      />
      <TextInput
        variable='repositoryName'
        placeholder='Repository name'
        form={formik}
      />
      <TextInput
        variable='rating'
        placeholder='Rating between 0 and 100'
        form={formik}
      />
      <TextInput
        multiline
        numberOfLines={5}
        variable='text'
        placeholder='Review'
        form={formik}
      />
      <Pressable style={theme.primaryBtn} onPress={formik.handleSubmit}>
        <Text fontWeight='bold'>Create a review</Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;

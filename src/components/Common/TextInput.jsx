import {
  TextInput as NativeTextInput,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import theme from '../../../theme';

const styles = StyleSheet.create({
  input: {
    ...theme.textInput,
  },
  errorInput: {
    borderColor: theme.colors.error,
  },
  errorText: {
    color: theme.colors.error,
  },
  placeholderTextColor: {
    color: theme.colors.textSecondary,
  },
});

const TextInput = ({ form, variable, ...props }) => {
  const isInvalid = () => {
    return form.touched[variable] && form.errors[variable];
  };

  const getError = () => {
    if (isInvalid())
      return <Text style={styles.errorText}>{form.errors[variable]}</Text>;
  };

  const getStyle = () => {
    const error = isInvalid() ? styles.errorInput : {};
    return { ...styles.input, ...error };
  };

  return (
    <View>
      <NativeTextInput
        style={getStyle()}
        placeholderTextColor={styles.placeholderTextColor.color}
        value={form.values[variable]}
        onChangeText={form.handleChange(variable)}
        {...props}
      />
      {getError(variable)}
    </View>
  );
};

export default TextInput;

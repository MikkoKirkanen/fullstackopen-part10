import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.text,
  },
});

const Text = ({ style, fontSize, fontWeight, color, ...props }) => {
  const textStyle = [
    styles.text,
    style,
    { fontSize },
    { fontWeight },
    { color },
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;

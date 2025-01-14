import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../../theme';

const defaultStyle = StyleSheet.create({
  color: theme.colors.text,
});

const Text = ({ style, fontSize, fontWeight, color, ...props }) => {
  const textStyle = [defaultStyle, style];
  if (fontSize) textStyle.push({ fontSize });
  if (fontWeight) textStyle.push({ fontWeight });
  if (color) textStyle.push({ color });

  return <NativeText style={textStyle} {...props} />;
};

export default Text;

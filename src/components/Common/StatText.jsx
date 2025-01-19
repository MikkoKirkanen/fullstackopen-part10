import { StyleSheet, View } from 'react-native';
import theme from '../../../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  value: {
    fontWeight: theme.fontWeights.bold,
  },
  label: {
    color: theme.colors.textSecondary,
  },
});

const StatText = ({ value, label }) => {
  const getValue = (v) => {
    if (v < 1000) return v;

    return `${(v / 1000).toFixed(1)}k`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.value}>{getValue(value)}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default StatText;

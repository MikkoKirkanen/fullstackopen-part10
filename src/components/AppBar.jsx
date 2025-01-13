import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme.js';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.barBgColor,
  },
  title: {
    color: theme.colors.barColor,
    padding: theme.padding,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.title}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;

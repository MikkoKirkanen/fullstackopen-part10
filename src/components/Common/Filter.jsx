import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import theme from '../../../theme';

const styles = StyleSheet.create({
  filter: {
    backgroundColor: theme.colors.itemBgColor,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
  },
  input: {
    color: theme.colors.text,
  },
  placeholder: {
    color: theme.colors.textSecondary,
  },
});

const Filter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('');
  const debounced = useDebouncedCallback((value) => {
    onFilterChange(value);
  }, 500);

  const onChange = (value) => {
    setFilter(value);
    debounced(value);
  };

  return (
    <Searchbar
      style={styles.filter}
      inputStyle={styles.input}
      placeholder='Filter'
      placeholderTextColor={styles.placeholder.color}
      iconColor={theme.colors.text}
      value={filter}
      onChangeText={onChange}
    />
  );
};

export default Filter;

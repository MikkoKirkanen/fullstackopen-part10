import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import theme from '../../../theme';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    ...theme.textInput,
    height: 60,
    borderWidth: 0,
  },
  item: {
    backgroundColor: theme.colors.itemBgColor,
  },
});

const Sort = ({ onSort }) => {
  const [selected, setSelected] = useState('latest');
  const pickerItems = [
    { label: 'Select sorting method', value: '' },
    { label: 'Latest repositories', value: 'latest' },
    { label: 'Highest rated repositories', value: 'highest' },
    { label: 'Lowest rated repositories', value: 'lowest' },
  ];

  const onValueChange = (value) => {
    setSelected(value);
    onSort(value);
  };

  const getItemStyle = (value) => {
    let color = theme.colors.text;

    if (!value) {
      color = theme.colors.textSecondary;
    }

    return { ...styles.item, color };
  };

  return (
    <View style={styles.container}>
      <Picker
        dropdownIconColor={theme.colors.text}
        style={styles.picker}
        selectedValue={selected}
        onValueChange={onValueChange}
      >
        {pickerItems.map((item, i) => (
          <Picker.Item
            key={i}
            style={getItemStyle(item.value)}
            label={item.label}
            value={item.value}
            enabled={item.value !== ''}
          />
        ))}
      </Picker>
    </View>
  );
};

export default Sort;

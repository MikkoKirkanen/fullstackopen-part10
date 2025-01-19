import { Platform } from 'react-native';

const defaultInput = {
  padding: 16,
  borderRadius: 8,
  fontSize: 16,
  color: '#fff',
};

const defaultPrimary = {
  ...defaultInput,
  backgroundColor: '#0d6efd',
};

const theme = {
  container: {
    display: 'flex',
    gap: 16,
    padding: 16,
    backgroundColor: '#1b1f22',
  },
  colors: {
    bodyBgColor: '#212529',
    itemBgColor: '#1b1f22',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    barColor: '#fff',
    barBgColor: '#8f00ff',
    text: '#fff',
    error: 'red',
  },
  primaryBtn: {
    ...defaultPrimary,
    display: 'flex',
    alignItems: 'center',
  },
  primaryLabel: {
    ...defaultPrimary,
    fontSize: 14,
  },
  textInput: {
    ...defaultInput,
    borderWidth: 1,
    borderColor: '#586069',
    placeholderTextColor: '#586069',
    backgroundColor: '#1b1f22',
  },
  dangerBtn: {
    ...defaultInput,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#dc3545',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  padding: 16,
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;

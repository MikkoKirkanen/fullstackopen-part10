const defaultPrimary = {
  color: '#fff',
  padding: 16,
  borderRadius: 6,
};

const theme = {
  colors: {
    bodyBgColor: '#212529',
    itemBgColor: '#1b1f22',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    barColor: '#fff',
    barBgColor: '#8f00ff',
    text: '#fff',
  },
  primaryBtn: {
    ...defaultPrimary,
    backgroundColor: '#0d6efd',
    textAlign: 'center',
  },
  textInput: {
    ...defaultPrimary,
    borderWidth: 1,
    borderColor: '#586069',
    placeholderTextColor: '#586069',
    backgroundColor: '#1b1f22',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  padding: 16,
  fonts: {
    main: 'System',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;

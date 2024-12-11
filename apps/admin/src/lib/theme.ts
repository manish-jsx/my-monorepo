import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'blue',
  colors: {
    'brand': [
      '#f0f4ff',
      '#d6e1ff',
      '#abc4ff',
      '#7aa2ff',
      '#4a7eff',
      '#1a5eff',
      '#0042ea',
      '#0036c4',
      '#002eaa',
      '#002693'
    ]
  },
  fontFamily: 'Inter, sans-serif',
  headings: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    Button: {
      defaultProps: {
        color: 'brand'
      }
    }
  }
});
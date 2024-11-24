// src/theme.js
import { createTheme } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1E40AF', // Blue
    },
    secondary: {
      main: '#6B7280', // Gray
    },
    background: {
      default: '#F3F4F6', // Light Gray
    },
    text: {
      primary: '#333333', // Dark Text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#333333',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#333333',
    },
    body1: {
      fontSize: '1rem',
      color: '#333333',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#6B7280',
    },
  },
});

export default theme;
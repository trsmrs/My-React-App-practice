import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './App';
import './index.css'
import { green,  } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary:{
      main: green['400'],
    },
    secondary: {
      main: green[50]
    }
  },
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
)


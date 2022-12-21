import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './App';
import './index.css'
import { teal,  } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary:{
      main: teal['A400'],
    },
    secondary: {
      main: teal[50]
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


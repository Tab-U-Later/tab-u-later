import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack'
import './index.css';
import App from './App';
import reportWebVitals from './main/src/utils/reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../src/client/components/theme'

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

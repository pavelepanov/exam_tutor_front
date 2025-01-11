import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import App from './App';
import '@mantine/core/styles.css';
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MantineProvider theme={theme} >
      <App />
    </MantineProvider>
  </BrowserRouter>
);

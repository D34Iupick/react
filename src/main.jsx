import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';

import './styles/tailwind.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider} from '@mui/material/styles';
import {ThemeLigthDark} from './theme/LigthDark';

import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ThemeProvider theme={ThemeLigthDark}>
      <CssBaseline />
       <App/>
    </ThemeProvider>
  </StrictMode>
);





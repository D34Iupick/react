import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider} from '@mui/material/styles';
import AppLigthDark from './components/light-dark';
import AccordionDtc from './components/accordion';
import {ThemeLigthDark} from './theme/LigthDark';

import './styles/tailwind.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CardCurso from './components/card-curso';



const root = createRoot(document.getElementById('root'));



root.render(
  <StrictMode >

    <ThemeProvider theme={ThemeLigthDark}>
      <CssBaseline />
      <CardCurso useNameImg={"wolverin"} useName={"wolverine"} useDescription={"wolverine wolverine wolverine"} buttonLink={"Ir al curso"} isFollowing={true} />
      <CardCurso useNameImg={"deadpool"} useName={"deadpool"} useDescription={"dedpool dedpool dedpool"} buttonLink={"Ir al curso"} isFollowing={true} />
    </ThemeProvider>
  </StrictMode>
);





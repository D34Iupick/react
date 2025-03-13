import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React, { Fragment as ReactFragment } from 'react'
import { Button } from '@mui/material'
import './styles/tailwind.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import Card from './components/card.jsx'
// import Popup from './components/popup.jsx'
// import ButtonUsage from './components/buttonn.jsx'
// import AccordionDtc from './components/accordion.jsx'
// import App from './components/App.jsx'
import CardCurso from './components/card-curso.jsx'

const root = createRoot(document.getElementById('root'));
// variable root = creando el root(en el documento.trayendo el Elemento con el id ('root'));


root.render(
  // <StrictMode>
  //   <CardCurso useNameImg="punisher" useName="Punicher" useDescription="DEscrpionjkdgjkhsgk" buttonLink="btn"/>
  //   <CardCurso useNameImg="wolverin" useName="Wolverin" useDescription="DEscrpionjkdgjkhsgk" buttonLink="btn"/>
  //   <CardCurso useNameImg="deadpool" useName="Deadpool" useDescription="DEscrpionjkdgjkhsgk" buttonLink="btn"/>
  // </StrictMode>,
  <StrictMode>
  <div className="grid grid-flow-row md:grid-flow-col justify-items-center bg-gray-300 dark:bg-gray-900 p-4 m-4 align-content-center">
    <CardCurso
    useNameImg="punisher" useName="Punicher" useDescription="DEscrpionjkdgjkhsgk" buttonLink="btn"
    />
    
    <CardCurso 
    useNameImg="wolverin" useName="Wolverin" useDescription="DEscrpionjkdgjkhsgk" buttonLink="btn"
    />

<CardCurso
    useNameImg="deadpool" useName="Deadpool" useDescription="DEscrpionjkdgjkhsgk" buttonLink="btn"
    />
  </div>
  </StrictMode>,



  
);
//de root.render se va a renderizar el componente App


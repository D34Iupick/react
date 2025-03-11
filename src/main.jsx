import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import App from './components/App.jsx'
// import Card from './components/card.jsx'
// import Popup from './components/popup.jsx'
// import ButtonUsage from './components/buttonn.jsx'
import AccordionDtc from './components/accordion.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AccordionDtc/>
  </StrictMode>,
 
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import App from './App.jsx'
// import Card from './card.jsx'
// import Popup from './popup.jsx'
import ButtonUsage from './buttonn.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ButtonUsage />
  </StrictMode>,
 
)

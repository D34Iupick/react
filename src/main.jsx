import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
// import App from './App.jsx'
// import Card from './card.jsx'
import Popup from './popup.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Popup />
  </StrictMode>,
 
)

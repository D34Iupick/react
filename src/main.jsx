import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
// import App from './App.jsx'
import Card from './card.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Card />
  </StrictMode>,
 
)

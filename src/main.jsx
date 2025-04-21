import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Compoents1/total.css'
import Landing from './Compoents1/Landing'

// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Landing/>
  </StrictMode>,
)

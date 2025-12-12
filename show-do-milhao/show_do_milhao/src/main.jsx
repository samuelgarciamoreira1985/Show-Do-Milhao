import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// CONTEXT - PROVIDER
import { ProvidderSettings } from './assets/context/SettingsContext.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ProvidderSettings>
    <App />
    </ProvidderSettings>
  </StrictMode>,

)

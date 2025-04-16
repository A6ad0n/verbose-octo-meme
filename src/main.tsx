import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import i18n from '@language/i18n.ts'
import { getCookie } from '@utils/cookies.ts'
import { AppCountsProvider } from './AppCountsContext.tsx'
import { BrowserRouter as Router } from 'react-router-dom'

const lng = getCookie('cur_lng');
if (lng)
  i18n.changeLanguage(lng);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <AppCountsProvider>
        <App />
      </AppCountsProvider>
    </Router>
  </StrictMode>,
)

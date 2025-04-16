import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import i18n from '@language/i18n.ts'
import { getCookie } from '@utils/cookies.ts'

const lng = getCookie('cur_lng');
if (lng)
  i18n.changeLanguage(lng);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

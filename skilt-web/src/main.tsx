import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import ChallengeCard from "components/ChallengeCard";

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ChallengeCard />
  </StrictMode>,
)

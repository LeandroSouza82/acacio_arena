import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './Acacio_Arena/App';
import './Acacio_Arena/styles/global.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

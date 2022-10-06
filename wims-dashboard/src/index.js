import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CustomProvider } from 'rsuite';

const root = createRoot(document.getElementById("root"));

root.render(
  <CustomProvider theme='dark'>
      <App />
  </CustomProvider>

)

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { validateUniqueVariantIds } from './utils/catalog';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// Run a quick data integrity check in development to catch duplicate variant IDs early
if (import.meta.env.DEV) {
  try {
    validateUniqueVariantIds();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[catalog] Validation failed:', e);
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

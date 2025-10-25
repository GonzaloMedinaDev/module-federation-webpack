import React from 'react';
import ReactDOM from 'react-dom/client';
// 🚨 CAMBIO AQUÍ: Importar la aplicación principal (App.js)
import App from './App'; 

/**
 * Función que realiza el montaje del MFE.
 * Se exporta para que el Host la pueda llamar.
 * @param {HTMLElement} container - El elemento DOM donde se montará el MFE.
 */
export function mount(container) {
  if (!container.root) {
    container.root = ReactDOM.createRoot(container);
  }

  container.root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}


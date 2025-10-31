import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import App from './App_basic'; 
// Averiguar si puedo quitar un param

/**
 * @param {HTMLElement} container
 */

export function mount(container) {
  if (!container.root) container.root = ReactDOM.createRoot(container);

  container.root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

/**
 * @param {HTMLElement} container
 */

export function unmount(container) {
  if (container.root) {
    container.root.unmount();
    delete container.root; 
    console.log("MFE: Componente desmontado con éxito.");
  }
}
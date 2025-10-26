import React from 'react';
import ReactDOM from 'react-dom/client';
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

// --- 💡 Función Unmount (Nueva) ---
/**
 * Realiza la limpieza del MFE utilizando el método de React v18 (unmount).
 * @param {HTMLElement} container - El elemento DOM (mountPoint) que contiene la raíz.
 */
export function unmount(container) {
  if (container.root) {
    // 🚨 Usamos el método unmount de la raíz de v18
    container.root.unmount();
    // Limpiamos la referencia para que React pueda recrearla si se monta de nuevo
    delete container.root; 
    console.log("MFE: Componente desmontado con éxito.");
  }
}
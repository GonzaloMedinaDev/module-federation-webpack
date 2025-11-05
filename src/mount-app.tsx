import React from 'react';
import ReactDOM from 'react-dom/client';
import type { Root } from 'react-dom/client';
import App from './App';
import { hostProps } from '../types';

export function mount(container: ContainerWithRoot, hostProps:hostProps) {
  if (!container.root) container.root = ReactDOM.createRoot(container);

  console.log('hostProps', hostProps);

  container.root.render(
    <React.StrictMode>
      <App hostProps={hostProps} />
    </React.StrictMode>
  );
}

export function unmount(container: any) {
  if (container.root) {
    container.root.unmount();
    delete container.root; 
    console.log("MFE: Componente desmontado con éxito.");
  }
}

interface ContainerWithRoot extends HTMLElement {
  root?: Root;
}
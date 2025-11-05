import React from 'react'; // NO BORRAR
import ReactDOM from 'react-dom/client';
import App from './App';
import './globals.css';
import { hostProps } from '../types';

const container = document.getElementById('root');

const mockHostProps:hostProps = {
    usuario: 'Desarrollador Local',
    empresaId: 999,
    token: 'local-token-abc'
}; 

if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<App hostProps={mockHostProps} />);
}
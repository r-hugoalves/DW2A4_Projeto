import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { Formulario } from './components/Formulario';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Formulario />
    <App />
  </React.StrictMode>
)

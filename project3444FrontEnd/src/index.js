import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
// import { Register, AboutUs, Comment, Home, Menu, Contact } from "./pages"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <App />
    
  </React.StrictMode>,
  
);



